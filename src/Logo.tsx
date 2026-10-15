export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${big ? "text-4xl" : "text-xl"}`}>
      <span
        className={`relative grid place-items-center rounded-xl bg-ink text-white ${big ? "size-12" : "size-8"}`}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className={big ? "size-7" : "size-5"} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <path d="M6 17h12" />
        </svg>
      </span>
      <span>
        Cuisine<span className="text-muted">.AI</span>
      </span>
    </span>
  );
}
