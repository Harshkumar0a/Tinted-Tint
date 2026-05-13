---
name: Luminous Ethereal
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#645a70'
  on-secondary: '#ffffff'
  secondary-container: '#e8daf4'
  on-secondary-container: '#695e74'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271816'
  on-tertiary-container: '#967e7c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ebddf7'
  secondary-fixed-dim: '#cfc1db'
  on-secondary-fixed: '#20182a'
  on-secondary-fixed-variant: '#4c4357'
  tertiary-fixed: '#f9dcd9'
  tertiary-fixed-dim: '#dcc0bd'
  on-tertiary-fixed: '#271816'
  on-tertiary-fixed-variant: '#564240'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-page: 4rem
  margin-mobile: 1.5rem
  gutter: 1.5rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The brand personality is rooted in "Luminous Minimalism"—a blend of high-end editorial sophistication and approachable, "clean-girl" aesthetics. It targets a discerning audience that values transparency, effortless beauty, and ritualistic self-care. The UI should feel like a deep breath: calm, expensive, and intentionally spacious.

The design style combines **Minimalism** with subtle **Glassmorphism**. It utilizes heavy whitespace to allow product imagery to breathe, while employing translucent layers and soft background blurs to suggest the texture of dewy skin and lightweight serums. The goal is an interface that feels as premium and "tinted" as the products themselves.

## Colors

The palette is anchored by an **Off-White (Neutral)** foundation that prevents the clinical feel of pure white, providing a warm, parchment-like canvas. 

- **Primary (Ink Black):** Reserved for high-contrast CTAs and critical typography to ensure legibility and a premium "editorial" feel.
- **Secondary (Soft Lavender):** Derived from the product packaging, used for subtle backgrounds and secondary highlights.
- **Tertiary (Muted Rose/Peach):** Used for interaction states and delicate accents, reflecting the "tint" aspect of the brand.
- **Surface Tones:** Use extremely desaturated versions of the secondary and tertiary colors for "glass" containers to maintain a cohesive, airy atmosphere.

## Typography

This design system uses **Plus Jakarta Sans** across all levels to maintain a modern, soft-geometric consistency that feels welcoming yet precise. 

- **Headlines:** Use a light weight (300) with slight negative letter-spacing for large displays to create a high-fashion, "tight" look.
- **Body:** Standard weights with generous line-height (1.6) to ensure the text feels airy and readable against the off-white backgrounds.
- **Labels:** Small caps with significant tracking (letter-spacing) are used for navigation and utility labels to evoke luxury fragrance and cosmetic labeling conventions.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for desktop content to maintain a curated, boutique feeling, while expanding to a **Fluid Grid** on smaller viewports. 

- **Desktop (1440px+):** 12-column grid with 64px (4rem) margins. Large "Section Gaps" of 128px (8rem) are used to separate brand stories from product listings.
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column grid with 24px (1.5rem) margins.

Spacing should favor "over-spacing" rather than crowding. When in doubt, increase the padding to emphasize the premium, unhurried nature of the brand.

## Elevation & Depth

Visual hierarchy is achieved through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

1.  **Level 0 (Background):** The base Off-White neutral.
2.  **Level 1 (Surface):** Semi-transparent white layers (80% opacity) with a 16px backdrop-blur. Used for headers and floating navigation.
3.  **Level 2 (Interaction):** Very soft, diffused ambient shadows (Hex #1A1A1A at 4% opacity, 20px blur) used only for active cards or dropdowns to suggest they are gently lifting off the surface.
4.  **Outlines:** Subtle 1px borders using a slightly darker neutral (#EAE8E4) provide structure without breaking the minimal aesthetic.

## Shapes

The shape language is **Rounded**, reflecting the soft edges of the product packaging and the organic nature of skincare. 

- **Base Radius (0.5rem):** Standard for buttons and input fields.
- **Large Radius (1rem):** Used for product cards and informational containers.
- **Extra Large Radius (1.5rem):** Used for "Hero" images or specific promotional banners.
- **Pill-shapes:** Reserved specifically for "Tags" or "Chips" to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons are solid Ink Black with white text for maximum contrast. Secondary buttons use a ghost style with a 1px border. All buttons should have a subtle hover transition where the background color shifts by 5% in luminosity.
- **Inputs:** Minimalist bottom-border only or very light subtle-filled containers with rounded corners. Focus states should use a soft Lavender glow.
- **Cards:** Product cards should have no visible border, using whitespace and typography alignment to define boundaries. On hover, a subtle scale (1.02x) and the appearance of Level 2 elevation can be applied.
- **Glass Headers:** Fixed navigation bars must use the backdrop-blur effect to allow imagery to scroll underneath, maintaining the "luminous" theme.
- **Chips/Status:** Use the Muted Rose and Soft Lavender palettes with low-saturation backgrounds and slightly darker text for "New Arrival" or "Best Seller" tags.
- **Transitions:** All state changes should use a `cubic-bezier(0.25, 0.1, 0.25, 1.0)` timing function for a "weightless" feel.