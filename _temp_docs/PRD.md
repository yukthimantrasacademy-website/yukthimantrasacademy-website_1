# Product Requirements Document (PRD)

## Yukthimantra's Academy

**Product:** Yukthimantra's Academy Website  
**Brand:** YukthiMantra  
**Sub-brand:** Yukthimantra's Academy  
**Product Type:** Public-facing education, programme discovery, eligibility and counselling website  
**Document Type:** Product Requirements Document  
**Version:** 1.0  
**Status:** Proposed / For Client Approval  
**Primary Purpose:** Website architecture, UX/UI design, development and QA reference  
**Audience:** Client stakeholders, product team, UI/UX designers, frontend developers, backend developers, SEO team, QA team and content team

---

# 1. Executive Summary

Yukthimantra's Academy is a dedicated sub-brand of YukthiMantra focused on **technology + healthcare career programmes**. It operates as a separate website from **Yukthimantra Services**.

The Academy website is intended for:

- Students currently pursuing graduation
- Graduates who have completed a bachelor's degree
- Working professionals who meet the graduation eligibility requirement

The website will primarily help visitors:

1. Understand the Academy and its technology + healthcare positioning.
2. Discover and compare programmes.
3. Search and filter available programmes.
4. Open a dedicated programme-detail page.
5. Understand career pathways.
6. Check eligibility.
7. Submit information for counselling.
8. Receive programme recommendations through the counselling process.
9. Contact an academic advisor.
10. Proceed toward enrolment and onboarding.

The supplied architecture establishes **seven primary website pages**:

1. Home
2. Programmes
3. Career Pathways
4. Eligibility & Admission Counselling
5. About
6. Career Support
7. Contact

The Programme Detail page is a **reusable template**, not a primary navigation item. Every programme card can route to this common template with programme-specific data.

The programme and eligibility requirements in this PRD are based on the supplied **Nibandhana — Eligibility & Programme Guide**.

---

# 2. Brand Architecture

```text
YukthiMantra
│
├── YukthiMantra Services
│   └── Separate Website
│
└── Yukthimantra's Academy
    └── Separate Website
        └── Technology + Healthcare Career Programmes
```

## Academy Positioning

The Academy should be positioned as:

> A career-focused academy operating at the intersection of technology and healthcare.

Programmes should be presented as **technology + healthcare career pathways**, rather than as standalone IT training or standalone medical courses.

---

# 3. Product Vision

Build a professional, trustworthy and conversion-oriented digital platform through which eligible learners can discover relevant technology and healthcare career pathways and move from:

```text
Discover
   ↓
Explore Programmes
   ↓
Understand Career Pathway
   ↓
Check Eligibility
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

The website should reduce uncertainty around programme selection while ensuring that admission decisions remain aligned with the Academy's eligibility and counselling process.

---

# 4. Problem Statement

Potential learners may not know:

- Whether they are eligible.
- Which programme is appropriate for their academic background.
- Whether they should choose a technology, healthcare or integrated pathway.
- What they will learn.
- What career outcomes are associated with a programme.
- How long a programme takes.
- Which documents are required.
- What happens after submitting an enquiry.

The website must therefore function as both:

**A programme discovery platform**  
and  
**A counselling / admission qualification funnel.**

---

# 5. Target Users

## 5.1 Primary User — Graduation-Pursuing Student

A learner currently enrolled in a recognised bachelor's degree programme.

Preferred from second year onward, subject to programme-specific counselling.

### Needs

- Programme discovery
- Eligibility confirmation
- Career guidance
- Programme recommendation
- Learning-mode information
- Counselling

---

## 5.2 Primary User — Graduate

A candidate who has completed a bachelor's degree in any discipline.

### Needs

- Career transition
- Skill development
- Technology + healthcare programmes
- Certification-oriented preparation where applicable
- Career guidance
- Programme comparison

---

## 5.3 Secondary User — Working Professional

A graduate with work experience who is looking for evening, weekend or online learning, subject to programme availability.

---

## 5.4 Internal User — Academic Counsellor

The person responsible for:

- Eligibility verification
- Background assessment
- Career counselling
- Programme recommendation
- Batch/fee communication
- Admission coordination

---

# 6. Eligibility Policy

The website must prominently communicate the Academy's mandatory eligibility rule:

> **Admission Eligibility: This programme is open only to candidates who are currently pursuing graduation or have completed graduation. Eligibility is confirmed during counselling.**

## Eligible

- Graduation pursuing candidates
- Graduation completed candidates
- Working professionals who have completed graduation

## Preferred backgrounds

- B.Tech
- B.E.
- B.Sc
- BCA
- B.Com
- BBA
- BA
- B.Pharm
- B.Sc Nursing
- BPT
- MLT
- Life sciences
- Pharmacy
- Allied health sciences
- Related degrees



## Not eligible / should not be directly enrolled

- Intermediate-only candidates
- 10th/12th-pass-only candidates not pursuing graduation
- Candidates seeking MBBS, nursing, pharmacy or other statutory clinical qualifications through the Academy
- Candidates expecting guaranteed job, salary or external certification without meeting requirements



---

# 7. Website Information Architecture

```text
Yukthimantra's Academy
│
├── 01 Home
│
├── 02 Programmes
│   ├── Search
│   ├── Filters
│   ├── Programme Cards
│   └── Programme Detail Template
│
├── 03 Career Pathways
│
├── 04 Eligibility & Admission Counselling
│
├── 05 About
│
├── 06 Career Support
│
└── 07 Contact
```

## Reusable Programme Detail Template

```text
Programme Card
      ↓
Programme Detail Page
      ├── Hero / Overview
      ├── Eligibility
      ├── Curriculum / Learning Path
      ├── Tools & Technologies
      ├── Career Outcomes
      ├── Industry / Placement Path
      ├── FAQ
      ├── CTA
      └── Footer
```

---

# 8. Navigation Requirements

## Primary Navigation

The website header should contain:

- Home
- Programmes
- Career Pathways
- Eligibility & Admission Counselling
- About
- Career Support
- Contact

Primary CTA:

**Check Your Eligibility**

## Secondary / Utility CTA

Depending on layout:

- Book Free Career Counselling
- Talk to an Academic Advisor
- WhatsApp Us

---

# 9. PAGE 01 — HOME

## Objective

Introduce the Academy, establish trust, communicate positioning, expose programmes and direct eligible users toward programme discovery and counselling.

## Sections

### 9.1 Hero

Required areas:

- Hero eyebrow/category
- Main heading
- Supporting statement
- Primary CTA
- Secondary CTA
- Hero visual/illustration area

Primary CTA:

**Check Your Eligibility**

Secondary CTA:

**Explore Programmes**

The hero should communicate the technology + healthcare career positioning.

---

### 9.2 Eligibility Banner

A persistent, highly visible banner should communicate the graduation eligibility requirement.

---

### 9.3 Programme Overview

Show two programme groups:

### Group A — Data Science, AI & Healthcare Technology

### Group B — Medical Coding, Revenue Cycle & Healthcare Operations



Each programme should be represented by a concise card containing:

- Programme title
- Category
- Short summary
- Duration
- Career pathway indicator
- View Programme CTA

---

### 9.4 Why Choose the Academy

Proposed structural cards:

- Career-focused programmes
- Technology + healthcare integration
- Industry-oriented learning
- Practical projects
- Certification-oriented preparation where applicable
- Career guidance/support

The exact operational claims should be approved by the Academy before publication.

---

### 9.5 Career Pathway Preview

Display a simplified journey:

```text
Eligibility
   ↓
Counselling
   ↓
Programme Recommendation
   ↓
Learning
   ↓
Assessment
   ↓
Career Support
```

---

### 9.6 Programme Outcomes

Show outcome categories such as:

- Technical skills
- Healthcare-domain knowledge
- Practical capability
- Portfolio/project capability
- Career readiness

---

### 9.7 Career Opportunities

Show selected career-role cards based on programme data.

---

### 9.8 Testimonials

Reserved for verified testimonials only.

---

### 9.9 FAQ

Common questions around:

- Eligibility
- Programmes
- Duration
- Learning modes
- Certification
- Career outcomes
- Counselling
- Fees

---

### 9.10 Final CTA

Primary:

**Book Free Career Counselling**

Secondary:

**Get Course & Batch Details**

---

# 10. PAGE 02 — PROGRAMMES

## Objective

Act as the central programme discovery and selection page.

## Required Features

### 10.1 Programme Search

Users must be able to search programmes by:

- Programme name
- Keyword
- Technology
- Healthcare domain

### 10.2 Filters

The architecture requires filters for:

- Programme Category
- Domain
- Career Pathway

Additional filters may be introduced after content confirmation.

### 10.3 Programme Cards

Cards should provide enough information for comparison without becoming full programme-detail pages.

Required fields:

- Programme title
- Group
- Short description
- Duration
- Eligibility indicator
- Career outcome indicator
- View Programme

### 10.4 Empty Search State

Example system behavior:

> No programmes found matching your search/filter combination.

### 10.5 Reset Filters

Provide a visible reset control.

### 10.6 Programme Detail Routing

Clicking **View Programme** routes to:

`/programmes/[programme-slug]`

---

# 11. PROGRAMME CATALOGUE

## Group A — Data Science, AI & Healthcare Technology

### 1. Healthcare Data Analytics Foundation

**Duration:** 2–4 months

**Key learning areas:**

- Excel
- SQL basics
- Python basics
- Data cleaning
- Dashboards
- Power BI/Tableau concepts
- Healthcare datasets
- Reporting

**Career outcomes:**

- Junior Data Analyst
- Healthcare Reporting Analyst
- MIS Analyst
- BI Support Associate



---

### 2. Certified Data Scientist – Healthcare Track

**Duration:** 6–9 months

**Key learning areas:**

- Python
- Statistics
- Machine learning
- Data visualisation
- Healthcare use cases
- Model evaluation
- Capstone projects
- Portfolio building

**Career outcomes:**

- Data Analyst
- Junior Data Scientist
- Healthcare Data Analyst
- ML Analyst



---

### 3. Artificial Intelligence in Healthcare

**Duration:** 4–6 months

**Key learning areas:**

- Machine learning
- Deep learning basics
- NLP
- Computer vision concepts
- Clinical/healthcare use cases
- Responsible AI
- Deployment fundamentals

**Career outcomes:**

- AI/ML Associate
- Healthcare AI Analyst
- Health-tech Product Support Associate



---

### 4. Generative AI & LLM Applications for Healthcare

**Duration:** 6–10 weeks

**Key learning areas:**

- Prompt engineering
- LLM foundations
- RAG
- AI agents
- Healthcare document workflows
- Evaluation
- Privacy
- Responsible use

**Career outcomes:**

- GenAI Application Associate
- Automation Analyst
- Health-tech Operations/Innovation Associate



---

### 5. Python for Data & Healthcare Automation

**Duration:** 4–8 weeks

**Key learning areas:**

- Python essentials
- NumPy
- Pandas
- APIs
- Spreadsheet/file automation
- Data visualisation
- Healthcare workflow examples

**Career outcome:** Foundation pathway for analytics, data science, AI and healthcare automation.



---

### 6. Machine Learning & MLOps Foundation

**Duration:** 3–5 months

**Key learning areas:**

- Supervised learning
- Unsupervised learning
- Pipelines
- Model evaluation
- Versioning
- Deployment basics
- Monitoring
- Health-data use cases

**Career outcomes:**

- ML Associate
- MLOps Support Associate
- Data/AI Project Associate



---

# 12. GROUP B — MEDICAL CODING, REVENUE CYCLE & HEALTHCARE OPERATIONS

### 7. CPC Preparation – Medical Coding

**Duration:** 3–6 months

**Key learning areas:**

- Medical terminology
- Anatomy
- ICD-10-CM
- CPT
- HCPCS Level II
- Coding guidelines
- Compliance
- Practice cases
- Exam-oriented preparation

**Career outcomes:**

- Medical Coding Trainee
- Junior Medical Coder
- CPC examination preparation pathway



---

### 8. CCS Preparation – Clinical & Hospital Coding

**Duration:** 4–6 months

**Key learning areas:**

- Inpatient/outpatient coding concepts
- ICD systems
- Documentation review
- DRGs
- Coding guidelines
- Mock assessments

**Career outcomes:**

- Hospital Coding Associate
- Clinical Coding Trainee
- CCS certification examination preparation pathway



---

### 9. Medical Billing & Revenue Cycle Management

**Duration:** 2–4 months

**Key learning areas:**

- Claims lifecycle
- Insurance basics
- Eligibility verification
- Charge entry
- Denials management
- AR follow-up
- Compliance
- RCM workflow

**Career outcomes:**

- Medical Billing Associate
- RCM Executive
- Claims/Denials Associate



---

### 10. Healthcare IT & Clinical Data Management

**Duration:** 4–6 months

**Key learning areas:**

- Healthcare workflows
- EHR/EMR concepts
- Data quality
- Clinical documentation
- Interoperability basics
- Reporting
- Digital health operations

**Career outcomes:**

- Healthcare IT Support Associate
- Clinical Data Coordinator
- Health Information Associate



---

### 11. Medical Coding + Data Analytics Integrated Pathway

**Duration:** 6–9 months

**Key learning areas:**

- Medical coding fundamentals
- Healthcare revenue cycle
- Excel
- SQL
- Power BI
- Reporting
- Data quality
- Workflow automation
- Portfolio projects

**Career outcomes:**

- Medical Coding Analyst
- RCM Data Analyst
- Healthcare Operations Analyst



---

# 13. PROGRAMME DETAIL TEMPLATE

Each programme uses the same architecture.

## 13.1 Programme Hero

Fields:

- Programme category
- Programme title
- Summary
- Duration
- Eligibility
- Learning mode
- Primary CTA
- Secondary CTA

---

## 13.2 Programme Overview

Display:

- Who the programme is for
- Duration
- Learning mode
- Programme group
- Entry requirements

---

## 13.3 Eligibility

Use programme-specific eligibility from the programme catalogue.

Do not display an eligibility claim that differs from the official Academy requirements.

---

## 13.4 Curriculum / Learning Path

Recommended UI:

- Accordion
- Timeline
- Module cards
- Structured phase-based learning path

---

## 13.5 Tools & Technologies

Use structured badges/tags.

Examples based on supplied programme content:

- Python
- SQL
- Excel
- Power BI
- Tableau
- NumPy
- Pandas
- RAG
- LLMs
- AI Agents
- Machine Learning
- NLP
- Computer Vision

Only show technologies relevant to that specific programme.

---

## 13.6 Career Outcomes

Display official career outcomes from the programme content.

---

## 13.7 Industry / Placement Path

This should communicate **career pathway / placement assistance where operationally available**, not guaranteed placement.

The content guide explicitly prohibits claims such as:

- Guaranteed job
- Guaranteed salary
- 100% placement
- Guaranteed certification

unless formally documented.

---

## 13.8 FAQ

Programme-specific accordion.

---

## 13.9 Programme CTA

Primary:

**Check Your Eligibility**

Secondary:

**Book Free Career Counselling**

Additional:

**Talk to an Academic Advisor**

---

# 14. PAGE 03 — CAREER PATHWAYS

## Objective

Help visitors understand possible career directions rather than making them choose programmes only by programme title.

## Pathway Categories

### Technology + AI

- Data Analytics
- Data Science
- Artificial Intelligence
- Generative AI

### Healthcare Technology

- Healthcare Data
- Healthcare IT
- Clinical Data

### Medical Coding & Healthcare Operations

- Medical Coding
- Clinical Coding
- Medical Billing
- Revenue Cycle Management

### Integrated Career Pathway

- Healthcare
- Technology
- Data Analytics

## Interaction

Each pathway should connect to relevant programme cards.

Example:

```text
Career Pathway
      ↓
Relevant Roles / Skills
      ↓
Recommended Programmes
      ↓
Programme Detail
      ↓
Eligibility / Counselling
```

---

# 15. PAGE 04 — ELIGIBILITY & ADMISSION COUNSELLING

This is a **single combined page**.

## Section 1 — Eligibility Overview

Explain who can apply.

## Section 2 — Who Can Apply

- Graduation pursuing
- Graduation completed
- Eligible working professionals

## Section 3 — Preferred Backgrounds

Display academic backgrounds from the official guide.

## Section 4 — Who Should Not Enrol

Show concise, non-confrontational eligibility guidance.

## Section 5 — Required Documents

- Government photo ID
- College ID / bonafide certificate
- Degree/provisional certificate or final-year marks memo
- Resume if available
- Contact number
- Email ID



---

# 16. ADMISSION & COUNSELLING FLOW

The source defines six steps.

```text
01 Lead Form
      ↓
02 Eligibility Verification
      ↓
03 Career Counselling
      ↓
04 Programme Recommendation
      ↓
05 Document Check & Enrolment
      ↓
06 Onboarding
```

### Step 1 — Lead Form

Capture:

- Graduation status
- Degree
- Year of study/completion
- City
- Preferred programme
- Phone number

### Step 2 — Eligibility Verification

Confirm candidate is pursuing or has completed graduation.

### Step 3 — Career Counselling

Assess:

- Academic background
- English comfort
- Computer comfort
- Career goal
- Time availability
- Budget

### Step 4 — Programme Recommendation

Recommend:

- Foundation pathway
- Integrated pathway
- Coding pathway
- Advanced AI pathway

### Step 5 — Document Check & Enrolment

Collect academic proof and provide batch/fee information.

### Step 6 — Onboarding

On successful enrolment:

- LMS
- WhatsApp group
- Orientation
- Skill assessment



---

# 17. COUNSELLING FORM

Required form fields:

1. Full name
2. Mobile number
3. WhatsApp number
4. Email ID
5. City
6. State
7. Graduation status
8. Degree
9. Specialisation
10. College/university
11. Year of study/passing
12. Preferred programme
13. Preferred learning mode:
   - Online
   - Weekend
   - Classroom
14. Consent for counselling communication



---

# 18. PAGE 05 — ABOUT

## Purpose

Explain who the Academy is and how it approaches technology + healthcare career education.

## Sections

- About the Academy
- Vision
- Mission
- Technology + Healthcare Approach
- Learning Philosophy
- Career-Focused Education
- Student Support

Avoid claims not supported by official Academy documentation.

---

# 19. PAGE 06 — CAREER SUPPORT

## Sections

### Career Guidance

Support learners in understanding career direction.

### Portfolio Development

Relevant particularly for technology pathways.

### Interview Preparation

Career-readiness support where operationally provided.

### Employer Readiness

Prepare learners for employer-facing opportunities.

### Career / Placement Assistance

Use only where this support is actually operational.

The source permits the phrase **placement assistance / career support only if the operational support exists**.

---

# 20. PAGE 07 — CONTACT

## Contact methods

- Contact form
- Talk to an Academic Advisor
- Book Career Counselling
- Email
- Phone
- Address
- Business hours
- WhatsApp / contact CTA

## Primary CTA

**Talk to an Academic Advisor**

---

# 21. PRIMARY CTA SYSTEM

The Academy should standardize CTA labels.

### Primary

**Check Your Eligibility**

### Secondary

**Book Free Career Counselling**

### Supporting

**Get Course & Batch Details**

### Advisor

**Talk to an Academic Advisor**

### Communication

**WhatsApp Us**

These CTAs are explicitly included in the supplied website requirements.

---

# 22. FEES REQUIREMENT

Fees must **not** be displayed as fixed amounts on the public website.

The website should instead communicate:

> Contact us for current batch pricing, scholarship eligibility and EMI options.

Final fees, offers, placement-support terms and certification-exam information should be communicated by an authorised counsellor in writing.

---

# 23. MARKETING / CONTENT GUARDRAILS

## Approved messaging direction

Use:

- “For graduates and students pursuing graduation.”
- “Build technology + healthcare skills for career pathways.”
- “Certification-oriented preparation” where relevant.
- “Placement assistance / career support” only where operationally available.

## Prohibited / restricted claims

Do not publish:

- Guaranteed job
- Guaranteed salary
- 100% placement
- Guaranteed certification
- CPC/CCS certification included

unless formally documented and approved.

---

# 24. UX REQUIREMENTS

## Navigation

- Persistent desktop navbar
- Mobile navigation drawer/menu
- Clear active-state indication
- Programme dropdown/list
- Primary eligibility CTA

## Search

Search must update programme results without unnecessary page reload where technically appropriate.

## Filters

Multiple filters should be combinable.

## Programme Cards

Cards must be scannable and consistent.

## Forms

All forms require:

- Label
- Input
- Validation
- Error state
- Success state
- Consent where required

---

# 25. RESPONSIVE REQUIREMENTS

The website must support:

- Desktop
- Laptop
- Tablet
- Mobile

## Responsive behavior

Desktop:

- Multi-column programme cards
- Horizontal pathway
- Multi-column footer

Tablet:

- Reduced grid columns
- Wrapped navigation
- Stacked sections where necessary

Mobile:

- Single-column content
- Stacked programme cards
- Collapsed navbar
- Vertical career pathway
- Full-width CTA
- Accordion-based dense content

---

# 26. VISUAL / INTERACTION DIRECTION

The previous design direction calls for:

- Modern SaaS-style experience
- Clean hierarchy
- Rounded cards
- Subtle borders
- Clear whitespace
- Professional iconography instead of emojis
- Illustrations from **unDraw** where illustrations are used
- Smooth interaction
- GSAP-based animations
- Scroll-triggered reveals
- Smooth scrolling
- Page transitions
- Hover transitions

These are implementation/design requirements from the broader project brief and should be treated as **UI/UX implementation requirements**, not programme-content requirements.

---

# 27. ANIMATION REQUIREMENTS

Use animation purposefully.

## Required

### Entrance animations

- Hero text reveal
- Section reveal
- Card stagger

### Scroll-triggered animations

- Fade/translate sections on entering viewport
- Programme cards staggered on reveal
- Career pathway progression

### Hover

- Card state
- CTA state
- Link state

### Page transitions

Use subtle transitions between routes.

### Smooth scrolling

Enable smooth scrolling for internal section navigation.

## Performance rule

Animations must not interfere with:

- Accessibility
- Content visibility
- Mobile performance
- Page interaction
- SEO rendering

Support `prefers-reduced-motion`.

---

# 28. ILLUSTRATION REQUIREMENTS

Where illustrations are required:

Source:

**unDraw — https://undraw.co/illustrations**

Use illustrations selectively for:

- Home hero
- Career pathway
- Programme category introduction
- Counselling
- About
- Career support

Do not use illustrations as substitutes for programme content.

---

# 29. SEO REQUIREMENTS

Each page and programme-detail route should have:

- Unique page title
- Meta description
- Canonical URL
- H1
- Proper H2/H3 structure
- SEO-friendly URL
- Open Graph metadata
- Structured internal links
- Image alt text
- Sitemap support
- Robots configuration
- Breadcrumbs where useful

## Example URL structure

```text
/
 /programmes
 /programmes/healthcare-data-analytics
 /programmes/certified-data-scientist-healthcare
 /programmes/artificial-intelligence-healthcare
 /programmes/generative-ai-healthcare
 /programmes/python-healthcare-automation
 /programmes/ml-mlops-foundation
 /programmes/cpc-medical-coding
 /programmes/ccs-clinical-hospital-coding
 /programmes/medical-billing-rcm
 /programmes/healthcare-it-clinical-data
 /programmes/medical-coding-data-analytics
 /career-pathways
 /eligibility-admission-counselling
 /about
 /career-support
 /contact
```

---

# 30. TECHNICAL ARCHITECTURE

## Frontend

The implementation technology is **TBD unless separately approved**.

A component-based architecture is recommended.

Core component groups:

```text
components/
├── navigation/
├── programme/
├── forms/
├── cards/
├── pathways/
├── faq/
├── cta/
├── footer/
├── testimonials/
└── shared/
```

## Dynamic programme model

Programme information should be data-driven so the same programme-detail template can render all 11 programmes.

Example conceptual structure:

```text
Programme
├── id
├── slug
├── title
├── category
├── duration
├── eligibility
├── learningAreas[]
├── careerOutcomes[]
├── tools[]
├── faq[]
└── status
```

---

# 31. FORM & LEAD HANDLING

The website should capture enquiry information through the counselling form.

At minimum the system should:

1. Validate required fields.
2. Capture consent.
3. Record submission time.
4. Prevent obvious invalid/duplicate submissions where appropriate.
5. Display success confirmation.
6. Provide a clear next step.
7. Make the enquiry available to the authorised counselling process.

The exact CRM/API destination is **TBD**.

---

# 32. SUCCESS / FAILURE STATES

## Form success

Display:

- Confirmation
- Expected next step
- Counselling contact information where available

## Validation failure

Display field-level errors.

## Network failure

Allow retry without losing entered information where technically feasible.

## No programmes found

Display empty state and reset filters option.

## Programme unavailable

If a programme is temporarily unavailable, show an appropriate status rather than deleting the page unexpectedly.

---

# 33. NON-FUNCTIONAL REQUIREMENTS

## NFR-001 — Responsiveness

The website must function correctly across supported desktop, tablet and mobile screen sizes.

## NFR-002 — Performance

Pages should load efficiently and avoid unnecessary JavaScript, animation or asset overhead.

## NFR-003 — Accessibility

The website should support:

- Keyboard navigation
- Focus states
- Semantic HTML
- Proper form labels
- Meaningful alt text
- Adequate contrast
- Reduced-motion preference

## NFR-004 — SEO

Public pages must be crawlable and contain unique metadata.

## NFR-005 — Maintainability

Programme pages should be driven from reusable components/data rather than duplicated page implementations.

## NFR-006 — Security

All public forms must use secure transport and appropriate validation/sanitization.

---

# 34. BUSINESS RULES

| Rule ID | Rule |
|---|---|
| BR-001 | Only candidates currently pursuing graduation or who have completed graduation are eligible to apply. |
| BR-002 | Eligibility is confirmed during counselling. |
| BR-003 | Intermediate-only candidates should not be directly enrolled. |
| BR-004 | Programmes should be positioned as technology + healthcare career pathways. |
| BR-005 | Fixed programme fees should not be publicly displayed. |
| BR-006 | Certification claims must not imply guaranteed certification. |
| BR-007 | Placement claims must not imply guaranteed employment. |
| BR-008 | Programme recommendation follows eligibility and counselling assessment. |
| BR-009 | Programme-detail pages should use a reusable template. |

Source-derived rules are based on the supplied Nibandhana document.

---

# 35. DATA / CONTENT MANAGEMENT REQUIREMENTS

The programme data should be centrally manageable.

For each programme, store:

- Programme title
- Category
- Ideal learner profile
- Duration
- Key learning areas
- Career outcomes
- Programme status
- Learning modes
- FAQs
- Tools/technologies
- CTA configuration

This allows programme changes without redesigning the page structure.

The source also notes that programme names, duration, delivery mode, city availability and admission terms should be updated before each batch launch.

---

# 36. ADMIN / INTERNAL CONTENT REQUIREMENTS

At minimum, internal content management should eventually support:

- Programme updates
- Duration updates
- Learning mode updates
- Batch-related information
- Counselling information
- FAQ updates
- Career-support information

Whether a dedicated CMS/admin panel is included in MVP is **TBD**.

---

# 37. ANALYTICS REQUIREMENTS

Recommended key events:

- Homepage viewed
- Programme search used
- Filter applied
- Programme card clicked
- Programme detail viewed
- Eligibility CTA clicked
- Counselling form started
- Counselling form submitted
- WhatsApp CTA clicked
- Academic advisor CTA clicked

Primary funnel:

```text
Visitor
  ↓
Programme Discovery
  ↓
Programme Detail
  ↓
Eligibility
  ↓
Counselling Form
  ↓
Qualified Lead
```

---

# 38. MVP SCOPE

## Must Have — P0

- Home
- Programmes page
- Programme search
- Programme filters
- All 11 programme entries
- Reusable programme-detail template
- Career Pathways
- Eligibility & Admission Counselling
- Counselling form
- About
- Career Support
- Contact
- Mandatory eligibility messaging
- Primary CTAs
- Responsive design
- SEO fundamentals
- Form validation
- Programme routing

## Should Have — P1

- Testimonials
- Advanced analytics
- Enhanced programme filtering
- WhatsApp integration
- CMS/admin management
- Rich FAQ functionality

## Could Have — P2

- Personalised programme recommendation engine
- Advanced eligibility checker
- Programme comparison
- Saved programmes
- User accounts

These are future possibilities and should not automatically be treated as MVP requirements.

---

# 39. OUT OF SCOPE FOR MVP

Unless separately approved:

- Full LMS implementation
- Online examinations
- Student dashboard
- Payment gateway
- Automated certification issuance
- Guaranteed placement system
- Employer portal
- Complex applicant CRM
- Statutory clinical qualification delivery
- AI-based career recommendation engine

---

# 40. ACCEPTANCE CRITERIA

## Programmes Page

**Given** the visitor opens the Programmes page  
**When** the page loads  
**Then** all published programmes should be displayed in the configured programme groups.

**Given** a visitor enters a search term  
**When** the search is executed  
**Then** matching programme cards should be displayed.

**Given** filters are selected  
**When** the filter state changes  
**Then** programme results should update accordingly.

---

## Programme Detail

**Given** the visitor clicks a programme card  
**When** navigation occurs  
**Then** the corresponding programme-detail template must open with the correct programme data.

---

## Eligibility

**Given** a candidate indicates that they are not pursuing or have not completed graduation  
**When** the form is evaluated  
**Then** the website should not represent them as eligible for direct admission.

---

## Counselling

**Given** all required counselling fields are valid  
**When** the form is submitted  
**Then** the enquiry must be recorded and the visitor must receive a clear confirmation.

---

# 41. QA TESTING AREAS

## Functional

- Navigation
- Search
- Filters
- Programme routing
- Forms
- CTA behavior
- FAQ accordion
- Responsive layout

## Content

- Correct programme titles
- Correct durations
- Correct learning areas
- Correct career outcomes
- Correct eligibility language
- No prohibited claims

## Responsive

- Desktop
- Tablet
- Mobile

## Accessibility

- Keyboard navigation
- Screen-reader labels
- Focus states
- Forms
- Reduced motion

## SEO

- Metadata
- H1/H2 hierarchy
- URLs
- Sitemap
- Canonicals
- Indexability

---

# 42. RISKS

| Risk | Impact | Mitigation |
|---|---|---|
| Programme information changes between batches | High | Centralised programme data |
| Unapproved marketing claims | High | Content approval workflow |
| Incorrect eligibility messaging | High | Use official Nibandhana as source of truth |
| Programme pages duplicated manually | Medium | Reusable dynamic template |
| Excessive animation impacts performance | Medium | Limit GSAP animations and support reduced motion |
| Form leads are not routed properly | High | Define CRM/email workflow before launch |
| Career-support claims exceed actual operations | High | Approval by Academy operations |
| Fee information becomes outdated | Medium | Keep public fee display generic |

---

# 43. OPEN QUESTIONS / DECISIONS REQUIRED

| ID | Decision |
|---|---|
| OQ-001 | What is the final production technology stack? |
| OQ-002 | Where should counselling form submissions be stored? |
| OQ-003 | Is a CRM integration required? |
| OQ-004 | What exact contact details should appear on the Contact page? |
| OQ-005 | Which learning modes are available for each current batch? |
| OQ-006 | Which career-support / placement services are operationally available? |
| OQ-007 | Should WhatsApp be connected directly to a counsellor? |
| OQ-008 | Is a CMS/admin panel required in MVP? |
| OQ-009 | Which testimonials/success stories are officially approved for publication? |
| OQ-010 | What exact domains/URLs will be used in production? |
| OQ-011 | Which programme offerings are active for the first launch batch? |
| OQ-012 | Which unDraw illustrations and visual assets are approved for final UI? |

---

# 44. TRACEABILITY SUMMARY

| Requirement Area | Source |
|---|---|
| Academy positioning | Nibandhana |
| Graduation-only eligibility | Nibandhana |
| Programme groups | Nibandhana |
| 11 programme catalogue | Nibandhana |
| Programme durations | Nibandhana |
| Learning areas | Nibandhana |
| Career outcomes | Nibandhana |
| Admission flow | Nibandhana |
| Required counselling fields | Nibandhana |
| CTA labels | Nibandhana |
| Marketing guardrails | Nibandhana |
| Fee display rule | Nibandhana |
| Seven-page website architecture | Client-provided architecture image |
| Programme-detail reusable template | Client-provided architecture image |
| Search and filters | Client-provided architecture image |
| GSAP / animation / smooth scrolling | Earlier project requirements |

The Nibandhana guide is the authoritative source for the programme, eligibility, admission and messaging rules.

---

# 45. Final Product Summary

Yukthimantra's Academy should be developed as a **dedicated technology + healthcare career-programme platform**, separate from YukthiMantra Services.

The website's core structure is:

```text
HOME
  ↓
PROGRAMMES
  ↓
PROGRAMME DETAIL
  ↓
CAREER PATHWAY
  ↓
ELIGIBILITY
  ↓
COUNSELLING
  ↓
PROGRAMME RECOMMENDATION
  ↓
ENROLMENT
  ↓
ONBOARDING
```

The seven primary pages are:

```text
1. Home
2. Programmes
3. Career Pathways
4. Eligibility & Admission Counselling
5. About
6. Career Support
7. Contact
```

The **Programmes page** is the primary discovery engine, with search, filters and programme cards. Each card routes into a **shared Programme Detail template**, allowing all 11 programmes to maintain consistent UX and content architecture.

The Academy must maintain strict eligibility and marketing controls: applicants must be pursuing or have completed graduation; fixed fees should not be published; and the website must not imply guaranteed jobs, salaries, placement or certification.

The primary conversion objective is therefore not simply **“Enroll Now”**, but a guided and qualified journey:

**Discover → Check Eligibility → Counselling → Recommendation → Enrolment.**