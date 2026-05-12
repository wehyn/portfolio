export default function SkillBadge({ name }: { name: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-text-secondary transition-all duration-200 hover:border-border-bright hover:text-text-primary">
      {name}
    </div>
  );
}
