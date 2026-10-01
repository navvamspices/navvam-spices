import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Flame, Leaf, MapPin, Package, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { FssaiLogo, VegBadge } from "@/components/site/FssaiLogo";
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

const PILLARS = [
  {
    title: "Single-Origin Roots",
    body: "Hand-picked from Salem, Guntur, and Malabar estates at peak harvest potency.",
  },
  {
    title: "Slow Cold-Grinding",
    body: "Milled at controlled low heat to safeguard precious volatile natural spice oils.",
  },
  {
    title: "Zero Adulteration",
    body: "No starch, zero artificial food colours, and no exhausted spent residue.",
  },
  {
    title: "FSSAI & GMP Standards",
    body: "Strict compliance with Food Safety & Standards Act, 2006, GMP hygienic milling, and guaranteed shelf life.",
  },
];

const TRUST = [
  { icon: Leaf, label: `${PRODUCTS.length} products (100% Vegetarian)` },
  { icon: Package, label: "Pack sizes: 40g · 50g · 100g · 200g · 500g · 1kg" },
  { icon: ShieldCheck, label: `FSSAI: ${SITE.fssai.licenseStatus}` },
  { icon: MapPin, label: "Manufactured in Medak, Telangana" },
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
    body: "Select the product and pack size — available in 40g, 50g, 100g, 200g, 500g and 1kg formats.",
  },
  {
    step: "03",
    title: "Enquire",
    body: "Call or WhatsApp NAVVAM on +91 91336 44949 for current pricing and ordering details.",
  },
];

const DISTRIBUTOR_PERKS = [
  "Territory exclusivity per district",
  "All 13 SKUs across 6 pack sizes",
  "Direct factory support & logistics",
  "Healthy margin structure",
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

      {/* Purity Pillars */}
      <section className="border-b border-border bg-sand px-4 py-12">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <li key={p.title} className="border-l-2 border-gold pl-5">
              <h3 className="font-display text-lg text-forest">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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

      {/* Food Safety & FSSAI Compliance Section */}
      <section className="border-t border-border bg-gradient-warm px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-sand bg-card p-8 shadow-soft sm:p-12">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="eyebrow text-gold-deep">Food Safety &amp; Regulatory Compliance</span>
                    <span className="text-muted-foreground">•</span>
                    <VegBadge />
                  </div>
                  <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
                    Adhering Strictly to FSSAI Standards
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    We are committed to delivering safe, high-quality food products that adhere strictly
                    to the standards set by the Food Safety and Standards Authority of India (FSSAI).
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl border border-border bg-white p-4 shadow-sm text-center">
                  <FssaiLogo className="mx-auto h-12 w-auto" />
                  <p className="mt-1.5 text-xs font-bold text-forest">
                    {SITE.fssai.licenseStatus}
                  </p>
                  <p className="text-[11px] text-muted-foreground">FoSCoS Reference</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-border bg-cream/70 p-4">
                  <p className="text-sm font-semibold text-forest">FSS Act, 2006</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    100% compliance with Food Safety &amp; Standards Act, 2006 across all ingredients and blends.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-cream/70 p-4">
                  <p className="text-sm font-semibold text-forest">Hygienic GMP Facility</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Processed and packed in clean, hygienic facilities following Good Manufacturing Practices.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-cream/70 p-4">
                  <p className="text-sm font-semibold text-forest">45+ Days Shelf Life</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Products dispatched to customers have at least 30% or 45+ days of remaining shelf life.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-cream/70 p-4">
                  <p className="text-sm font-semibold text-forest">FoSCoS Verification</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Verify our license and business registration on official FoSCoS portal (foscos.fssai.gov.in).
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild variant="gold" size="lg">
                  <a href={SITE.fssai.foscosPortalUrl} target="_blank" rel="noopener noreferrer">
                    Verify on FoSCoS Portal
                    <ExternalLink className="ml-1.5 size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/quality" hash="fssai-compliance">
                    Read Food Safety Details
                  </Link>
                </Button>
              </div>
            </Reveal>
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

      {/* Distributor / B2B section */}
      <section className="border-y border-border bg-cream px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <Reveal className="text-center">
              <p className="eyebrow">District expansion · Trade desk</p>
              <h2 className="mt-3 text-3xl text-forest sm:text-4xl">
                Become an Exclusive District Distributor
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                NAVVAM is appointing established FMCG distributors and stockists across every
                district in Telangana and beyond. Gain territory exclusivity, direct mill logistics,
                and healthy margins on all 13 fast-moving SKUs across 6 pack sizes.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {DISTRIBUTOR_PERKS.map((perk) => (
                  <li
                    key={perk}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-ink/80"
                  >
                    ✓ {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="gold" size="lg">
                  <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    Apply on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact the trade desk</Link>
                </Button>
              </div>
            </Reveal>
          </div>
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
