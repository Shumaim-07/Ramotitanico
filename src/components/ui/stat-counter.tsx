interface Stat {
  value: string;
  label: string;
}

export function StatCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card p-6 text-center sm:p-8">
          <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
