import { cpSync, mkdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { build } from 'esbuild';

execSync('npm run build', { stdio: 'inherit' });

const OUT = '.vercel/output';
mkdirSync(`${OUT}/static`, { recursive: true });
mkdirSync(`${OUT}/functions/ssr.func`, { recursive: true });

// Static client assets served at /assets/...
cpSync('dist/client', `${OUT}/static`, { recursive: true });

// Re-bundle the Vite SSR output with all npm deps inlined.
// Vite SSR externalizes npm packages (bare imports like 'react', 'lucide-react').
// Those can't be resolved in Vercel's serverless environment, so esbuild
// bundles them into a single self-contained file here.
await build({
  entryPoints: ['dist/server/server.js'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: `${OUT}/functions/ssr.func/bundle.js`,
  logLevel: 'info',
});

// Node.js HTTP adapter: converts the Web Fetch API handler to Node req/res
writeFileSync(
  `${OUT}/functions/ssr.func/index.js`,
  `import server from './bundle.js';

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers['host'];
  const url = new URL(req.url, \`\${proto}://\${host}\`).href;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    if (Array.isArray(value)) for (const v of value) headers.append(key, v);
    else headers.set(key, value);
  }

  let body;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    if (chunks.length) body = Buffer.concat(chunks);
  }

  const response = await server.fetch(
    new Request(url, { method: req.method, headers, body }),
    {},
    {}
  );

  res.statusCode = response.status;
  for (const [k, v] of response.headers) res.setHeader(k, v);
  res.end(Buffer.from(await response.arrayBuffer()));
}
`
);

writeFileSync(
  `${OUT}/functions/ssr.func/.vc-config.json`,
  JSON.stringify({
    runtime: 'nodejs20.x',
    handler: 'index.js',
    launcherType: 'Nodejs',
    shouldAddHelpers: true,
  })
);

writeFileSync(
  `${OUT}/config.json`,
  JSON.stringify({
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/ssr' },
    ],
  }, null, 2)
);

console.log('Vercel output ready!');
