# Yukthimantra's Academy

## Updated Design Document — Visual System, UX, Architecture & Frontend Direction

**Version:** 1.2
**Status:** Proposed / For Client & Development Approval
**Product:** Yukthimantra's Academy Website
**Current Phase:** Dynamic Frontend Website
**Future Phase:** Mentor–Candidate Platform
**Frontend:** React + Next.js
**Public Website:** `domainname.com`
**Future Platform:** `app.domainname.com`

---

# 1. Design Objective

Yukthimantra's Academy should be positioned visually as a **premium, modern career-learning platform** focused on:

- Technology
- Artificial Intelligence
- Healthcare
- Data
- Career pathways
- Professional learning

The design direction should combine the visual characteristics observed in the supplied references:

- Soft sky-blue hero environments
- Light lavender/periwinkle backgrounds
- Strong editorial typography
- Large display headlines
- Rounded cards
- Floating interface compositions
- Minimal black/white navigation
- Bright lime/green highlight accents
- Clean white content sections
- Subtle gradients
- Premium whitespace
- Smooth motion

The website must **use the references as visual inspiration**, not as a direct copy.

---

# 2. Brand Hierarchy

```text
YukthiMantra
│
└── Yukthimantra's Academy
    │
    └── Technology + Healthcare Career Academy
```

The Academy is a separate sub-brand and must maintain its own visual identity while remaining visually compatible with the parent YukthiMantra brand.

---

# 3. Visual Design Direction

## Core visual character

The UI should feel:

```text
Premium
Modern
Editorial
Educational
Technology-focused
Professional
Airy
Trustworthy
```

Avoid:

- Traditional coaching-centre layouts
- Overly corporate blue dashboards
- Excessive gradients
- Excessive card borders
- Heavy shadows
- Clutter
- Dense text
- Emoji-based UI
- Generic SaaS illustrations everywhere

---

# 4. Extracted Color Palette

The following palette is **visually extracted/approximated from the supplied reference screenshots**. These should be treated as the starting design tokens rather than claimed official brand colors.

## 4.1 Primary Colors

| Token               | Approx. HEX | Usage                                          |
| ------------------- | ----------- | ---------------------------------------------- |
| `academy-sky`       | `#78B8E8`   | Hero backgrounds, large visual surfaces        |
| `academy-blue`      | `#1676B0`   | Primary brand/accent                           |
| `academy-deep-blue` | `#206090`   | Strong headings, navigation, secondary accents |
| `academy-indigo`    | `#8E8FFB`   | Secondary decorative accent                    |
| `academy-lavender`  | `#E8E7FF`   | Soft hero/background surfaces                  |
| `academy-lime`      | `#C0F050`   | High-attention accent / highlighted CTA        |
| `academy-dark`      | `#101010`   | Primary text / dark sections                   |
| `academy-white`     | `#FFFFFF`   | Primary surface                                |
| `academy-soft`      | `#F0F0F0`   | Neutral section background                     |
| `academy-soft-blue` | `#DFECFA`   | Cards / information surfaces                   |

---

# 5. Recommended Semantic Color Tokens

Use semantic tokens instead of hard-coding HEX values in components.

```css
:root {
  --color-primary: #1676b0;
  --color-primary-dark: #206090;

  --color-accent: #c0f050;
  --color-secondary: #8e8ffb;

  --color-hero: #78b8e8;
  --color-lavender: #e8e7ff;

  --color-background: #ffffff;
  --color-background-soft: #f5f7fa;
  --color-background-blue: #dfecfa;

  --color-text-primary: #101010;
  --color-text-secondary: #5c6670;
  --color-text-muted: #7b8490;

  --color-border: rgba(16, 16, 16, 0.1);
  --color-border-light: rgba(16, 16, 16, 0.06);
}
```

---

# 6. Color Usage Ratio

The website should not use every color equally.

Recommended visual distribution:

```text
White / Neutral        55–65%
Blue / Sky Blue        20–25%
Deep Blue              5–10%
Lavender / Indigo      5%
Lime Accent            3–5%
Dark / Black           5–10%
```

The lime accent should remain **special and selective**.

Use it primarily for:

- Important CTA
- Highlighted metrics
- Selected active state
- Success/achievement indicator
- Important visual marker

Do not turn the entire site lime.

---

# 7. Typography System

The supplied font direction should be preserved.

## 7.1 Display / Editorial Font

```css
font-family: "Libre Caslon Condensed", Georgia, serif;
```

Use for:

- Hero headlines
- Major editorial headings
- Large statements
- Selected section titles

The serif should not be used everywhere.

---

# 8. Primary Interface Font

Use the supplied modern system-style display stack:

```css
font-family:
  "SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold",
  ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system",
  "BlinkMacSystemFont", sans-serif;
```

Use primarily for:

- Navigation
- Headings
- Buttons
- Labels
- Programme titles
- UI controls

---

# 9. Body Font

Use:

```css
font-family: "Roboto", Arial, sans-serif;
```

Use for:

- Body copy
- Descriptions
- Programme information
- Forms
- FAQ content
- Metadata

---

# 10. Typography Hierarchy

## Desktop

```text
Display H1
64–88px
line-height: 0.95–1.05

H2
44–60px

H3
28–36px

H4
20–24px

Body Large
18–20px

Body
15–17px

Small
13–14px

Micro
11–12px
```

The exact size should respond to viewport width.

## Mobile

Reduce scale proportionally.

Example:

```text
H1: 44–56px
H2: 32–40px
H3: 24–28px
Body: 15–17px
```

---

# 11. Typography Rules

### Hero

Use:

- Large editorial serif or display heading
- Sans-serif supporting copy
- High contrast

### Programme pages

Use:

- Strong sans-serif title
- Serif accent for selected statements
- Compact metadata

### Navigation

Use:

- Small
- Medium weight
- High readability
- Slight letter spacing

### Avoid

- More than two primary font families
- Decorative font for body copy
- Too many font weights
- Excessive uppercase text

---

# 12. Navbar Design

The navbar is divided into **two groups**.

```text
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│ [LOGO] | YUKTHIMANTRA'S ACADEMY                                    │
│          PROGRAMMES  CAREER PATHWAYS  ELIGIBILITY                  │
│          ADMISSION COUNSELLING                 ABOUT  CAREER SUPPORT│
│                                               FAQ  CONTACT           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Left Group

```text
[LOGO] | YUKTHIMANTRA'S ACADEMY

PROGRAMMES
CAREER PATHWAYS
ELIGIBILITY
ADMISSION COUNSELLING
```

The logo and brand name are one home-navigation element.

Route:

```text
/
```

## Right Group

```text
ABOUT
CAREER SUPPORT
FAQ
CONTACT
```

Routes:

```text
/about
/career-support
/#faq
/contact
```

---

# 13. Navbar Visual Style

Use a floating/pill-inspired container based on the supplied visual references.

Characteristics:

- White / translucent surface
- Rounded corners
- Compact height
- Dark typography
- Subtle shadow
- Large horizontal breathing room
- Sticky behaviour

On scroll:

```text
Initial
↓
Transparent / light
↓
Scrolled
↓
Soft white backdrop + blur + subtle border
```

---

# 14. Hero Visual Language

The supplied references establish a strong visual pattern:

- Large rounded hero container
- Wide cinematic area
- Soft sky blue / blue gradient
- Editorial heading
- Floating cards
- Small floating labels
- Layered composition

The Academy should adapt this as:

```text
Hero Background
      +
Academy Learning Visual
      +
Floating Programme Cards
      +
Career Pathway Indicators
      +
CTA
```

Do not use random dashboard cards merely for decoration.

---

# 15. Home Page Structure

```text
Navbar
↓
Eligibility Banner
↓
Hero
↓
Programme Discovery
↓
About Academy
↓
Career Pathways
↓
Why Choose Academy
↓
Programme Outcomes
↓
Career Opportunities
↓
Testimonials
↓
FAQ (#faq)
↓
Counselling CTA
↓
Footer
```

---

# 16. Home Hero

## Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│             [ EYEBROW / BADGE ]                             │
│                                                              │
│          Build Technology + Healthcare                      │
│             Skills for Your Career                           │
│                                                              │
│      Career-focused programmes designed for                 │
│      graduates and students pursuing graduation.            │
│                                                              │
│      [ Check Eligibility ] [ Explore Programmes ]            │
│                                                              │
│        [ FLOATING VISUAL COMPOSITION ]                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The exact copy may be finalized by the content team.

---

# 17. Hero Floating Elements

Use 3–5 floating elements.

Examples:

```text
[ Data Science ]
[ AI in Healthcare ]
[ Medical Coding ]
[ Career Pathway ]
[ Industry Skills ]
```

Each floating element should be:

- Rounded
- Semi-transparent
- Light background
- Subtle border
- Slight blur
- Minimal shadow

---

# 18. Hero Animation

Use GSAP.

Sequence:

```text
Navbar
 ↓
Badge
 ↓
Hero headline
 ↓
Description
 ↓
CTA
 ↓
Floating cards
 ↓
Background visual
```

Animation characteristics:

- Fade
- Translate
- Scale
- Slight rotation
- Stagger

Do not use extreme movement.

---

# 19. Programme Discovery

The home page should introduce the programme catalogue.

```text
Explore Career Programmes

[ Technology + AI ]
[ Healthcare + Operations ]

[ Programme Card ]
[ Programme Card ]
[ Programme Card ]
[ Programme Card ]
```

CTA:

```text
View All Programmes →
```

---

# 20. Programme Card Style

Inspired by the supplied Tutorly reference.

```text
┌───────────────────────────────┐
│                               │
│      VISUAL / PLACEHOLDER     │
│                               │
├───────────────────────────────┤
│ CATEGORY                      │
│                               │
│ Programme Title               │
│                               │
│ Short description             │
│                               │
│ ◷ Duration   ◉ Level          │
│                               │
│ Career pathway                │
│                               │
│ [ View Programme → ]          │
└───────────────────────────────┘
```

---

# 21. Programme Catalogue Page

Route:

```text
/programmes
```

The page should feel like a modern learning marketplace.

Structure:

```text
Hero
↓
Search
↓
Filter Bar
↓
Programme Grid
↓
Load More / Pagination
↓
Career CTA
↓
Footer
```

---

# 22. Search + Filters

Required:

```text
[ Search Programmes... ]

[ All ]
[ Technology + AI ]
[ Healthcare + Operations ]
[ Career Pathway ]
[ Duration ]
[ Learning Mode ]
```

Search/filter state should update without unnecessary full-page reloads.

---

# 23. Single Programme Page

Route:

```text
/programmes/[slug]
```

Structure:

```text
Navbar
↓
Programme Hero
↓
Programme Overview
↓
Programme Information
↓
Curriculum
↓
Tools & Technologies
↓
Career Outcomes
↓
Industry / Career Path
↓
FAQ
↓
Counselling CTA
↓
Footer
```

---

# 24. Programme Hero

Two-column layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PROGRAMME CATEGORY                PROGRAMME VISUAL        │
│                                                             │
│  Programme Title                                            │
│                                                             │
│  Description                                                │
│                                                             │
│  Duration | Eligibility | Mode                              │
│                                                             │
│  [ Check Eligibility ] [ Book Counselling ]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 25. Programme Information Card

Display:

- Duration
- Eligibility
- Learning mode
- Programme category
- Programme group
- Career pathway

On mobile this becomes a horizontal or stacked information block.

---

# 26. Curriculum

Use an accordion/timeline hybrid.

```text
01  Foundation                     +
02  Core Concepts                  +
03  Practical Learning             +
04  Advanced Concepts              +
05  Projects                       +
```

Opening a module reveals detailed learning areas.

---

# 27. Tools & Technologies

Use badges:

```text
Python
SQL
Excel
Power BI
Tableau
Pandas
Machine Learning
NLP
RAG
LLMs
```

Only show relevant tools for each programme.

---

# 28. Career Outcomes

Use large outcome cards:

```text
[ Data Analyst ]
[ Healthcare Data Analyst ]
[ AI/ML Associate ]
[ Medical Coding Analyst ]
```

Use only verified programme outcomes.

---

# 29. About Section

The supplied Aeline reference strongly influences this section.

Use:

```text
[ ABOUT ACADEMY ]

       A career-focused academy
       at the intersection of
       technology + healthcare.

[ METRIC ] [ METRIC ] [ METRIC ] [ METRIC ]
```

The metric cards should use large numbers and minimal explanatory text.

Only verified statistics should be published.

---

# 30. About Page

Route:

```text
/about
```

Structure:

```text
About Hero
↓
Academy Overview
↓
Mission
↓
Vision
↓
Technology + Healthcare Approach
↓
Learning Philosophy
↓
Career-Focused Education
↓
Student Support
↓
Verified Metrics
↓
CTA
```

---

# 31. Career Pathways

Route:

```text
/career-pathways
```

Use a visual career map.

```text
Technology + AI
       ↓
Data Analytics
       ↓
Data Science
       ↓
AI / ML
       ↓
Generative AI
```

Similar structures should be created for:

- Healthcare Technology
- Medical Coding
- Integrated pathways

---

# 32. Eligibility

Route:

```text
/eligibility
```

Structure:

```text
Hero
↓
Mandatory Eligibility
↓
Who Can Apply
↓
Preferred Backgrounds
↓
Who Should Not Enrol
↓
Required Documents
↓
Eligibility CTA
```

The official eligibility requirement is for candidates who are pursuing or have completed graduation.

---

# 33. Admission Counselling

Route:

```text
/admission-counselling
```

Structure:

```text
Hero
↓
Why Counselling
↓
Counselling Process
↓
Counselling Form
↓
What Happens Next
↓
Required Documents
↓
FAQ
↓
CTA
```

---

# 34. Counselling Flow

```text
Lead Form
   ↓
Eligibility Verification
   ↓
Career Counselling
   ↓
Programme Recommendation
   ↓
Document Verification
   ↓
Enrolment
   ↓
Onboarding
```

This six-step flow is based on the Academy's official requirements.

---

# 35. Career Support

Route:

```text
/career-support
```

Sections:

- Career Guidance
- Portfolio Development
- Interview Preparation
- Employer Readiness
- Career Assistance

Placement-related claims must reflect actual operational support.

---

# 36. FAQ

FAQ remains inside Home.

HTML:

```html
<section id="faq"></section>
```

Navigation:

```text
/#faq
```

No standalone `/faq` page.

---

# 37. Contact

Route:

```text
/contact
```

Structure:

```text
Contact Hero
↓
Advisor Information
↓
Contact Form
↓
WhatsApp CTA
↓
Contact Information
↓
Footer
```

---

# 38. UI Component System

```text
components/
│
├── Navbar
├── Hero
├── EligibilityBanner
├── ProgrammeCard
├── ProgrammeGrid
├── ProgrammeFilters
├── SearchBar
├── PathwayCard
├── PathwayMap
├── StatsCounter
├── CurriculumAccordion
├── TechnologyBadge
├── CareerOutcomeCard
├── CounsellingForm
├── FAQAccordion
├── CTASection
└── Footer
```

---

# 39. Border Radius

Recommended:

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-pill: 999px;
```

Use larger radius for:

- Hero container
- Featured cards
- CTA sections

Use smaller radius for:

- Inputs
- Small controls
- Badges

---

# 40. Shadow System

Keep shadows soft.

```css
--shadow-sm: 0 4px 14px rgba(16, 16, 16, 0.06);

--shadow-md: 0 12px 32px rgba(16, 16, 16, 0.08);

--shadow-lg: 0 24px 60px rgba(16, 16, 16, 0.1);
```

Do not use deep dark shadows.

---

# 41. Surface System

### White surface

Main cards and content.

### Soft blue surface

Programme/education sections.

### Lavender surface

Technology/AI highlight sections.

### Dark surface

Footer, major CTA, selected sections.

### Lime surface

Special highlight only.

---

# 42. Buttons

## Primary

```text
[ Check Your Eligibility → ]
```

Style:

- Dark/blue background
- White text
- Rounded pill
- Medium height
- Slight hover lift

## Accent CTA

Use lime sparingly:

```text
[ Start Your Career Journey → ]
```

## Secondary

```text
[ Explore Programmes ]
```

White / transparent with border.

---

# 43. Button Animation

```text
Default
↓
Hover
    translateY(-2px)
    slight brightness increase
↓
Pressed
    translateY(0)
```

Duration:

```text
180–250ms
```

---

# 44. Card Interaction

Cards can use:

```text
transform: translateY(-4px)
border-color: accent
```

Transition:

```text
200–300ms
```

Do not introduce excessive parallax.

---

# 45. Scroll Animation

Use GSAP ScrollTrigger.

Recommended:

```text
Section
 ↓
Heading reveal
 ↓
Description reveal
 ↓
Content stagger
```

Recommended easing:

```text
power3.out
```

Animation distance:

```text
20–50px
```

Avoid huge movement.

---

# 46. Counter Animation

Use only verified Academy metrics.

```text
0
↓
10
↓
50
↓
100
↓
Target
```

Trigger when the section enters the viewport.

---

# 47. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce) {
  /* Minimize non-essential animation */
}
```

Animations must never prevent reading or navigation.

---

# 48. Responsive Design

## Desktop

- Large hero composition
- Two-column hero
- Multi-column programme grid
- Horizontal pathway
- Full navigation

## Tablet

- Reduced grid
- Reduced hero typography
- Compact spacing
- Adaptive navigation

## Mobile

```text
Navbar → Menu
Hero → Vertical
Cards → Single column
Pathways → Vertical
CTA → Full width
Footer → Stacked
```

---

# 49. Layout Grid

Desktop:

```text
12-column grid
max-width: 1200–1280px
```

Recommended spacing:

```text
Mobile: 20px
Tablet: 32px
Desktop: 48–64px
```

Major sections:

```text
80–140px vertical spacing
```

---

# 50. Frontend Architecture

Current frontend:

```text
Next.js
   ↓
React
   ↓
Components
   ↓
Feature Layer
   ↓
Service Layer
   ↓
Typed Local Data
```

Future:

```text
Next.js
   ↓
React
   ↓
Components
   ↓
Feature Layer
   ↓
Service Layer
   ↓
API Client
   ↓
Backend
   ↓
Database
```

---

# 51. Current Repository

```text
src/
├── app/
│   ├── page.tsx
│   ├── programmes/
│   ├── career-pathways/
│   ├── eligibility/
│   ├── admission-counselling/
│   ├── about/
│   ├── career-support/
│   └── contact/
│
├── components/
├── data/
├── services/
├── types/
├── lib/
└── styles/
```

---

# 52. Future Platform Architecture

Current website:

```text
domainname.com
```

Future application:

```text
app.domainname.com
```

Future API:

```text
api.domainname.com
```

Architecture:

```text
domainname.com
      │
      └── Public Academy Website

app.domainname.com
      │
      └── Mentor + Candidate Platform

api.domainname.com
      │
      └── Backend API
```

---

# 53. API Abstraction

Current frontend should never directly scatter API calls across page components.

Use:

```text
services/
├── programmes.ts
├── counselling.ts
└── contact.ts
```

Current:

```text
Service
 ↓
Local Data
```

Future:

```text
Service
 ↓
API Client
 ↓
Backend
```

---

# 54. Repository Future Evolution

```text
apps/
├── web/
└── platform/

packages/
├── ui/
├── design-system/
├── types/
├── validation/
├── config/
└── api-client/
```

This ensures the current website can later share common UI, types and infrastructure with the platform.

---

# 55. Domain Configuration

Never hard-code:

```text
domainname.com
app.domainname.com
api.domainname.com
```

throughout the application.

Use:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PLATFORM_URL=
NEXT_PUBLIC_API_BASE_URL=
```

Current:

```env
NEXT_PUBLIC_SITE_URL=https://domainname.com
NEXT_PUBLIC_PLATFORM_URL=
NEXT_PUBLIC_API_BASE_URL=
```

Future:

```env
NEXT_PUBLIC_SITE_URL=https://domainname.com
NEXT_PUBLIC_PLATFORM_URL=https://app.domainname.com
NEXT_PUBLIC_API_BASE_URL=https://api.domainname.com
```

---

# 56. SEO

Public website:

```text
domainname.com
```

should be the primary SEO surface.

Each programme page should have:

- Unique title
- Meta description
- H1
- Structured H2/H3
- Canonical URL
- Open Graph metadata
- Internal links
- Breadcrumbs where useful
- SEO-friendly slug
- Appropriate structured data

The future platform at `app.domainname.com` should be treated primarily as an application surface rather than a public content/SEO surface.

---

# 57. Content Guardrails

The website must use only approved claims.

Allowed:

- “For graduates and students pursuing graduation.”
- “Build technology + healthcare skills for career pathways.”
- “Certification-oriented preparation” where relevant.
- “Placement assistance / career support” where actually available.

Avoid:

- Guaranteed job
- Guaranteed salary
- 100% placement
- Guaranteed certification
- Certification included unless officially documented

---

# 58. Fee Display

Do not publish fixed programme fees.

Use:

> Contact us for current batch pricing, scholarship eligibility and EMI options.

This requirement is explicitly stated in the Academy source material.

---

# 59. Final Navigation

```text
LEFT GROUP

[LOGO | YUKTHIMANTRA'S ACADEMY]
        → /

PROGRAMMES
        → /programmes

CAREER PATHWAYS
        → /career-pathways

ELIGIBILITY
        → /eligibility

ADMISSION COUNSELLING
        → /admission-counselling
```

```text
RIGHT GROUP

ABOUT
        → /about

CAREER SUPPORT
        → /career-support

FAQ
        → /#faq

CONTACT
        → /contact
```

---

# 60. Final Design Direction

The visual identity should combine the key characteristics of the supplied references:

```text
Soft Sky Blue
      +
Lavender / Indigo
      +
Bright Lime Accent
      +
Clean White
      +
Editorial Serif
      +
Modern Sans-serif
      +
Large Typography
      +
Rounded Cards
      +
Floating UI Elements
      +
Subtle Glass / Blur
      +
Smooth GSAP Motion
```

The intended result is:

> **A premium, modern career-learning platform that feels sophisticated, technology-driven and approachable while remaining highly structured for programme discovery and counselling.**

The website should visually feel closer to a **modern education product/platform** than a conventional academy or coaching website.
