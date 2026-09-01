import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Leaf, MapPin, Package, Phone, Sparkles } from "lucide-react";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { CATEGORIES, FEATURED_PRODUCTS, PRODUCTS } from "@/data/products";
import {
  canonical,
  GENERAL_WHATSAPP_URL,
  MAPS_DIRECTIONS_URL,
  SITE,
  socialImageMeta,
} from "@/lib/site";
import hero from "@/assets/hero.jpg";
import catBlends from "@/assets/cat-blends.jpg";
import catPowders from "@/assets/cat-powders.jpg";
import story from "@/assets/story.jpg";

const TITLE = SITE.defaultTitle;
const DESCRIPTION = SITE.defaultDescription;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/") },
      ...socialImageMeta(hero),
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: Home,
});

const TRUST = [
  { icon: Leaf, label: `${PRODUCTS.length} products in the range` },
  { icon: Package, label: "Pack sizes available on enquiry" },
  { icon: MapPin, label: "Manufactured in Medak, Telangana" },
  { icon: Sparkles, label: "Blends built around everyday dishes" },
];

const PROCESS = [
  {
    step: "01",
    title: "Explore",
    body: `Browse ${PRODUCTS.length} masala blends and single-spice powders in the NAVVAM range.`,
  },
  {
    step: "02",
    title: "Choose",
    body: "Select the product that matches the dish or cooking need you have in mind.",
  },
  {
    step: "03",
    title: "Enquire",
    body: "Contact NAVVAM for current pack sizes, pricing and ordering details.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Assorted Indian spices and ground masala powders arranged on a dark surface"
            width={1920}
            height={1080}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest/95 from-10% via-forest/80 via-45% to-forest/70 sm:to-forest/15" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Spices &amp; masalas from Telangana</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-cream sm:text-6xl">{SITE.tagline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
              {SITE.supportingLine}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/products">Explore the range</Link>
              </Button>
              <Button asChild variant="onForest" size="lg">
                <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-cream px-4 py-6">
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-3 text-sm text-ink/85">
              <t.icon aria-hidden="true" className="size-5 shrink-0 text-gold-deep" />
              {t.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Two ways to cook"
            title="Masala blends and single-spice powders"
            description="Whether you are building a curry from scratch or finishing a dish, the NAVVAM range covers both."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CATEGORIES.map((cat, i) => (
              <Reveal
                key={cat.id}
                delay={i * 90}
                className="group relative overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <div className="aspect-16/10">
                  <img
                    src={cat.id === "masala-blends" ? catBlends : catPowders}
                    alt={
                      cat.id === "masala-blends"
                        ? "Warm-toned masala blends in small bowls on a cream cloth"
                        : "Turmeric, chilli, coriander and pepper powders in neat mounds"
                    }
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-forest/90 via-forest/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-cream">
                    <Link
                      to="/products"
                      search={{ category: cat.id }}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {cat.label}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/85">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-cream px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Signature picks"
            title="Kitchen favourites from the range"
            description="A starting point across curries, biryani and everyday seasoning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.slice(0, 6).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View all {PRODUCTS.length} products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <div className="aspect-4/3">
              <img
                src={story}
                alt="Ground spices being blended by hand on a warm work surface"
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl text-forest sm:text-4xl">
              A Telangana spice brand for everyday kitchens
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              NAVVAM manufactures spice powders and masala blends from Imampur Village, near Medak
              City. The range includes blends for familiar South Indian and wider Indian
              dishes, and we publish only what we can confirm about it.
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/about">Read our story</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-warm px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How to order"
            title="Finding the right flavour is simple."
            description="Explore the range, choose what suits your cooking, and enquire for pack sizes and pricing."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {PROCESS.map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 90}
                as="li"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display text-3xl text-gold-deep">{s.step}</span>
                <h3 className="mt-3 text-xl text-forest">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <EnquiryCTA />

      {/* Contact preview */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Phone aria-hidden="true" className="size-5 text-gold-deep" />
            <h2 className="mt-3 text-xl text-forest">Call us</h2>
            <p className="mt-2 space-x-2 text-sm">
              <a href={SITE.phonePrimaryHref} className="text-forest underline underline-offset-4">
                {SITE.phonePrimary}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={SITE.phoneSecondaryHref} className="text-forest underline underline-offset-4">
                {SITE.phoneSecondary}
              </a>
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <MapPin aria-hidden="true" className="size-5 text-gold-deep" />
            <h2 className="mt-3 text-xl text-forest">Find us</h2>
            <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
              {SITE.address.full}
            </address>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-forest underline underline-offset-4"
            >
              Get directions
            </a>
          </Reveal>
          <Reveal delay={160} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Flame aria-hidden="true" className="size-5 text-gold-deep" />
            <h2 className="mt-3 text-xl text-forest">Send an enquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Share your requirement and we will reply with available pack formats and ordering
              details.
            </p>
            <Button asChild className="mt-4">
              <Link to="/contact">Contact NAVVAM</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
