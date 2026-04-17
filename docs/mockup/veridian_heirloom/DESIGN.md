# Design System: The Botanical Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Modern Heirloom"
This design system is a bridge between timeless romance and high-end editorial digital experiences. Inspired by bespoke stationery, it moves away from the rigid "app-like" structures of the web toward a layout that feels curated, organic, and intentional. 

The system rejects the standard "header-body-footer" template in favor of **Intentional Asymmetry**. Like a floral arrangement, elements should feel balanced but not perfectly mirrored. By utilizing overlapping layers, varying typographic scales, and watercolor-inspired textures, we transform a functional interface into a digital keepsake. The experience is defined by "breathing room" (generous whitespace), sophisticated depth through tonal shifts, and the delicate tension between sharp gold accents and soft, organic foliage.

---

## 2. Colors

The palette is rooted in a deep, botanical foundation of forest greens and sage, illuminated by the warmth of shimmering gold and creamy surfaces.

### Tonal Application
*   **Primary (`#061b0e`):** Our Deep Forest. Reserved for the most important interactive elements and heavy editorial headlines. It provides the grounding contrast needed for a high-end look.
*   **Secondary (`#51634f`):** Our Sage Green. Used for supportive elements, iconography, and secondary interactions.
*   **Tertiary (`#211500` / `#e9c176`):** The Shimmering Gold. These tones are used for high-impact accents. Gold should be applied sparingly to maintain its premium feel—think of it as the "foil press" on a luxury card.
*   **Surface Hierarchy:** We utilize `surface` (`#fbf9f4`) as our base "paper." To create structure, we use `surface-container-low` (`#f5f3ee`) for sectioning and `surface-container-highest` (`#e4e2dd`) for callouts.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To define the end of one section and the beginning of another, use background color shifts (e.g., transitioning from `surface` to `surface-container-low`). This creates a "seamless" feel that mimics high-quality paper stocks.

### Signature Textures
Apply a subtle linear gradient to main CTAs using `primary` to `primary_container`. For hero sections, use a very faint `surface_variant` grain texture to evoke the feel of textured watercolor paper.

---

## 3. Typography

The typography strategy relies on the contrast between the historic weight of Noto Serif and the modern, architectural clarity of Manrope.

*   **Display & Headline (Noto Serif):** Used for large-scale editorial moments.
    *   *Display-lg (3.5rem):* Reserved for names and major announcements.
    *   *Headline-md (1.75rem):* Used for storytelling and section introductions.
*   **Title, Body, & Label (Manrope):** A clean sans-serif that ensures legibility for logistics and long-form text.
    *   *Body-lg (1rem):* The standard for high-readability content.
    *   *Label-sm (0.6875rem):* Used for micro-copy with generous letter spacing (0.05rem) to maintain a premium "gallery" aesthetic.

**Editorial Tip:** Use "Headline-lg" in italics for specific emphasis words to mimic the hand-calligraphy found on the original invitation card.

---

## 4. Elevation & Depth

We eschew traditional "box shadows" in favor of **Tonal Layering** and **Atmospheric Glassmorphism**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` (`#ffffff`) card on a `surface_container_low` (`#f5f3ee`) background. This creates a soft, natural lift without the "dirty" look of standard shadows.

### Glassmorphism & Depth
For floating navigation or overlays, use a semi-transparent version of `surface` with a `backdrop-blur` of 20px. This allows the organic floral elements to bleed through the interface, making the UI feel like it is floating within an environment rather than sitting on top of it.

### Ambient Shadows
If a shadow is functional (e.g., a modal), use a high-blur (40px+) shadow with a very low opacity (5%). The shadow color should be tinted with `primary` (Forest Green) rather than black to ensure the light feels natural and botanical.

### The "Ghost Border" Fallback
If containment is required for accessibility, use a "Ghost Border": 1px solid `outline_variant` at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Shape: `lg` (1rem corner radius).
*   **Tertiary (Editorial):** No background. `primary` text with a 1px `tertiary_fixed` (gold) underline spaced 4px below the text. This mimics the "delicate gold lines" of the brand.

### Cards
Cards must never have borders or harsh shadows. Use `surface_container_lowest` with a `sm` (0.25rem) or `md` (0.75rem) corner radius. Use vertical whitespace (32px, 48px, or 64px) instead of dividers to separate card content.

### Inputs
*   **Fields:** Use a "minimalist underline" style or a very soft `surface_container_high` fill. 
*   **Focus State:** Shift the bottom border to `tertiary_fixed` (gold) to signal interaction without breaking the elegant aesthetic.

### Floral Overlays (Signature Component)
Create a "Decor" component that allows floral watercolor elements (e.g., eucalyptus or roses) to break the container bounds. These elements should have `pointer-events: none` and be positioned absolutely to overlap text and containers, creating a 3D, layered effect.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. If an image is on the left, let the text on the right have a wider margin to create "active whitespace."
*   **Do** use the gold accents (`tertiary_fixed_dim`) for small details like iconography, bullets, or thin decorative lines.
*   **Do** prioritize Noto Serif for all emotional, storytelling copy.

### Don't
*   **Don't** use 1px solid dividers or lines. They feel "cheap" and technical.
*   **Don't** use pure black (`#000000`). Always use the Forest Green `primary` or the Deep Tertiary `tertiary`.
*   **Don't** use standard "Material" shadows. Keep elevations flat or atmospheric.
*   **Don't** overcrowd the screen. If it looks "busy," add more `surface` space.