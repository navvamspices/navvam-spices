import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/navvam-logo.asset.json";
import { Button } from "@/components/ui/button";
import { GENERAL_WHATSAPP_URL, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppButton";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "Our Story" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="bg-forest px-4 py-2 text-center text-xs text-cream/90">
        Manufactured in Telangana • Retail &amp; bulk enquiries welcome
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-cream/95 py-1 backdrop-blur"
            : "border-b border-transparent bg-background/70 py-2 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
          <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} — home`}>
            <img
              src={logo.url}
              alt={`${SITE.name} logo`}
              width={160}
              height={98}
              className={cn(
                "w-[124px] mix-blend-multiply transition-all duration-300 sm:w-[150px]",
                scrolled && "w-[106px] sm:w-[124px]",
              )}
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-forest after:w-full" }}
                inactiveProps={{ className: "text-ink/70" }}
                className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-forest hover:after:w-[calc(100%-1.5rem)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
              <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Enquire on WhatsApp
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-primary/20 text-forest lg:hidden"
            >
              {open ? <Menu aria-hidden="true" className="hidden" /> : null}
              {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-cream lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-4 py-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-forest" }}
                    className="block border-b border-border/60 py-3.5 text-base font-medium text-ink/80 last:border-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-3">
                <Button asChild variant="gold" className="w-full">
                  <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    Enquire on WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
