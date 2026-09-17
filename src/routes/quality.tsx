import { createFileRoute } from "@tanstack/react-router";
import { Boxes, CookingPot, Info, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { canonical } from "@/lib/site";

const TITLE = "Quality & Packaging | NAVVAM Spices & Masalas";
const DESCRIPTION =
  "How NAVVAM approaches familiar flavour, careful packaging and kitchen relevance across its spice powders and masala blends.";

const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Sourced from known origins",
    body: "Chillies from Guntur, turmeric from Salem, coriander and black pepper from Malabar estates — sourced at peak harvest for full aroma and colour.",
  },
  {
    icon: Boxes,
    title: "Six pack sizes",
    body: "Available in 40g, 50g, 100g, 200g, 500g and 1kg formats — from small hanging pouches for daily use to larger packs for regular kitchens and bulk buyers.",
  },
  {
    icon: CookingPot,
    title: "Kitchen relevance",
    body: "Every product is chosen because it earns a place in everyday cooking. Blends are named after the dishes they are made for.",
  },
];

const PACK_SIZES = [
  { size: "40g", use: "Trial & single-use" },
  { size: "50g", use: "Daily home kitchen" },
  { size: "100g", use: "Regular household" },
  { size: "200g", use: "Frequent cooking" },
  { size: "500g", use: "Large family / small trade" },
  { size: "1kg", use: "Bulk & wholesale" },
];

export const Route = createFileRoute("/quality")({

  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/quality") },
    ],
    links: [{ rel: "canonical", href: canonical("/quality") }],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <section className="bg-gradient-warm px-4 pb-14 pt-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Quality" }]} />
          <p className="eyebrow mt-6">Quality &amp; packaging</p>
          <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-forest sm:text-5xl">
            Care in every pack
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            NAVVAM is building a spice and masala range across convenient pack formats. The
            principles below describe what we are working towards.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Focus areas"
            title="Three things we hold ourselves to"
            description="These are our stated aims for the range, not certified claims."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <p.icon aria-hidden="true" className="size-6 text-gold-deep" />
                <h3 className="mt-4 text-xl text-forest">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex gap-3 rounded-2xl border border-sand bg-cream p-6">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-deep" />
            <p className="text-sm leading-relaxed text-ink/85">
              Detailed ingredient, allergen, nutrition, certification, and licence information will
              be published after final verification. Until then, please contact us directly for the
              specifics you need before ordering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pack sizes */}
      <section className="bg-cream px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Packaging"
            title="Six pack sizes for every need"
            description="From a 40g trial pouch to a 1kg wholesale pack — all 13 products are available across the full size range."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PACK_SIZES.map((p, i) => (
              <Reveal
                key={p.size}
                delay={i * 60}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="font-display text-2xl text-gold-deep">{p.size}</span>
                <span className="text-sm text-muted-foreground">{p.use}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex gap-3 rounded-2xl border border-sand bg-cream p-6">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-deep" />
            <p className="text-sm leading-relaxed text-ink/85">
              Detailed ingredient, allergen, nutrition, certification, and licence information will
              be published after final verification. Contact us directly for specifics before ordering.
            </p>
          </Reveal>
        </div>
      </section>

      <EnquiryCTA
        title="Need pack or product specifics?"
        description="Tell us which product and pack format you are considering and we will confirm what is available today."
      />
    </>
  );
}
