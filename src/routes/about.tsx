import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PRODUCTS } from "@/data/products";
import { canonical } from "@/lib/site";
import story from "@/assets/story.jpg";

const TITLE = "Our Story | NAVVAM Spices & Masalas, Medak Telangana";
const DESCRIPTION =
  "NAVVAM is a Telangana-based masala manufacturer building a range of everyday spice powders and cooking blends for Indian kitchens.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/about") },
    ],
    links: [{ rel: "canonical", href: canonical("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-warm px-4 pb-14 pt-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Our Story" }]} />
          <p className="eyebrow mt-6">Our story</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-forest sm:text-5xl">
            Familiar Indian flavours, made in Telangana
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            NAVVAM Spices &amp; Masalas is a Telangana-based manufacturer focused on bringing
            familiar Indian flavours to everyday kitchens. From essential spice powders to cooking
            blends for biryani, sambar, rasam, chicken, meat, fish, and chaat, the NAVVAM range is
            designed around the dishes people know and love.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <div className="aspect-4/3">
              <img
                src={story}
                alt="Hands blending dry ground spices on a warm, clean work surface"
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="Spices built around real cooking"
              description="Our focus is a dependable, everyday range: blends named after the dishes they are made for, and single spices that kitchens reach for daily."
            />
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={60}>
                <dt className="font-display text-xl text-forest">The range</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {PRODUCTS.length} products today — nine masala blends and four single-spice
                  powders, with pack formats confirmed on enquiry.
                </dd>
              </Reveal>
              <Reveal delay={120}>
                <dt className="font-display text-xl text-forest">Telangana roots</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We manufacture from Imampur Village on Toopran Road, near Medak City, Telangana.
                </dd>
              </Reveal>
              <Reveal delay={180}>
                <dt className="font-display text-xl text-forest">Kitchen relevance</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The range includes blends for familiar South Indian and wider Indian dishes.
                </dd>
              </Reveal>
              <Reveal delay={240}>
                <dt className="font-display text-xl text-forest">Honest information</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We publish only what we can confirm. Detailed product information follows final
                  verification.
                </dd>
              </Reveal>
            </dl>
          </div>
        </div>
      </section>

      <EnquiryCTA
        title="Become a NAVVAM retailer or distributor"
        description="If you run a retail counter, kitchen or distribution network in Telangana or beyond, send us an enquiry and we will share what is currently available."
      />
    </>
  );
}
