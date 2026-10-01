import { Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { GENERAL_WHATSAPP_URL, MAPS_DIRECTIONS_URL, SITE } from "@/lib/site";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { FssaiLogo, VegIcon } from "./FssaiLogo";
import { WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-forest px-4 pb-28 pt-16 text-cream/80 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl text-cream">NAVVAM</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">Spices &amp; Masalas</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{SITE.tagline}</p>
        </div>

        <nav aria-label="Products" className="text-sm">
          <h2 className="font-display text-lg text-cream">Range</h2>
          <ul className="mt-3 space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="underline-offset-4 hover:text-cream hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="underline-offset-4 hover:text-cream hover:underline">
                All {PRODUCTS.length} products
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company" className="text-sm">
          <h2 className="font-display text-lg text-cream">Company</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/about" className="underline-offset-4 hover:text-cream hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/quality" className="underline-offset-4 hover:text-cream hover:underline">
                Quality &amp; Packaging
              </Link>
            </li>
            <li>
              <Link to="/quality" hash="fssai-compliance" className="underline-offset-4 hover:text-cream hover:underline">
                Food Safety &amp; FSSAI
              </Link>
            </li>
            <li>
              <Link to="/contact" className="underline-offset-4 hover:text-cream hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="underline-offset-4 hover:text-cream hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="underline-offset-4 hover:text-cream hover:underline">
                Terms
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="font-display text-lg text-cream">Get in touch</h2>
          <ul className="mt-3 space-y-3">
            <li className="flex items-start gap-2">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="flex flex-col">
                <a href={SITE.phonePrimaryHref} className="hover:text-cream hover:underline">
                  {SITE.phonePrimary}
                </a>
                <a href={SITE.phoneSecondaryHref} className="hover:text-cream hover:underline">
                  {SITE.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold" />
              <a
                href={GENERAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream hover:underline"
              >
                Enquire on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2 text-cream/80">
              <span className="mt-0.5 size-4 shrink-0 text-gold">@</span>
              <a
                href="mailto:info@navvamspices.com"
                className="hover:text-cream hover:underline"
              >
                info@navvamspices.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                <address className="not-italic leading-relaxed">
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.region}{" "}
                  {SITE.address.postalCode}, {SITE.address.country}
                </address>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-gold underline-offset-4 hover:underline"
                >
                  Get directions
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* FSSAI Regulatory Compliance Banner */}
      <div className="mx-auto mt-12 rounded-2xl border border-cream/20 bg-forest/40 p-5 text-cream/90 backdrop-blur-xs">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="flex shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-xs">
              <FssaiLogo className="h-9 w-auto" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-base text-cream">Food Safety &amp; Regulatory Compliance</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                  <VegIcon className="size-3" />
                  100% Vegetarian
                </span>
              </div>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-cream/75">
                We strictly adhere to standards set by the Food Safety and Standards Authority of India (FSSAI).
                All spice powders and blends comply with the Food Safety and Standards Act, 2006, processed in hygienic GMP facilities with guaranteed 45+ days remaining shelf life upon dispatch.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="font-medium text-gold">
                  FSSAI Status: <span className="font-semibold text-cream">{SITE.fssai.licenseStatus}</span>
                </span>
                <span className="text-cream/40">•</span>
                <span className="text-cream/80">{SITE.fssai.businessName}</span>
                <span className="text-cream/40">•</span>
                <span className="text-cream/70">Medak, Telangana</span>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2.5">
            <a
              href={SITE.fssai.foscosPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/50 bg-gold/15 px-3 py-1.5 text-xs font-medium text-gold hover:bg-gold/25 hover:text-cream transition"
            >
              <span>Verify on FoSCoS</span>
              <ExternalLink className="size-3" />
            </a>
            <Link
              to="/quality"
              hash="fssai-compliance"
              className="inline-flex items-center gap-1 text-xs text-cream/80 underline underline-offset-4 hover:text-cream"
            >
              FSSAI Commitments
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-cream/15 pt-6 text-xs">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Catalogue website — pack sizes and product
          details available on enquiry.
        </p>
        <p className="text-cream/60">
          Zero adulteration · Cold-ground · Sourced from Guntur, Salem &amp; Malabar
        </p>
        <p className="text-cream/50 text-xs">
          Regulated under the Food Safety and Standards Act, 2006. FSSAI License: {SITE.fssai.licenseStatus}. Official verification accessible on the FoSCoS portal (foscos.fssai.gov.in).
        </p>
      </div>
    </footer>
  );
}
