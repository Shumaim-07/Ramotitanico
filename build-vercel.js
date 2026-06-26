import { cpSync, mkdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

execSync('npm run build', { stdio: 'inherit' });

const OUT = '.vercel/output';
mkdirSync(`${OUT}/static`, { recursive: true });
mkdirSync(`${OUT}/functions/ssr.func`, { recursive: true });

// Static client assets → served at /assets/...
cpSync('dist/client', `${OUT}/static`, { recursive: true });

// Server bundle → packaged inside the edge function
cpSync('dist/server', `${OUT}/functions/ssr.func`, { recursive: true });

// Thin wrapper: adapts our { fetch } object to a plain function
// Vercel Edge Runtime expects a function(request) => Response, not { fetch }
writeFileSync(
  `${OUT}/functions/ssr.func/index.js`,
  `import server from './server.js';\nexport default (request) => server.fetch(request, {}, {});\n`
);

writeFileSync(
  `${OUT}/functions/ssr.func/.vc-config.json`,
  JSON.stringify({ runtime: 'edge', entrypoint: 'index.js' })
);

writeFileSync(
  `${OUT}/config.json`,
  JSON.stringify({
    version: 3,
    routes: [
      // Serve existing static files (assets/) directly
      { handle: 'filesystem' },
      // Everything else → SSR edge function
      { src: '/(.*)', dest: '/ssr' }
    ]
  }, null, 2)
);

console.log('Vercel output ready at .vercel/output/');
