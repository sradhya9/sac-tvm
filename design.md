# Design System Specification

## Playful Neo-Brutalist + Editorial Web Style

> **Purpose**
>
> Redesign the existing website using the visual language shown in the
> reference image. **Do not copy the layout.** Instead, replicate the
> design philosophy, color palette, typography, spacing, components, and
> interaction patterns while preserving the existing content and
> functionality.

------------------------------------------------------------------------

# 1. Overall Design Philosophy

The website should feel:

-   Bold
-   Playful
-   Modern
-   Youthful
-   Editorial
-   Premium
-   Slightly futuristic
-   Highly visual
-   Clean despite vibrant colors

Think of it as a mix of:

-   Neo Brutalism
-   Modern Editorial
-   Gen-Z Startup
-   Creative Agency
-   Dribbble Featured UI

Avoid:

-   Generic SaaS layouts
-   Bootstrap styling
-   Flat monochrome cards
-   Heavy glassmorphism
-   Dense text blocks

------------------------------------------------------------------------

# 2. Color System

## Primary

``` css
--primary: #4E3DFF;
```

Rich Electric Blue-Violet.

Used for:

-   Buttons
-   Navigation
-   Large cards
-   Pills
-   Icons
-   Hover states

------------------------------------------------------------------------

## Accent

``` css
--accent: #D8FF45;
```

Bright Lime.

Used sparingly.

-   Highlights
-   CTA backgrounds
-   Tags
-   Decorative shapes

------------------------------------------------------------------------

## Dark

``` css
--dark: #1B1B1B;
```

------------------------------------------------------------------------

## White

``` css
--white: #FFFFFF;
```

------------------------------------------------------------------------

## Surface

``` css
--surface: #F8F8F8;
```

------------------------------------------------------------------------

## Border

``` css
--border: rgba(0,0,0,.12);
```

------------------------------------------------------------------------

# 3. Typography

## Display

Large geometric sans.

Suggested:

-   Space Grotesk
-   Sora
-   General Sans
-   Clash Display

Weights

700--900

Uppercase preferred.

Huge headings.

------------------------------------------------------------------------

## Body

Inter

or

Manrope

16--18px

Line height

1.7

------------------------------------------------------------------------

# 4. Grid

Desktop

12-column

Container

1400px

Padding

80px

Mobile

24px

------------------------------------------------------------------------

# 5. Border Radius

``` css
--radius-xs:12px;
--radius-sm:18px;
--radius-md:24px;
--radius-lg:36px;
--radius-xl:48px;
```

Everything should feel soft.

------------------------------------------------------------------------

# 6. Cards

Characteristics

-   Rounded
-   Thick visual weight
-   Large padding
-   High contrast
-   Floating appearance

Example

White card

Blue outline

Rounded corners

Bold heading

Small supporting copy

CTA pill

------------------------------------------------------------------------

# 7. Buttons

Primary

Blue background

White text

Full rounded

Hover:

Scale 1.03

Shadow increase

Accent

Lime background

Dark text

Secondary

White

Blue outline

------------------------------------------------------------------------

# 8. Decorative Language

Use:

-   Sticker labels
-   Floating pills
-   Starburst shapes
-   Organic blobs
-   Rounded rectangles
-   Small arrows
-   Circular badges

Never overuse.

Each section should contain one or two decorative elements.

------------------------------------------------------------------------

# 9. Section Rhythm

Alternate backgrounds.

Example

Hero → Lime

Features → White

Courses → Dark

CTA → Lime

Footer → Blue

Creates visual rhythm.

------------------------------------------------------------------------

# 10. Navigation

Rounded floating navigation.

Height

72px

White background

Soft shadow

Rounded pills for links.

Active page:

Blue background

White text

------------------------------------------------------------------------

# 11. Hero Section

Large typography.

Split layout.

One side

Headline

Description

Buttons

Other side

Illustration

Device mockup

Floating badges

Layered composition.

------------------------------------------------------------------------

# 12. Imagery

Use

-   Isometric
-   Vector
-   Cartoon
-   Minimal 3D
-   Device mockups
-   Soft gradients

Avoid stock photos unless essential.

------------------------------------------------------------------------

# 13. Icons

Rounded

Filled

Friendly

Lucide or Phosphor preferred.

------------------------------------------------------------------------

# 14. Motion

Duration

250--350ms

Use

-   Fade
-   Slide
-   Scale
-   Rotate (small)
-   Floating

Avoid excessive animations.

------------------------------------------------------------------------

# 15. Hover Effects

Cards

Lift 8px

Buttons

Scale

Images

Subtle zoom

Badges

Rotate 3°

------------------------------------------------------------------------

# 16. CSS Variables

``` css
:root{

--primary:#4E3DFF;
--accent:#D8FF45;
--dark:#1B1B1B;
--white:#fff;
--surface:#F8F8F8;

--radius:24px;

--shadow:
0 12px 30px rgba(0,0,0,.08);

}
```

------------------------------------------------------------------------

# 17. Components

-   Floating Navbar
-   Hero
-   Feature Grid
-   Statistic Cards
-   Bento Grid
-   Testimonial Cards
-   Pricing
-   CTA Banner
-   Footer

Every component should use the same spacing and radius system.

------------------------------------------------------------------------

# 18. Accessibility

Minimum contrast

4.5:1

Visible focus states.

Keyboard accessible.

Responsive.

------------------------------------------------------------------------

# 19. Responsiveness

Desktop

≥1200px

Tablet

768--1199px

Mobile

≤767px

Cards stack naturally.

Typography scales smoothly using clamp().

------------------------------------------------------------------------

# 20. Implementation Rules

-   Preserve existing functionality.
-   Redesign only presentation.
-   Rebuild sections using reusable components.
-   Prefer CSS Grid and Flexbox.
-   Use CSS variables for every color and spacing token.
-   Avoid inline styles.
-   Maintain consistent spacing based on an 8px scale.

------------------------------------------------------------------------

# Final Goal

The redesigned website should immediately communicate creativity,
confidence, and modernity. Every page should feel handcrafted with
oversized typography, vivid color contrast, rounded geometry, editorial
spacing, and playful decorative elements while remaining highly usable
and performant.
