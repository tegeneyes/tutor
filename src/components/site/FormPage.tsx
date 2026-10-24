import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONES } from "@/lib/data";
import { EASE, container, fadeUp } from "@/lib/motion";

export type Field = { name: string; label: string; type?: string; options?: string[] };

export function FormPage({ title, subtitle, fields, submit, footer }: {
  title: string; subtitle: string; fields: Field[]; submit: string; footer?: ReactNode;
}) {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-secondary px-4 py-14">
      <motion.div
        className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
        variants={container(0.06, 0.08)}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp} className="text-2xl font-extrabold text-foreground">{title}</motion.h1>
        <motion.p variants={fadeUp} className="mt-1 text-sm text-muted-foreground">{subtitle}</motion.p>
        <motion.form variants={fadeUp} className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</span>
              {f.options ? (
                <select required name={f.name} className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select…</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input required name={f.name} type={f.type ?? "text"} className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
              )}
            </label>
          ))}
          <Button type="submit" variant="brand" className="h-11 w-full">{submit}</Button>
        </motion.form>
        <AnimatePresence initial={false}>
          {sent && (
            <motion.div
              role="status"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-4 flex gap-3 rounded-lg bg-orange-soft p-4 text-sm text-foreground">
                <Info className="h-5 w-5 shrink-0 text-orange" />
                <p>Online accounts aren't live yet, so nothing was saved. Please call{" "}
                  <a className="font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary" href={`tel:${PHONES[0]}`}>{PHONES[0]}</a> or{" "}
                  <a className="font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary" href={`tel:${PHONES[1]}`}>{PHONES[1]}</a> to register.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {footer && <motion.div variants={fadeUp} className="mt-6 text-center text-sm text-muted-foreground">{footer}</motion.div>}
      </motion.div>
    </div>
  );
}
