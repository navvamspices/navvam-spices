import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { GENERAL_WHATSAPP_URL, MAPS_DIRECTIONS_URL, SITE } from "@/lib/site";
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

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-cream/15 pt-6 text-xs">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Catalogue website — pack sizes and product
          details available on enquiry.
        </p>
        <p className="text-cream/60">
          Detailed ingredient, allergen, nutrition, certification, and licence information will be
          published after final verification.
        </p>
      </div>
    </footer>
  );
}
