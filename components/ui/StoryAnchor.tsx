"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

export default function StoryAnchor({
  href,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !href?.startsWith("#") ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const handled = !document.dispatchEvent(
      new CustomEvent("portfolio:navigate", {
        cancelable: true,
        detail: { id: href.slice(1) },
      })
    );

    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return <a {...props} href={href} onClick={handleClick} />;
}
