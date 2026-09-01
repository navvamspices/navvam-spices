import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { GENERAL_WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppButton";

export function EnquiryCTA({
  title = "Retail counters, kitchens and bulk buyers",
  description = "Stocking NAVVAM or planning a larger order? Send an enquiry and we will share available pack formats and ordering details.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-forest px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow text-gold">Retail &amp; bulk enquiries</p>
        <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-cream/80">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold" size="lg">
            <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </a>
          </Button>
          <Button asChild variant="onForest" size="lg">
            <Link to="/contact">Contact the team</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
