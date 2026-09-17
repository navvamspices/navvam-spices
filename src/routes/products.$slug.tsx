import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { categoryLabel, getProduct, relatedProducts } from "@/data/products";
import { canonical, productWhatsappUrl, SITE } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable | NAVVAM" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} | NAVVAM Spices & Masalas`;
    const description = `${product.description} Manufactured in Medak, Telangana. Pack sizes available on enquiry.`;
    const url = canonical(`/products/${params.slug}`);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            category: categoryLabel(product.category),
            brand: { "@type": "Brand", name: SITE.shortName },
            manufacturer: { "@type": "Organization", name: SITE.name },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
              { "@type": "ListItem", position: 2, name: "Products", item: canonical("/products") },
              { "@type": "ListItem", position: 3, name: product.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = relatedProducts(product);

  return (
    <>
      <section className="bg-gradient-warm px-4 pb-14 pt-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  width={900}
                  height={900}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow">{categoryLabel(product.category)}</p>
              <h1 className="mt-3 text-4xl leading-tight text-forest sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-6">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/70">
                  Best for
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.bestFor.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-sand bg-cream px-3.5 py-1.5 text-sm text-forest"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink/70">
                  Pack sizes
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {["40g", "50g", "100g", "200g", "500g", "1kg"].map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-cream px-3.5 py-1.5 text-sm font-medium text-forest"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-muted-foreground">
                  Contact NAVVAM for current pricing on each size.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-auto max-w-full whitespace-normal py-3 text-center">
                  <a
                    href={productWhatsappUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="shrink-0" />
                    Enquire about {product.name}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.phonePrimaryHref}>
                    <Phone aria-hidden="true" />
                    {SITE.phonePrimary}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl text-forest">How to use</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{product.howToUse}</p>
            <p className="mt-6 rounded-2xl border border-dashed border-input bg-secondary/70 p-4 text-sm text-ink/80">
              Product appearance and pack availability may vary. Contact NAVVAM for current
              details. Photography is for illustration and does not represent exact ingredients.
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl text-forest">Details on request</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ingredient, allergen, nutrition, certification and licence information will be
              published after final verification.
            </p>
            <Link
              to="/quality"
              className="mt-4 inline-block text-sm font-semibold text-forest underline underline-offset-4"
            >
              Read about quality &amp; packaging
            </Link>
          </Reveal>
        </div>
      </section>

      {related.length ? (
        <section className="bg-cream px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl text-forest">Related products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <EnquiryCTA />
    </>
  );
}
