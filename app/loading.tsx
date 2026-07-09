/**
 * Global loading UI shown by Next.js during route transitions
 * (while Server Components are streaming). Keeps the layout stable
 * so there's no layout shift when navigating between pages.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-luxury">
      {/* Shimmer placeholder for hero */}
      <div className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <div className="mx-auto h-4 w-24 animate-pulse rounded-full bg-brand-border" />
            <div className="mx-auto h-10 w-3/4 animate-pulse rounded-brand bg-brand-border" />
            <div className="mx-auto h-4 w-1/2 animate-pulse rounded-full bg-brand-border" />
          </div>

          {/* Card skeletons */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-brand-lg bg-white shadow-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] animate-pulse bg-brand-border" />
                <div className="space-y-3 p-6">
                  <div className="h-3 w-1/3 animate-pulse rounded-full bg-brand-border" />
                  <div className="h-5 w-3/4 animate-pulse rounded bg-brand-border" />
                  <div className="h-3 w-full animate-pulse rounded-full bg-brand-border" />
                  <div className="h-3 w-2/3 animate-pulse rounded-full bg-brand-border" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
