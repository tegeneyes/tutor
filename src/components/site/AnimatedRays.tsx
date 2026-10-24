import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Soft aurora wash behind the hero.
 *
 * Adapted from VengeanceUI's `animated-rays`
 * (https://github.com/Ashutoshx7/VengenceUI), re-pointed at this site's design
 * tokens so the wash stays on-palette in light and dark mode instead of using
 * the library's hardcoded hex colours.
 */
export function AnimatedRays({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDark(checkDark());

    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const stripes =
    "repeating-linear-gradient(100deg, var(--stripe-color) 0%, var(--stripe-color) 7%, transparent 10%, transparent 12%, var(--stripe-color) 16%)";
  const rainbow =
    "repeating-linear-gradient(100deg, var(--primary) 10%, var(--orange) 15%, var(--primary) 20%, var(--success) 25%, var(--primary) 30%)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ "--stripe-color": "var(--accent)" } as React.CSSProperties}
    >
      <div
        className="aurora-drift absolute inset-0"
        style={{
          backgroundImage: `${stripes}, ${rainbow}`,
          backgroundSize: "300%, 200%",
          backgroundPosition: "50% 50%, 50% 50%",
          filter: isDark
            ? "blur(12px) opacity(40%) saturate(150%)"
            : "blur(12px) opacity(22%)",
          maskImage: "radial-gradient(ellipse at 0% 0%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 0% 0%, black 30%, transparent 70%)",
        }}
      />
    </div>
  );
}
