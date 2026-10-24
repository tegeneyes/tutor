import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Wallet, Search, SearchX, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, container, fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { SAMPLE_JOBS, SUBJECTS, PHONES, type Job } from "@/lib/data";

type Search = { subject?: string | undefined };

export const Route = createFileRoute("/jobs")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    subject: typeof s["subject"] === "string" ? s["subject"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find Tutoring Jobs — TutorLink Ethiopia" },
      { name: "description", content: "Browse home and online tutoring jobs across Ethiopia by subject." },
      { property: "og:title", content: "Find Tutoring Jobs — TutorLink Ethiopia" },
      { property: "og:description", content: "Browse home and online tutoring jobs across Ethiopia by subject." },
    ],
  }),
  component: Jobs,
});

function Jobs() {
  const { subject } = Route.useSearch();
  const [q, setQ] = useState("");
  const [mode, setMode] = useState<"All" | Job["mode"]>("All");
  const jobs = SAMPLE_JOBS.filter(
    (j) =>
      (!subject || j.subject === subject) &&
      (mode === "All" || j.mode === mode) &&
      (j.title + j.location).toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <motion.div
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6"
      variants={container(0.08, 0.05)}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={fadeUp} className="text-3xl font-extrabold text-foreground">Find Tutoring Jobs</motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">Home and online opportunities across Ethiopia.</motion.p>
      <motion.p variants={fadeUp} className="mt-4 rounded-lg border border-border bg-orange-soft px-4 py-3 text-sm text-foreground">
        These are sample listings. Online applications are coming soon — for now, call{" "}
        <a className="font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary" href={`tel:${PHONES[0]}`}>{PHONES[0]}</a> to apply.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
        <Link to="/jobs" search={{}} className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent data-[status=active]:bg-primary data-[status=active]:text-primary-foreground" activeOptions={{ includeSearch: true }}>All</Link>
        {SUBJECTS.map((s) => (
          <Link key={s.slug} to="/jobs" search={{ subject: s.slug }} activeOptions={{ includeSearch: true }}
            className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent data-[status=active]:bg-primary data-[status=active]:text-primary-foreground">
            {s.name}
          </Link>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search jobs</span>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title or location"
            className="h-11 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
        </label>
        <div className="flex gap-2">
          {(["All", "Home", "Online"] as const).map((m) => (
            <Button key={m} variant={mode === m ? "brand" : "brandOutline"} className="h-11" onClick={() => setMode(m)}>{m}</Button>
          ))}
        </div>
      </motion.div>

      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border py-16 text-center"
        >
          <SearchX className="h-10 w-10 text-muted-foreground" />
          <p className="mt-3 font-semibold text-foreground">No jobs match your filters</p>
          <Link to="/jobs" search={{}} className="mt-2 text-sm font-semibold text-primary">Clear filters</Link>
        </motion.div>
      ) : (
        <motion.ul layout className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {jobs.map((j) => (
              <motion.li
                key={j.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32, ease: EASE }}
                className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-card"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    {SUBJECTS.find((s) => s.slug === j.subject)?.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{j.posted}</span>
                </div>
                <h2 className="mt-3 font-bold text-foreground">{j.title}</h2>
                <p className="text-sm text-muted-foreground">{j.grade} · {j.mode}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{j.location}</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{j.schedule}</li>
                  <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" />{j.pay}</li>
                </ul>
                <Button asChild variant="brand" className="mt-5 h-10">
                  <a href={`tel:${PHONES[0]}`}><Phone /> Call to Apply</a>
                </Button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </motion.div>
  );
}
