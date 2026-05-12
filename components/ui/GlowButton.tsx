import { cn } from "@/lib/utils";

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}

export default function GlowButton({
  href,
  onClick,
  children,
  variant = "solid",
  className,
  target,
  rel,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer";
  const solid =
    "bg-accent text-background hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]";
  const outline =
    "border border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)]";

  const classes = cn(base, variant === "solid" ? solid : outline, className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
