export const SITE = {
  name: "NAVVAM Spices & Masalas",
  shortName: "NAVVAM",
  tagline: "Authentic flavour, thoughtfully blended.",
  supportingLine:
    "Everyday spice powders and carefully prepared masala blends for kitchens that value rich aroma and dependable taste.",
  /** Configurable origin used for canonical + JSON-LD URLs. */
  origin: "",
  defaultTitle: "NAVVAM Spices & Masalas | Spice Manufacturer in Medak, Telangana",
  defaultDescription:
    "Explore NAVVAM's range of spice powders and masala blends manufactured in Medak, Telangana. Contact us for retail, bulk and distributor enquiries.",
  phonePrimary: "+91 91336 44949",
  phonePrimaryHref: "tel:+919133644949",
  phoneSecondary: "+91 89785 60179",
  phoneSecondaryHref: "tel:+918978560179",
  whatsappNumber: "918978560179",
  address: {
    line1: "#156/AA2/2/1/1, Imampur Village",
    line2: "Toopran Road, Medak City",
    region: "Telangana",
    postalCode: "502334",
    country: "India",
    full: "#156/AA2/2/1/1, Imampur Village, Toopran Road, Medak City, Telangana 502334, India",
  },
} as const;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address.full,
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_MESSAGE =
  "Hello NAVVAM, I would like to know more about your spices and masalas.";

export const GENERAL_WHATSAPP_URL = whatsappUrl(GENERAL_WHATSAPP_MESSAGE);

export function productWhatsappUrl(productName: string) {
  return whatsappUrl(
    `Hello NAVVAM, I'm interested in ${productName}. Please share available pack sizes, pricing, and ordering details.`,
  );
}

export function enquiryWhatsappUrl(input: {
  name: string;
  city: string;
  phone: string;
  enquiryType: string;
  product: string;
  message: string;
}) {
  return whatsappUrl(
    `Hello NAVVAM, I would like to discuss a ${input.enquiryType} enquiry. Name: ${input.name}, Phone: ${input.phone}, City: ${input.city}, Product: ${input.product}, Message: ${input.message}`,
  );
}

export function canonical(path: string) {
  return SITE.origin ? `${SITE.origin}${path}` : path;
}

/**
 * Social preview images require an absolute URL. Set SITE.origin once a public
 * domain is configured; until then we omit og:image rather than emit a false URL.
 */
export function socialImageMeta(path: string) {
  if (!SITE.origin) return [];
  const url = `${SITE.origin}${path}`;
  return [
    { property: "og:image", content: url },
    { name: "twitter:image", content: url },
  ];
}
