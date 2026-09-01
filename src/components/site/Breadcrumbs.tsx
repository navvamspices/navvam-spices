import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="rounded-sm underline-offset-4 hover:text-forest hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-forest">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? (
              <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
