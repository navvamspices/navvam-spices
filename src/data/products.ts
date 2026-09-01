import chickenMasala from "@/assets/p-chicken-masala.jpg";
import garamMasala from "@/assets/p-garam-masala.jpg";
import meatMasala from "@/assets/p-meat-masala.jpg";
import fishMasala from "@/assets/p-fish-masala.jpg";
import sambarMasala from "@/assets/p-sambar-masala.jpg";
import biryaniMasala from "@/assets/p-biryani-masala.jpg";
import chaatMasala from "@/assets/p-chaat-masala.jpg";
import kingKitchen from "@/assets/p-king-kitchen-chicken-masala.jpg";
import rasamPowder from "@/assets/p-rasam-powder.jpg";
import turmericPowder from "@/assets/p-turmeric-powder.jpg";
import chilliPowder from "@/assets/p-chilli-powder.jpg";
import corianderPowder from "@/assets/p-coriander-powder.jpg";
import blackPepperPowder from "@/assets/p-black-pepper-powder.jpg";

export type CategoryId = "masala-blends" | "single-spice-powders";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "masala-blends",
    label: "Masala Blends",
    description:
      "Cooking blends built around the dishes Indian kitchens make most often — biryani, sambar, rasam, chicken, meat, fish and chaat.",
  },
  {
    id: "single-spice-powders",
    label: "Single-Spice Powders",
    description:
      "Everyday ground spice essentials for colour, aroma and seasoning across daily cooking.",
  },
];

export interface Product {
  slug: string;
  name: string;
  category: CategoryId;
  short: string;
  description: string;
  bestFor: string[];
  howToUse: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "chicken-masala",
    name: "Chicken Masala",
    category: "masala-blends",
    short: "For home-style chicken curries and gravies.",
    description:
      "A savoury masala blend created to complement home-style chicken curries and gravies.",
    bestFor: ["Chicken curry", "Roast", "Gravy"],
    howToUse:
      "Many cooks add a masala like this once the onions and tomatoes have softened, then let the gravy simmer so the aroma settles into the dish. Adjust quantity to taste.",
    image: chickenMasala,
    imageAlt: "Home-style chicken curry in a dark bowl beside a small bowl of red masala powder",
    featured: true,
  },
  {
    slug: "garam-masala",
    name: "Garam Masala",
    category: "masala-blends",
    short: "A warm, aromatic finishing masala.",
    description:
      "A versatile finishing masala that adds warm, aromatic character to everyday Indian dishes.",
    bestFor: ["Curries", "Dal", "Rice dishes"],
    howToUse:
      "Often sprinkled in towards the end of cooking so the aroma stays bright. A small quantity is usually enough.",
    image: garamMasala,
    imageAlt: "Bowl of dark garam masala powder surrounded by cinnamon, star anise and cardamom",
    featured: true,
  },
  {
    slug: "meat-masala",
    name: "Meat Masala",
    category: "masala-blends",
    short: "For rich meat curries and slow-cooked gravies.",
    description: "A robust masala blend suited to rich meat curries and slow-cooked gravies.",
    bestFor: ["Mutton curry", "Keema", "Gravy"],
    howToUse:
      "Suits longer, slower cooking. Add with the base masala and allow the gravy time to thicken.",
    image: meatMasala,
    imageAlt: "Slow-cooked mutton curry with deep red gravy in a copper handi",
  },
  {
    slug: "fish-masala",
    name: "Fish Masala",
    category: "masala-blends",
    short: "For fish fries, marinades and coastal curries.",
    description:
      "A flavourful blend for fish fries, marinades, curries, and coastal-style preparations.",
    bestFor: ["Fish fry", "Curry", "Marinade"],
    howToUse:
      "Frequently used in a marinade with a little salt and lemon before shallow frying, or stirred into a tangy curry base.",
    image: fishMasala,
    imageAlt: "Spice-coated fish fry served on a banana leaf with lemon wedges",
  },
  {
    slug: "sambar-masala",
    name: "Sambar Masala",
    category: "masala-blends",
    short: "For comforting South Indian sambar.",
    description: "A balanced spice blend for comforting South Indian sambar.",
    bestFor: ["Sambar", "Lentil dishes"],
    howToUse:
      "Usually stirred into cooked dal and vegetables with tamarind, then simmered before the final tempering.",
    image: sambarMasala,
    imageAlt: "South Indian sambar in a brass bowl with curry leaves",
  },
  {
    slug: "biryani-masala",
    name: "Biryani Masala",
    category: "masala-blends",
    short: "For layered biryani, pulao and festive rice.",
    description: "An aromatic blend for layered biryani, pulao, and festive rice dishes.",
    bestFor: ["Biryani", "Pulao", "Rice"],
    howToUse:
      "Commonly added to the marinade or the gravy layer before the rice is layered and finished on a low flame.",
    image: biryaniMasala,
    imageAlt: "Layered biryani with saffron rice, fried onions and mint in a copper pot",
  },
  {
    slug: "chaat-masala",
    name: "Chaat Masala",
    category: "masala-blends",
    short: "A lively seasoning for snacks and fruit.",
    description: "A lively seasoning for snacks, fruit, salads, and street-food favourites.",
    bestFor: ["Chaat", "Fruit", "Snacks"],
    howToUse:
      "Sprinkle over chaat, fruit, salads or fried snacks just before serving for a tangy finish.",
    image: chaatMasala,
    imageAlt: "Bowl of chaat masala seasoning beside sliced fresh fruit",
  },
  {
    slug: "king-kitchen-chicken-masala",
    name: "King Kitchen Chicken Masala",
    category: "masala-blends",
    short: "A signature, restaurant-inspired chicken masala.",
    description:
      "A signature chicken masala option for fuller, restaurant-inspired flavour profiles.",
    bestFor: ["Curry", "Roast", "Restaurant-style dishes"],
    howToUse:
      "Suited to fuller-bodied gravies. Add to the masala base and finish with cream, curd or onion paste as your recipe suggests.",
    image: kingKitchen,
    imageAlt: "Restaurant-style chicken curry in a cast iron pan garnished with coriander",
  },
  {
    slug: "rasam-powder",
    name: "Rasam Powder",
    category: "masala-blends",
    short: "For warm, tangy South Indian rasam.",
    description: "A fragrant spice blend for warm, tangy South Indian rasam.",
    bestFor: ["Rasam", "Soup-style dishes"],
    howToUse:
      "Typically added to tamarind and tomato broth, then warmed gently — many cooks avoid a hard boil to keep the aroma.",
    image: rasamPowder,
    imageAlt: "South Indian rasam in a small brass bowl with curry leaves and peppercorns",
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "single-spice-powders",
    short: "An everyday kitchen essential.",
    description:
      "A kitchen essential that brings an earthy character and golden colour to everyday cooking.",
    bestFor: ["Curries", "Dal", "Marinades"],
    howToUse:
      "Added early in cooking, usually in small quantities, for colour and an earthy base note.",
    image: turmericPowder,
    imageAlt: "Golden turmeric powder in a wooden bowl with fresh turmeric roots",
    featured: true,
  },
  {
    slug: "chilli-powder",
    name: "Chilli Powder",
    category: "single-spice-powders",
    short: "Colour and heat, adjusted to taste.",
    description: "A vibrant ground spice for adding colour and heat according to taste.",
    bestFor: ["Curries", "Marinades", "Chutneys"],
    howToUse: "Add gradually while cooking and taste as you go — heat preference varies by kitchen.",
    image: chilliPowder,
    imageAlt: "Vivid red chilli powder in a wooden bowl with dried red chillies",
    featured: true,
  },
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    category: "single-spice-powders",
    short: "A mellow, aromatic everyday ground spice.",
    description:
      "A mellow, aromatic ground spice used across Indian curries, gravies, and vegetable dishes.",
    bestFor: ["Curries", "Sabzi", "Gravies"],
    howToUse:
      "Often used generously as a body-building spice in gravies, added along with the other powders.",
    image: corianderPowder,
    imageAlt: "Coriander powder in a ceramic bowl with coriander seeds and fresh leaves",
    featured: true,
  },
  {
    slug: "black-pepper-powder",
    name: "Black Pepper Powder",
    category: "single-spice-powders",
    short: "A bold seasoning spice.",
    description: "A bold ground spice for seasoning soups, curries, marinades, and snacks.",
    bestFor: ["Soups", "Seasoning", "Marinades"],
    howToUse: "Add towards the end of cooking or at the table so the sharpness stays forward.",
    image: blackPepperPowder,
    imageAlt: "Ground black pepper in a dark stone bowl with whole peppercorns",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function categoryLabel(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? "";
}

export function relatedProducts(product: Product, count = 3) {
  return PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(
    0,
    count,
  );
}

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
