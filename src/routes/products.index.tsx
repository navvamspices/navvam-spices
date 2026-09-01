import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EmptyState } from "@/components/site/EmptyState";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/data/products";
import { canonical, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProductSearch = { category?: CategoryId | undefined; q?: string | undefined };

const TITLE = "Spice Powders & Masala Blends | NAVVAM Products";
const DESCRIPTION =
  "Browse all 13 NAVVAM products — masala blends for biryani, sambar, rasam, chicken, meat, fish and chaat, plus turmeric, chilli, coriander and black pepper powders.";

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const rawCategory = search["category"];
    const rawQuery = search["q"];
    return {
      category:
        rawCategory === "masala-blends" || rawCategory === "single-spice-powders"
          ? rawCategory
          : undefined,
      q: typeof rawQuery === "string" && rawQuery.length > 0 ? rawQuery : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/products") },
    ],
    links: [{ rel: "canonical", href: canonical("/products") }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/products/" });
  const [query, setQuery] = useState(q ?? "");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCategory = !category || p.category === category;
      const matches =
        !needle ||
        p.name.toLowerCase().includes(needle) ||
        p.short.toLowerCase().includes(needle) ||
        p.bestFor.some((tag) => tag.toLowerCase().includes(needle));
      return inCategory && matches;
    });
  }, [category, query]);

  const setCategory = (next?: CategoryId) => {
    void navigate({ search: (prev) => ({ ...prev, category: next }) });
  };

  return (
    <>
      <section className="bg-gradient-warm px-4 pb-10 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
          <p className="eyebrow mt-6">The NAVVAM range</p>
          <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-forest sm:text-5xl">
            Spice powders and masala blends for everyday Indian cooking
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{SITE.supportingLine}</p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-sm">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="product-search"
                type="search"
                value={query}
                placeholder="Search e.g. biryani, turmeric"
                onChange={(e) => {
                  const value = e.target.value;
                  setQuery(value);
                  void navigate({
                    search: (prev) => ({ ...prev, q: value.length ? value : undefined }),
                    replace: true,
                  });
                }}
                className="h-11 rounded-full pl-9"
              />
            </div>

            <div
              role="group"
              aria-label="Filter products by category"
              className="flex flex-wrap gap-2"
            >
              <FilterChip active={!category} onClick={() => setCategory(undefined)}>
                All
              </FilterChip>
              {CATEGORIES.map((c) => (
                <FilterChip
                  key={c.id}
                  active={category === c.id}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </FilterChip>
              ))}
            </div>
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-muted-foreground">
            Showing {filtered.length} of {PRODUCTS.length} products
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState
                title="No products match that search"
                description="Try a different spice or dish name, or view the complete NAVVAM range."
                action={
                  <Button
                    onClick={() => {
                      setQuery("");
                      void navigate({ search: {} });
                    }}
                  >
                    Clear filters
                  </Button>
                }
              />
            </div>
          )}

          <p className="mt-8 text-sm text-muted-foreground">
            Pack sizes available on enquiry.{" "}
            <Link to="/contact" className="text-forest underline underline-offset-4">
              Contact NAVVAM
            </Link>{" "}
            for current details.
          </p>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors duration-300",
        active
          ? "border-forest bg-forest text-cream"
          : "border-input bg-background text-ink/75 hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
