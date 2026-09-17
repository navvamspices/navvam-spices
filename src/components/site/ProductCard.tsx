import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categoryLabel, type Product } from "@/data/products";
import { productWhatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article
      className="group enter-stagger relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift"
      style={{ "--enter-delay": `${Math.min(index, 8) * 60}ms` } as React.CSSProperties}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={900}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="eyebrow text-[0.65rem]">{categoryLabel(product.category)}</p>
        <h3 className="text-xl leading-snug text-forest">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["40g", "50g", "100g", "200g", "500g", "1kg"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
            View product
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          <a
            href={productWhatsappUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full border border-primary/20 text-forest transition-colors hover:bg-secondary"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
