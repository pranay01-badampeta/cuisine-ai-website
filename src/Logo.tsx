export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className={`inline-flex items-center gap-2.5 font-extrabold tracking-tight ${big ? "text-4xl" : "text-xl"}`}>
      <span
        className={`relative grid place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-night shadow-[0_0_24px_-4px_rgb(16_185_129/0.7)] ${big ? "size-12" : "size-8"}`}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className={big ? "size-7" : "size-5"} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <path d="M6 17h12" />
        </svg>
        <span className={`absolute rounded-full bg-saffron-400 ring-2 ring-night ${big ? "-top-1 -right-1 size-3.5" : "-top-0.5 -right-0.5 size-2.5"}`} />
      </span>
      <span>
        Cuisine<span className="text-gradient">.AI</span>
      </span>
    </span>
  );
}
