export default function SkillBadge({ name }: { name: string }) {
  return (
    <div className="rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-text-secondary transition-colors duration-200 hover:border-accent/50 hover:text-text-primary">
      {name}
    </div>
  );
}
