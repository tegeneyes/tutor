import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="TutorLink Ethiopia home">
      <GraduationCap className={cn("h-10 w-10", light ? "text-navy-foreground" : "text-foreground")} strokeWidth={2.2} />
      <span className="leading-none">
        <span className={cn("block text-2xl font-extrabold tracking-tight", light ? "text-navy-foreground" : "text-foreground")}>
          Tutor<span className="text-primary">Link</span>
        </span>
        <span className={cn("mt-0.5 block text-[11px] font-medium tracking-wide", light ? "text-navy-foreground/70" : "text-muted-foreground")}>
          Ethiopia · Learn · Teach · Grow
        </span>
      </span>
    </Link>
  );
}
