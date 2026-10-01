import fssaiLogoImg from "@/assets/fssai-logo.png";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

interface FssaiLogoProps {
  className?: string;
  alt?: string;
}

/**
 * Official FSSAI Logo
 */
export function FssaiLogo({ className, alt = "FSSAI - Food Safety and Standards Authority of India" }: FssaiLogoProps) {
  return (
    <img
      src={fssaiLogoImg}
      alt={alt}
      width={480}
      height={240}
      loading="lazy"
      className={cn("h-auto object-contain", className)}
    />
  );
}

/**
 * FSSAI Indian Vegetarian Symbol (Green square with green circular dot)
 * Mandated under Food Safety and Standards (Labelling and Display) Regulations, 2020.
 */
export function VegIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm border border-emerald-600 bg-white p-0.5",
        className ?? "size-4",
      )}
      title="100% Vegetarian (FSSAI Regulated)"
      aria-label="100% Vegetarian"
    >
      <span className="size-2 rounded-full bg-emerald-600" />
    </span>
  );
}

/**
 * FSSAI Veg Badge with label
 */
export function VegBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50/80 px-2.5 py-1 text-xs font-medium text-emerald-800",
        className,
      )}
    >
      <VegIcon className="size-3.5" />
      <span>100% Vegetarian</span>
    </div>
  );
}

/**
 * Compact FSSAI License Badge for product pages and banners
 */
export function FssaiLicenseBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2.5 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-ink/80 shadow-xs",
        className,
      )}
    >
      <div className="flex h-7 items-center rounded-md bg-white px-1.5 py-0.5 shadow-2xs">
        <FssaiLogo className="h-5 w-auto" />
      </div>
      <div>
        <span className="font-semibold text-forest">FSSAI: </span>
        <span className="font-medium text-ink/90">{SITE.fssai.licenseStatus}</span>
      </div>
      <a
        href={SITE.fssai.foscosPortalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-gold-deep underline-offset-4 hover:underline"
        title="Verify license on FoSCoS portal"
      >
        <span>Verify FoSCoS</span>
        <ExternalLink aria-hidden="true" className="size-3" />
      </a>
    </div>
  );
}

/**
 * Comprehensive Food Safety & Regulatory Compliance Card
 * Strictly follows FSSAI guidelines for FBO websites and license applicants.
 */
export function FssaiComplianceCard({ className }: { className?: string }) {
  const commitments = [
    {
      title: "Food Safety and Standards Act, 2006",
      desc: "All raw ingredients, milling methods, and finished goods strictly comply with the Food Safety and Standards Act, 2006 and applicable statutory standards.",
    },
    {
      title: "Good Manufacturing Practices (GMP & GHP)",
      desc: "Products are processed, cold-ground, and packed in clean, hygienic facilities adhering to GMP & GHP guidelines (Schedule 4 compliance).",
    },
    {
      title: "Guaranteed Fresh Shelf Life",
      desc: "Products dispatched to customers have at least 30% or 45+ days of remaining shelf life at the time of delivery.",
    },
    {
      title: "Transparent FoSCoS Public Verification",
      desc: "Consumers, retailers, and distributors can verify our license and food safety credentials directly on the official FoSCoS portal (foscos.fssai.gov.in).",
    },
  ];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-sand bg-cream p-6 shadow-soft sm:p-10",
        className,
      )}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 bg-forest/5 px-3 py-1 text-xs font-semibold text-forest">
              <ShieldCheck className="size-4 text-forest" />
              Official Compliance
            </span>
            <VegBadge />
          </div>

          <h3 className="mt-4 font-display text-2xl text-forest sm:text-3xl">
            Food Safety &amp; Regulatory Compliance
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            We are committed to delivering safe, high-quality food products that adhere strictly to
            the standards set by the Food Safety and Standards Authority of India (FSSAI).
          </p>
        </div>

        {/* FSSAI Logo Plate */}
        <div className="shrink-0 rounded-2xl border border-border bg-white p-4 shadow-sm text-center">
          <FssaiLogo className="mx-auto h-12 w-auto sm:h-14" />
          <p className="mt-2 text-[11px] font-semibold tracking-wide text-ink/60">
            FOOD SAFETY AND STANDARDS<br />AUTHORITY OF INDIA
          </p>
        </div>
      </div>

      {/* License Registration Details Box */}
      <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-white/90 p-5 text-sm sm:grid-cols-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            FSSAI License Status
          </span>
          <p className="mt-1 font-semibold text-forest">
            {SITE.fssai.licenseStatus}
          </p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Under verification on FoSCoS portal
          </p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Business Name
          </span>
          <p className="mt-1 font-semibold text-ink">
            {SITE.fssai.businessName}
          </p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Registered Address
          </span>
          <p className="mt-1 text-xs leading-relaxed text-ink/85">
            {SITE.fssai.address}
          </p>
        </div>
      </div>

      {/* Our Commitments List */}
      <div className="mt-8">
        <h4 className="font-display text-lg text-forest">Our Commitments</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {commitments.map((c, idx) => (
            <div
              key={c.title}
              className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-4"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                {idx + 1}
              </div>
              <div>
                <p className="font-semibold text-forest">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Verification Footer */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
          <span>FSSAI E-Commerce &amp; Packaging (Labelling and Display) Regulated</span>
        </div>

        <a
          href={SITE.fssai.foscosPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-2.5 text-xs font-semibold text-cream shadow-sm transition hover:bg-forest/90"
        >
          <span>Verify License on FoSCoS Portal</span>
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
