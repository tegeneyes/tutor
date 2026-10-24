import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  // The server renders light markup; only show an icon once we know the real theme.
  useEffect(() => setMounted(true), []);

  const label = !mounted
    ? "Switch colour theme"
    : isDark
      ? "Switch to light theme"
      : "Switch to dark theme";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      className={cn(
        "grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={mounted ? theme : "placeholder"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="grid place-items-center"
        >
          {mounted ? isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" /> : null}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
