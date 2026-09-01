import { createFileRoute } from "@tanstack/react-router";
import { Boxes, CookingPot, Info, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { canonical } from "@/lib/site";

const TITLE = "Quality & Packaging | NAVVAM Spices & Masalas";
const DESCRIPTION =
  "How NAVVAM approaches consistent flavour, careful packaging and kitchen relevance across its spice powders and masala blends.";

const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Familiar flavour",
    body: "Our focus is a range built around familiar Indian flavours, with product details confirmed directly with us before ordering.",
  },
  {
    icon: Boxes,
    title: "Careful packaging",
    body: "We are building the range across convenient pack formats — from small hanging pouches for trial and daily use to larger box packs for regular kitchens.",
  },
  {
    icon: CookingPot,
    title: "Kitchen relevance",
    body: "Every product is chosen because it earns a place in everyday cooking, not because it fills a shelf.",
  },
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

      <EnquiryCTA
        title="Need pack or product specifics?"
        description="Tell us which product and pack format you are considering and we will confirm what is available today."
      />
    </>
  );
}
