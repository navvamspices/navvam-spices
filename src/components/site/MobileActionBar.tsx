import { Phone } from "lucide-react";
import { GENERAL_WHATSAPP_URL, SITE } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={SITE.phonePrimaryHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/25 px-4 text-sm font-semibold text-forest"
        >
          <Phone aria-hidden="true" className="size-4" />
          Call us
        </a>
        <a
          href={GENERAL_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-4 text-sm font-semibold text-cream"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
