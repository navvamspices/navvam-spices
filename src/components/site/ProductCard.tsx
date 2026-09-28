import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { categoryLabel, type Product } from "@/data/products";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppButton";

const SIZES = ["40g", "50g", "100g", "200g", "500g", "1kg"];

function cartWhatsappUrl(productName: string, sizes: string[]) {
  const sizeText = sizes.length > 0 ? sizes.join(", ") : "100g";
  const msg = `Hello NAVVAM, I would like to order ${productName} — ${sizeText} pack${sizes.length > 1 ? "s" : ""}. Please share pricing and ordering details.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (e: React.MouseEvent, size: string) => {
    e.preventDefault();
    setSelected((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(cartWhatsappUrl(product.name, selected), "_blank", "noopener,noreferrer");
  };

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

        {/* Multi-selectable gram pills */}
        <div className="relative z-10 mt-3">
          <p className="mb-1.5 text-xs font-medium text-ink/60">
            Select size{selected.length > 1 ? "s" : ""}{" "}
            {selected.length > 0 && (
              <span className="text-forest">({selected.length} selected)</span>
            )}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={(e) => toggle(e, s)}
                aria-pressed={selected.includes(s)}
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors duration-200",
                  selected.includes(s)
                    ? "border-forest bg-forest text-cream"
                    : "border-border bg-secondary text-muted-foreground hover:border-forest/50 hover:text-forest",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-auto flex items-center justify-between gap-2 pt-4">
          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-forest/90"
          >
            <ShoppingCart aria-hidden="true" className="size-3.5" />
            {selected.length > 0 ? `Order (${selected.length})` : "Add to cart"}
          </button>
          <a
            href={cartWhatsappUrl(product.name, selected)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="inline-flex size-9 items-center justify-center rounded-full border border-primary/20 text-forest transition-colors hover:bg-secondary"
          >
            <WhatsAppIcon className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
