import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { canonical, SITE } from "@/lib/site";

const TITLE = "Privacy Notice | NAVVAM Spices & Masalas";
const DESCRIPTION =
  "How NAVVAM Spices & Masalas handles the contact details you share through the website enquiry form, phone or WhatsApp.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/privacy") },
    ],
    links: [{ rel: "canonical", href: canonical("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy" }]} />
        <h1 className="mt-6 text-4xl text-forest">Privacy notice</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website is a product catalogue. It does not run a shop, accept payments, or create
            user accounts.
          </p>
          <section>
            <h2 className="text-xl text-forest">What we collect</h2>
            <p className="mt-2">
              If you use the enquiry form, the details you type — name, phone number, city, enquiry
              type, product of interest and message — are assembled into a WhatsApp message on your
              own device. Nothing is stored on this website. When you send that message, or call us,
              those details reach us through WhatsApp or your phone network.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">How we use it</h2>
            <p className="mt-2">
              We use the details only to respond to your enquiry and to discuss products, pack
              formats and ordering. We do not sell them.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Third-party services</h2>
            <p className="mt-2">
              Messages sent through WhatsApp are handled under WhatsApp's own terms and privacy
              policy. Links to Google Maps open Google's service.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-forest">Contact and removal</h2>
            <p className="mt-2">
              To ask what we hold or request removal of your enquiry details, call{" "}
              <a href={SITE.phonePrimaryHref} className="text-forest underline underline-offset-4">
                {SITE.phonePrimary}
              </a>
              , or write to us at {SITE.address.full}.
            </p>
          </section>
          <p>
            This notice will be updated when additional business, licence and contact details are
            confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}
