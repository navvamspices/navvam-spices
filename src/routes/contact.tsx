import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FssaiLogo, VegBadge } from "@/components/site/FssaiLogo";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PRODUCTS } from "@/data/products";
import {
  canonical,
  enquiryWhatsappUrl,
  GENERAL_WHATSAPP_URL,
  MAPS_DIRECTIONS_URL,
  SITE,
} from "@/lib/site";

const TITLE = "Contact NAVVAM | Spice & Masala Enquiries, Medak Telangana";
const DESCRIPTION =
  "Call or WhatsApp NAVVAM Spices & Masalas in Medak, Telangana for retail purchases, bulk orders and distributor enquiries.";

const ENQUIRY_TYPES = [
  "Retail purchase",
  "Bulk order",
  "Retailer/distributor",
  "General enquiry",
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/contact") },
    ],
    links: [{ rel: "canonical", href: canonical("/contact") }],
  }),
  component: ContactPage,
});

interface FormState {
  name: string;
  phone: string;
  city: string;
  enquiryType: string;
  product: string;
  message: string;
  consent: boolean;
}

const EMPTY: FormState = {
  name: "",
  phone: "",
  city: "",
  enquiryType: ENQUIRY_TYPES[0],
  product: "",
  message: "",
  consent: false,
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next["name"] = "Please enter your name.";
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim()))
      next["phone"] = "Please enter a valid phone number.";
    if (form.city.trim().length < 2) next["city"] = "Please enter your city.";
    if (form.message.trim().length < 5) next["message"] = "Please add a short message.";
    if (!form.consent) next["consent"] = "Please confirm we may contact you about this enquiry.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }
    const url = enquiryWhatsappUrl({
      name: form.name.trim(),
      city: form.city.trim(),
      phone: form.phone.trim(),
      enquiryType: form.enquiryType,
      product: form.product || "Not specified",
      message: form.message.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  };

  return (
    <>
      <section className="bg-gradient-warm px-4 pb-14 pt-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <p className="eyebrow mt-6">Contact &amp; enquiries</p>
          <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-forest sm:text-5xl">
            Talk to NAVVAM
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Call us, or send your requirement on WhatsApp and we will reply with available pack
            formats and ordering details.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl text-forest">Call us</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={SITE.phonePrimaryHref}
                    className="inline-flex items-center gap-2 text-base font-semibold text-forest underline-offset-4 hover:underline"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {SITE.phonePrimary}
                  </a>
                  <span className="ml-2 text-xs text-muted-foreground">(also WhatsApp)</span>
                </li>
                <li>
                  <a
                    href={SITE.phoneSecondaryHref}
                    className="inline-flex items-center gap-2 text-base font-semibold text-forest underline-offset-4 hover:underline"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {SITE.phoneSecondary}
                  </a>
                </li>
              </ul>
              <Button asChild className="mt-5 w-full sm:w-auto">
                <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Message us on WhatsApp
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl text-forest">Visit or write to us</h2>
              <div className="mt-3 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                <address className="not-italic">{SITE.address.full}</address>
              </div>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-forest underline underline-offset-4"
              >
                Get directions
              </a>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock aria-hidden="true" className="size-4 text-gold-deep" />
                Contact us for current business hours
              </p>
            </div>

            <div className="rounded-2xl border border-sand bg-cream p-6 shadow-soft">
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-3">
                <div className="rounded-md bg-white p-1.5 shadow-2xs">
                  <FssaiLogo className="h-6 w-auto" />
                </div>
                <VegBadge />
              </div>
              <h2 className="mt-3 font-display text-lg text-forest">Food Safety &amp; Regulatory Redressal</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                For statutory, food safety, or quality verification queries as mandated by FSSAI guidelines:
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-ink/80">
                <p>
                  <strong>FSSAI Status:</strong> <span className="font-medium text-forest">{SITE.fssai.licenseStatus}</span>
                </p>
                <p>
                  <strong>Registered Entity:</strong> {SITE.fssai.businessName}
                </p>
                <p>
                  <strong>Regulatory Email:</strong>{" "}
                  <a href={`mailto:${SITE.email}`} className="text-forest underline underline-offset-4">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <strong>Regulatory Phone:</strong>{" "}
                  <a href={SITE.phonePrimaryHref} className="text-forest underline underline-offset-4">
                    {SITE.phonePrimary}
                  </a>
                </p>
              </div>
              <div className="mt-4 border-t border-sand pt-3">
                <a
                  href={SITE.fssai.foscosPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep hover:underline"
                >
                  <span>Verify license on FoSCoS portal</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h2 className="text-xl text-forest">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submitting opens WhatsApp with your details pre-filled so you can send them to us in
                one tap.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors["name"]}>
                  <Input
                    id="name"
                    value={form.name}
                    autoComplete="name"
                    aria-invalid={Boolean(errors["name"])}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </Field>
                <Field id="phone" label="Phone" error={errors["phone"]}>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    aria-invalid={Boolean(errors["phone"])}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </Field>
                <Field id="city" label="City" error={errors["city"]}>
                  <Input
                    id="city"
                    value={form.city}
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors["city"])}
                    onChange={(e) => update("city", e.target.value)}
                  />
                </Field>
                <Field id="enquiryType" label="Enquiry type">
                  <select
                    id="enquiryType"
                    value={form.enquiryType}
                    onChange={(e) => update("enquiryType", e.target.value)}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                  >
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="product" label="Interested product" className="sm:col-span-2">
                  <select
                    id="product"
                    value={form.product}
                    onChange={(e) => update("product", e.target.value)}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                  >
                    <option value="">No specific product</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="Message" error={errors["message"]} className="sm:col-span-2">
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    aria-invalid={Boolean(errors["message"])}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </Field>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={form.consent}
                  aria-invalid={Boolean(errors["consent"])}
                  onCheckedChange={(v) => update("consent", v === true)}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-ink/80">
                  I agree that NAVVAM may use these details to respond to my enquiry.
                </Label>
              </div>
              {errors["consent"] ? (
                <p className="mt-1 text-sm text-destructive">{errors["consent"]}</p>
              ) : null}

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                <WhatsAppIcon />
                Send via WhatsApp
              </Button>

              <p aria-live="polite" className="mt-4 text-sm">
                {status === "sent" ? (
                  <span className="text-forest">
                    WhatsApp should now be open with your enquiry ready to send. If it didn't open,
                    call {SITE.phonePrimary}.
                  </span>
                ) : Object.keys(errors).length > 0 ? (
                  <span className="text-destructive">
                    Please correct the highlighted fields and try again.
                  </span>
                ) : null}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="text-sm text-ink/80">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
