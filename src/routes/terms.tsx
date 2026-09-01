import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { canonical, SITE } from "@/lib/site";

const TITLE = "Terms of Use | NAVVAM Spices & Masalas";
const DESCRIPTION =
  "Terms covering use of the NAVVAM Spices & Masalas catalogue website, product information accuracy and enquiries.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/terms") },
    ],
    links: [{ rel: "canonical", href: canonical("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
        <h1 className="mt-6 text-4xl text-forest">Terms of use</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl text-forest">Catalogue only</h2>
            <p className="mt-2">
              This website presents the {SITE.name} product range for information and enquiry
              purposes. It is not an online shop: no prices are quoted, no orders are placed, and no
              payments are taken here.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Accuracy of information</h2>
            <p className="mt-2">
              Product appearance and pack availability may vary. Photography on this site is
              illustrative and does not represent exact ingredients or pack contents. Ingredient,
              allergen, nutrition, certification and licence information will be published after
              final verification — please contact us for current details before ordering.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Enquiries</h2>
            <p className="mt-2">
              Any pack formats, quantities, timelines or commercial terms discussed by phone or
              WhatsApp are confirmed case by case and are subject to availability.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Intellectual property</h2>
            <p className="mt-2">
              The NAVVAM name, logo and site content belong to {SITE.name}. Please do not reuse them
              without permission.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Contact</h2>
            <p className="mt-2">
              Questions about these terms:{" "}
              <a href={SITE.phonePrimaryHref} className="text-forest underline underline-offset-4">
                {SITE.phonePrimary}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
