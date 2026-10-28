interface BrowserFrameProps {
  src: string;
  alt: string;
  label: string;
  images?: string[];
  accent?: string;
}

export default function BrowserFrame({ src, alt, label, images, accent }: BrowserFrameProps) {
  return (
    <div className="surface-card overflow-hidden rounded-[1.5rem] p-2.5 sm:p-3">
      <div className="flex items-center gap-3 border-b border-border px-2 pb-2.5 pt-1 sm:px-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="window-dot window-dot--accent" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <span className="min-w-0 flex-1 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
          {label}
        </span>
        <span className="rounded-full bg-background px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-text-muted">
          Preview
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-surface-elevated">
        {images?.length ? (
          <div
            className="flex h-full items-center justify-center gap-4 p-5"
            style={{ background: `linear-gradient(135deg, ${accent}33, ${accent}0d 60%, transparent)` }}
          >
            {images.map((image, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={image}
                src={image}
                alt={`${alt} ${i + 1}`}
                className="max-h-full w-auto rounded-xl shadow-[0_18px_40px_rgb(23_23_23/0.25)]"
              />
            ))}
          </div>
        ) : src ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
            Preview coming soon
          </div>
        )}
      </div>
    </div>
  );
}
