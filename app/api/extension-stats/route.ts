import { NextResponse } from "next/server";

// Cache the route response for 24 hours — CWS user counts update daily at most
export const revalidate = 86400;

const FALLBACK = { users: 841, rating: 5.0, ratingCount: 8 };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get("id");

  if (!storeId) {
    return NextResponse.json(FALLBACK);
  }

  try {
    // cache: 'no-store' on the upstream fetch — the route-level revalidate above
    // handles caching the response. Avoid Next.js data cache double-layering
    // which can serve stale entries unexpectedly.
    const res = await fetch(
      `https://chromewebstore.google.com/detail/${storeId}`,
      {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(FALLBACK);
    }

    const html = await res.text();

    // Extract user count — take the last match so related-extension noise
    // earlier in the page doesn't shadow the main extension's stat.
    // CWS renders e.g. "841 users" in the breadcrumb area.
    const usersMatches = [...html.matchAll(/([\d,]+)\s*users/g)];
    const usersMatch = usersMatches.at(-1);
    const users = usersMatch
      ? parseInt(usersMatch[1].replace(/,/g, ""), 10)
      : FALLBACK.users;

    // Extract rating — "5.0" appears inside a <span> before an <svg> star icon
    const ratingMatch = html.match(/<span[^>]*>\s*(\d+\.\d+)\s*<\/span>/);
    const rating = ratingMatch ? parseFloat(ratingMatch[1]) : FALLBACK.rating;

    // Extract ratings count: e.g. "8 ratings"
    const ratingCountMatch = html.match(/(\d+)\s*ratings/);
    const ratingCount = ratingCountMatch
      ? parseInt(ratingCountMatch[1], 10)
      : FALLBACK.ratingCount;

    return NextResponse.json({ users, rating, ratingCount });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
