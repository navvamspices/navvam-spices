# navvam2 vs Current Website — What's Missing / Different

## 1. Design System & Theme

| Feature | navvam2 | Current Website |
|---|---|---|
| Color palette | Terracotta (`#A53C27`), Saffron Gold (`#C68224`), Cream (`#FAF7F0`), Espresso text | Forest green, Gold, Cream |
| Fonts | Rozha One + Marcellus (display) + Outfit (sans) | Cormorant Garamond + Manrope |
| Nav layout | **Center-logo** with links left + actions right (3-column grid) | Logo left, links center, button right |
| Scrollbar | Custom sandstone scrollbar styled | Default browser scrollbar |

---

## 2. Top Banner (Ticker)

- **navvam2**: Terracotta gradient banner — *"Appointing District Distributors Across Every District"* with phone pill badge
- **Current**: Forest green banner — *"Manufactured in Telangana • Retail & bulk enquiries welcome"*

**Missing from current:** Distributor recruitment messaging in the top banner.

---

## 3. Hero Section

| Feature | navvam2 | Current Website |
|---|---|---|
| Layout | 2-column: text left + **arched image frame** right | Full-width hero with image background |
| Image frame | Arch shape (border-radius top pill) with hover zoom | Standard rectangular/full-bleed |
| Floating badge | Animated floating circle seal: *"100% Vegetarian • Zero Fillers"* | No floating badge |
| Hero tag pill | *"100% Sun-Dried • Cold Stone-Milled • Unadulterated"* pill | Eyebrow text label |
| Hero copy | *"Pure Culinary Gold, Sourced from Sacred Soil"* | Different copy |
| CTA buttons | "Explore All 13 Products" + "District Dealership" | "Browse Products" + "Enquire on WhatsApp" |

**Missing from current:** Arched image frame, floating quality seal badge, distributor CTA in hero.

---

## 4. Purity Pillars Strip

- **navvam2**: 4-column strip with gold left-border accent per pillar:
  1. Single-Origin Roots (Salem, Guntur, Malabar sourcing)
  2. Slow Cold-Grinding (low heat milling)
  3. **6 Tailored Pack Sizes** (40g, 50g, 100g, 200g, 500g, 1kg)
  4. Zero Adulteration

- **Current website**: Has a quality/features section but **no pack sizes mentioned**, different copy.

**Missing from current:** Pack size information (40g–1kg range) prominently displayed.

---

## 5. Product Cards — Interactive Quantity Selector

This is the **biggest functional difference**.

- **navvam2**: Each product card has:
  - **6 quantity pills** (40g / 50g / 100g / 200g / 500g / 1kg)
  - **Live proportional price calculation** when you click a pill (with 6% bulk discount at 500g, 10% at 1kg)
  - Price display updates dynamically: *"₹260 / 100g"* → *"₹1,170 / 500g"*
  - "Add to Order" button triggers a toast notification

- **Current website**: Product cards show name, description, bestFor tags, and a WhatsApp enquiry button. **No quantity selector, no pricing, no interactive weight selection.**

**Missing from current:** Quantity pills, live price calculator, "Add to Order" + toast flow.

---

## 6. Product Names & Copy (navvam2 uses richer names)

| navvam2 Name | Current Website Name |
|---|---|
| Salem Turmeric Powder | Turmeric Powder |
| Guntur Teja Red Chilli | Chilli Powder |
| Royal Dhaniya Powder | Coriander Powder |
| Black Pepper Powder | Black Pepper Powder ✓ |
| Royal Biryani Masala | Biryani Masala |
| Chicken Masala | Chicken Masala ✓ |
| Royal Garam Masala | Garam Masala |
| King Kitchen Chicken Masala | King Kitchen Chicken Masala ✓ |
| Royal Meat Masala | Meat Masala |
| Coastal Fish Masala | Fish Masala |
| Traditional Sambar Masala | Sambar Masala |
| Aromatic Rasam Powder | Rasam Powder |
| Tangy Chaat Masala | Chaat Masala |

navvam2 uses origin/descriptor prefixes (Salem, Guntur, Royal, Coastal) — current uses plain names.

---

## 7. "The Tadka Room" — Interactive Easter Egg Section

- **navvam2**: A fun interactive section — click a pan emoji 🍳 to "splutter the tadka". Cycles through 5 witty messages about mustard seeds crackling in ghee.
- **Current website**: **Completely absent.** No equivalent playful/interactive section.

**Missing from current:** Entire Tadka interactive section.

---

## 8. B2B / Distributorship Section

- **navvam2**: Dedicated full-width card section with:
  - *"Become an Exclusive District Distributor"* heading
  - 4 perk pills: Territory Exclusivity, High Gross Margin, Pack Flexibility, Direct Factory Support
  - CTA button opens the **Dealership Modal Form**

- **Current website**: Has a contact page with a WhatsApp enquiry form, but **no dedicated distributor/B2B section on the homepage or products page**.

**Missing from current:** Standalone B2B distributorship section with perk pills.

---

## 9. Distributor Lead Modal Form

- **navvam2**: A modal popup form with fields:
  - Full Name / Business Proprietor
  - Phone Number
  - District & State Applied For
  - Retail Coverage / Network Size
  - Submit → closes modal + shows toast

- **Current website**: Contact page has a WhatsApp enquiry form (name, city, phone, enquiry type, product, message) but **no modal**, no distributor-specific fields.

**Missing from current:** Distributor modal with territory/network fields.

---

## 10. Toast Notification System

- **navvam2**: Bottom-right toast notification for "Add to Order" and form submission feedback.
- **Current website**: Uses `sonner` toast library (already installed) but **not wired to product cards**.

---

## 11. Footer Differences

| Feature | navvam2 | Current Website |
|---|---|---|
| Brand name style | Large display font "NAVVAM" | Logo image |
| Footer columns | Brand + Core Spices + Master Masalas + Contact | More columns with all pages |
| Contact info shown | Phone, website, trade email, HQ | Phone, address, WhatsApp |
| Trade email | `trade@navvamspices.com` listed | Not shown |
| Copyright line | *"Zero Fillers • Cold-Ground • Pure Quality Assured"* tagline | Standard copyright |

---

## 12. Pages Present in Current Website but NOT in navvam2

The current website has full separate pages that navvam2 (being a single HTML file) doesn't have:

- `/about` — Our Story page
- `/quality` — Quality page  
- `/privacy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/products/$slug` — Individual product detail pages (13 pages)
- `/products` — Products listing page with filter

---

## Summary — Priority Items to Add to Website

| Priority | Feature |
|---|---|
| 🔴 High | Interactive quantity pills + live price on product cards |
| 🔴 High | B2B Distributorship section on homepage |
| 🔴 High | Distributor lead modal form |
| 🟡 Medium | Arched hero image frame + floating quality seal |
| 🟡 Medium | Pack sizes (40g–1kg) mentioned in features/quality strip |
| 🟡 Medium | Richer product names (Salem Turmeric, Guntur Teja, etc.) |
| 🟡 Medium | Distributor messaging in top banner |
| 🟢 Low | Tadka interactive easter egg section |
| 🟢 Low | Custom scrollbar styling |
| 🟢 Low | Trade email in footer |
