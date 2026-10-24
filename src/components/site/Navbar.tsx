import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { EASE, container, fadeUp } from "@/lib/motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";


const LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Find Jobs", to: "/jobs" as const },
  { label: "For Parents", to: "/" as const, hash: "parents" },
  { label: "How It Works", to: "/" as const, hash: "how-it-works" },
  { label: "Subjects", to: "/" as const, hash: "subjects" },
  { label: "About", to: "/about" as const },
];

const linkCls =
  "relative py-5 text-[15px] font-medium text-foreground transition-colors hover:text-primary data-[status=active]:text-primary";

const underline = {
  hover: { scaleX: 1, transition: { duration: 0.28, ease: EASE } },
  rest: { scaleX: 0, transition: { duration: 0.22, ease: EASE } },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [spotOn, setSpotOn] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Cursor-tracking spotlight adapted from VengeanceUI's `spotlight-navbar`,
  // re-pointed at this site's tokens so it stays on-palette in both themes.
  function trackSpot(e: React.MouseEvent<HTMLDivElement>) {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.setProperty("--spot-x", `${e.clientX - bar.getBoundingClientRect().left}px`);
  }

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div
        ref={barRef}
        onMouseMove={trackSpot}
        onMouseEnter={() => setSpotOn(true)}
        onMouseLeave={() => setSpotOn(false)}
        className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden transition-opacity duration-300 lg:block"
          style={{
            opacity: spotOn ? 1 : 0,
            background:
              "radial-gradient(160px circle at var(--spot-x, 50%) 100%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 65%)",
          }}
        />
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <motion.span
              key={l.label}
              className="relative inline-flex"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                activeOptions={{ exact: true, includeHash: !!l.hash }}
                className={linkCls}
              >
                {l.label}
              </Link>
              <motion.span
                aria-hidden
                variants={underline}
                className="pointer-events-none absolute inset-x-0 bottom-3 h-0.5 origin-left rounded-full bg-primary"
              />
            </motion.span>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button asChild variant="brandOutline" className="h-10 px-5">
              <Link to="/login">Login</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button asChild variant="brand" className="h-10 px-5">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button

          className="grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-accent lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18, ease: EASE }}
              className="grid place-items-center"
            >
              {open ? <X /> : <Menu />}
            </motion.span>
          </AnimatePresence>
        </button>
        </div>

      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden border-t border-border bg-background lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <motion.div
              className="px-4 pb-4"
              variants={container(0.05, 0.05)}
              initial="hidden"
              animate="show"
            >
              {LINKS.map((l) => (
                <motion.div key={l.label} variants={fadeUp}>
                  <Link
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-3 font-medium text-foreground hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-4 grid grid-cols-2 gap-3">
                <Button asChild variant="brandOutline" className="h-11">
                  <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                </Button>
                <Button asChild variant="brand" className="h-11">
                  <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
