Yukthimantra's Academy — Updated Technical Design Direction
===========================================================

1\. Product Phases
------------------

### Phase 1 — Current Website

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com      │      └── Next.js + React Frontend          │          ├── Home          ├── Programmes          ├── Dynamic Programme Pages          ├── Career Pathways          ├── Eligibility          ├── Admission Counselling          ├── About          ├── Career Support          ├── FAQ (#faq)          └── Contact   `

The current release is **frontend-only**.

There is no requirement to build a full backend, authentication system, mentor system, candidate dashboard, or database at this stage.

### Phase 2 — Future Platform

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Yukthimantra's Academy  │  ├── domainname.com  │   └── Public Academy Website  │  └── app.domainname.com      └── Full Academy Platform          │          ├── Authentication          │          ├── Candidate          │   ├── Dashboard          │   ├── Profile          │   ├── Applications          │   ├── Programmes          │   ├── Learning          │   ├── Sessions          │   ├── Messages          │   └── Career Support          │          └── Mentor              ├── Dashboard              ├── Profile              ├── Candidates              ├── Availability              ├── Sessions              └── Messages   `

The current website must therefore be developed in a way that allows the future platform to be introduced without major frontend refactoring.

2\. Core Architecture Principle
===============================

The current implementation should follow:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Current:  Page    ↓  UI Components    ↓  Feature Layer    ↓  Service Layer    ↓  Local / Mock Data   `

The future implementation should be able to change to:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Future:  Page    ↓  UI Components    ↓  Feature Layer    ↓  Service Layer    ↓  API Client    ↓  Backend API    ↓  Database / External Services   `

The UI should **not directly depend on the implementation of the data source**.

3\. Technology Stack
====================

LayerTechnologyStatusFrontend FrameworkNext.jsConfirmedUI LibraryReactConfirmedLanguageTypeScriptRecommendedRoutingNext.js App RouterRecommendedStylingTBD / project-approved styling systemTBDAnimationGSAP + ScrollTriggerPreviously specifiedIconsLucide or equivalentRecommendedIllustrationsunDrawPreviously specifiedBackendNot required currentlyFutureDatabaseNot required currentlyFutureAuthenticationNot required currentlyFutureAPINot required currently, abstraction requiredFuture

4\. Repository Strategy
=======================

The current repository should not be structured as a disposable marketing website.

Current Phase
-------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   yukthimantra-academy/  │  ├── src/  │   ├── app/  │   ├── components/  │   ├── data/  │   ├── services/  │   ├── types/  │   ├── lib/  │   └── styles/  │  ├── public/  ├── docs/  └── package.json   `

Future Evolution
----------------

When the platform is launched, the repository can evolve into a monorepo:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   yukthimantra-academy/  │  ├── apps/  │   ├── web/  │   │   └── Public Academy Website  │   │  │   └── platform/  │       └── Mentor / Candidate Platform  │  ├── packages/  │   ├── ui/  │   ├── design-system/  │   ├── types/  │   ├── validation/  │   ├── config/  │   └── api-client/  │  ├── docs/  │   ├── prd/  │   ├── architecture/  │   ├── api/  │   └── design/  │  └── package.json   `

Only apps/web needs to be implemented now.

5\. Next.js Application Structure
=================================

Use the Next.js App Router.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/  └── app/      ├── page.tsx      │      ├── programmes/      │   ├── page.tsx      │   └── [slug]/      │       └── page.tsx      │      ├── career-pathways/      │   └── page.tsx      │      ├── eligibility/      │   └── page.tsx      │      ├── admission-counselling/      │   └── page.tsx      │      ├── about/      │   └── page.tsx      │      ├── career-support/      │   └── page.tsx      │      └── contact/          └── page.tsx   `

The FAQ remains a homepage section:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /#faq   `

There should be no /faq page.

6\. Website Routes
==================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /                              Home  /programmes                    Programmes  /programmes/[slug]             Dynamic Programme Detail  /career-pathways               Career Pathways  /eligibility                   Eligibility  /admission-counselling         Admission Counselling  /about                         About  /career-support                Career Support  /contact                       Contact  /#faq                          Homepage FAQ   `

7\. Future Platform Routes
==========================

These are future routes and should **not be implemented now**:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.domainname.com/  /login  /register  /candidate  /candidate/dashboard  /candidate/profile  /candidate/programmes  /candidate/applications  /candidate/messages  /candidate/sessions  /mentor  /mentor/dashboard  /mentor/profile  /mentor/candidates  /mentor/sessions  /mentor/messages   `

8\. Environment Configuration
=============================

Do not hard-code domain URLs throughout the codebase.

Use environment variables.

Current
-------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   NEXT_PUBLIC_SITE_URL=https://domainname.com  NEXT_PUBLIC_PLATFORM_URL=  NEXT_PUBLIC_API_BASE_URL=   `

Future
------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   NEXT_PUBLIC_SITE_URL=https://domainname.com  NEXT_PUBLIC_PLATFORM_URL=https://app.domainname.com  NEXT_PUBLIC_API_BASE_URL=https://api.domainname.com   `

This allows the platform to be introduced without changing application logic.

9\. Data Architecture
=====================

Programme content should be data-driven.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/  └── data/      ├── programmes.ts      ├── career-pathways.ts      ├── faq.ts      ├── eligibility.ts      └── navigation.ts   `

Programme data should use a consistent structure.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   type Programme = {    id: string;    slug: string;    title: string;    category: string;    group: string;    description: string;    duration: string;    eligibility: string[];    learningAreas: string[];    tools: string[];    careerOutcomes: string[];  };   `

This allows the same programme template to render all programme pages.

10\. Service Layer
==================

Do not put data-access logic directly inside React components.

Recommended:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/  └── services/      ├── programmes.ts      ├── counselling.ts      └── contact.ts   `

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   export async function getProgrammes() {    // Phase 1:    // return local programme data    // Future:    // return apiClient.get("/programmes");  }   `

Components should use:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const programmes = await getProgrammes();   `

rather than directly calling APIs.

11\. API Abstraction
====================

Even though there is no backend now, create a place for future API integration.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/  └── lib/      └── api/          ├── client.ts          ├── programmes.ts          ├── counselling.ts          ├── users.ts          └── mentors.ts   `

Current:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Service    ↓  Local Data   `

Future:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Service    ↓  API Client    ↓  Backend   `

This prevents API implementation details from leaking into the UI layer.

12\. API Contract Direction
===========================

Future API contracts should be versioned.

Recommended future structure:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /api/v1/programmes  /api/v1/programmes/:slug  /api/v1/counselling  /api/v1/career-pathways   `

These endpoints do not need to exist during the current frontend-only phase.

The important requirement is to keep the service layer compatible with them.

13\. Counselling Form Architecture
==================================

### Current

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   User    ↓  Counselling Form    ↓  Client-side Validation    ↓  Counselling Service    ↓  Configured Submission Method   `

### Future

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   User    ↓  Counselling Form    ↓  Client-side Validation    ↓  Counselling Service    ↓  POST /api/v1/counselling    ↓  Backend    ↓  Database / CRM    ↓  Counsellor   `

The form component itself should not need to be rewritten.

14\. Shared UI Architecture
===========================

The public website and future platform should eventually share the same UI system.

Recommended future shared package:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   packages/  └── ui/      ├── Button      ├── Input      ├── Select      ├── Card      ├── Modal      ├── Tabs      ├── Accordion      ├── Badge      ├── Avatar      ├── Navbar      ├── Footer      ├── ProgrammeCard      ├── ProgrammeGrid      └── Form   `

This prevents duplication when the platform is introduced.

15\. Current Component Structure
================================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/  └── components/      ├── layout/      ├── navigation/      ├── programmes/      ├── career-pathways/      ├── eligibility/      ├── counselling/      ├── forms/      └── shared/   `

16\. Programme Architecture
===========================

All 11 programmes should use the same dynamic template.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Programme Card        ↓  /programmes/[slug]        ↓  Programme Detail Template   `

Programme detail structure:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Hero    ↓  Programme Overview    ↓  Eligibility    ↓  Curriculum / Learning Path    ↓  Tools & Technologies    ↓  Career Outcomes    ↓  Industry / Career Path    ↓  FAQ    ↓  Counselling CTA   `

17\. Future Mentor–Candidate Data Model
=======================================

The current website does not implement these entities yet, but the architecture should not prevent them from being introduced later.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Candidate  │  ├── Profile  ├── Programme  ├── Application  ├── Mentor Assignment  ├── Sessions  ├── Messages  └── Career Progress  Mentor  │  ├── Profile  ├── Expertise  ├── Availability  ├── Candidates  ├── Sessions  └── Messages   `

Future relationship:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Candidate       │       ↓  Mentor Assignment       │       ↓  Mentor   `

18\. Public Website vs Future Platform
======================================

CapabilityCurrent WebsiteFuture PlatformProgramme discoveryYesYesProgramme searchYesYesProgramme filteringYesYesProgramme detailYesYesCareer pathwaysYesYesEligibilityYesYesAdmission counsellingYesYesCandidate accountNoYesMentor accountNoYesAuthenticationNoYesMessagingNoYesMentor matchingNoYesSchedulingNoYesCandidate dashboardNoYesMentor dashboardNoYesLMS integrationFutureYesBackend APIFutureYesDatabaseFutureYes

19\. Domain Architecture
========================

Current
-------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com   `

This is the public Academy website.

Future
------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com          │          └── Public Academy Website  app.domainname.com          │          └── Academy Platform  api.domainname.com          │          └── Backend API   `

This separation should be planned from the beginning.

20\. Future Backend Boundary
============================

The frontend should eventually communicate with:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.domainname.com          ↓  api.domainname.com   `

The public website should not directly communicate with the database.

Future architecture:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Browser    ↓  Next.js    ↓  API Client    ↓  Backend API    ↓  Business Logic    ↓  Database   `

21\. Authentication
===================

Authentication is **not part of the current website implementation**.

However, avoid designing the repository in a way that assumes the public website itself will contain candidate/mentor authentication later.

Future authentication should belong to:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.domainname.com   `

rather than the marketing/Academy website.

22\. SEO Architecture
=====================

The public website is the primary SEO surface.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com   `

Programme pages should be crawlable:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com/programmes/...   `

The future application:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.domainname.com   `

should generally be treated as an application surface rather than the main SEO content surface.

23\. Current Frontend Responsibilities
======================================

The current repository should implement:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ✓ Next.js  ✓ React  ✓ TypeScript  ✓ Responsive UI  ✓ Dynamic programme rendering  ✓ Programme search  ✓ Programme filters  ✓ Programme detail routing  ✓ Career pathway pages  ✓ Eligibility page  ✓ Admission counselling page  ✓ About page  ✓ Career support page  ✓ Contact page  ✓ Homepage FAQ  ✓ Form validation  ✓ SEO  ✓ GSAP animations  ✓ ScrollTrigger  ✓ Smooth scrolling  ✓ Reusable components  ✓ Typed data models  ✓ Service abstractions  ✓ Environment configuration   `

24\. Future Responsibilities
============================

These should remain outside the current implementation:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ○ Authentication  ○ Candidate accounts  ○ Mentor accounts  ○ Backend  ○ Database  ○ Messaging  ○ Mentor matching  ○ Scheduling  ○ Candidate dashboards  ○ Mentor dashboards  ○ LMS integration  ○ Application management  ○ Session management  ○ Real-time communication   `

25\. Important Development Rule
===============================

Do **not** build fake APIs simply to make the current frontend appear full-stack.

Instead:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Current:  Typed Local Data         ↓  Service Layer         ↓  React / Next.js UI   `

Future:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   API   ↓  Service Layer   ↓  React / Next.js UI   `

The UI should remain independent of the underlying data source.

26\. Recommended Final Repository Structure
===========================================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   yukthimantra-academy/  │  ├── src/  │   ├── app/  │   │   ├── page.tsx  │   │   │  │   │   ├── programmes/  │   │   │   ├── page.tsx  │   │   │   └── [slug]/  │   │   │       └── page.tsx  │   │   │  │   │   ├── career-pathways/  │   │   │   └── page.tsx  │   │   │  │   │   ├── eligibility/  │   │   │   └── page.tsx  │   │   │  │   │   ├── admission-counselling/  │   │   │   └── page.tsx  │   │   │  │   │   ├── about/  │   │   │   └── page.tsx  │   │   │  │   │   ├── career-support/  │   │   │   └── page.tsx  │   │   │  │   │   └── contact/  │   │       └── page.tsx  │   │  │   ├── components/  │   │   ├── layout/  │   │   ├── navigation/  │   │   ├── programmes/  │   │   ├── pathways/  │   │   ├── eligibility/  │   │   ├── counselling/  │   │   ├── forms/  │   │   └── shared/  │   │  │   ├── data/  │   │   ├── programmes.ts  │   │   ├── pathways.ts  │   │   ├── eligibility.ts  │   │   ├── faq.ts  │   │   └── navigation.ts  │   │  │   ├── services/  │   │   ├── programmes.ts  │   │   ├── counselling.ts  │   │   └── contact.ts  │   │  │   ├── types/  │   │   ├── programme.ts  │   │   ├── pathway.ts  │   │   └── counselling.ts  │   │  │   ├── lib/  │   │   ├── api/  │   │   ├── config/  │   │   ├── validation/  │   │   └── utils/  │   │  │   └── styles/  │  ├── public/  │  ├── docs/  │   ├── prd/  │   ├── design/  │   ├── architecture/  │   └── api/  │  ├── .env.example  ├── package.json  └── README.md   `

27\. Future Monorepo Evolution
==============================

When the platform is introduced:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   yukthimantra-academy/  │  ├── apps/  │   ├── web/  │   │   └── domainname.com  │   │  │   └── platform/  │       └── app.domainname.com  │  ├── packages/  │   ├── ui/  │   ├── design-system/  │   ├── types/  │   ├── validation/  │   ├── config/  │   └── api-client/  │  ├── docs/  │  └── package.json   `

This allows the two applications to share common code while remaining independently deployable.

28\. Deployment
===============

Phase 1
-------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Git Repository        ↓  Next.js Build        ↓  Frontend Hosting        ↓  domainname.com   `

Future
------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML                    `Git Repository                             │                ┌────────────┴────────────┐                ↓                         ↓          Web Application           Platform Application                ↓                         ↓         domainname.com           app.domainname.com                                          │                                          ↓                                    Backend API                                          │                           ┌──────────────┼──────────────┐                           ↓              ↓              ↓                       Database       Storage        Services`

29\. API Domain Strategy
========================

Recommended future architecture:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   domainname.com      ↓  Public Website  app.domainname.com      ↓  Application Platform  api.domainname.com      ↓  Backend API   `

This avoids coupling the public website to backend infrastructure.

30\. Final Technical Principle
==============================

The project should follow this rule:

> **Build today's frontend correctly while establishing the architectural boundaries required for tomorrow's platform.**

Therefore:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   CURRENT  Next.js + React        ↓  Dynamic Frontend        ↓  Service Abstraction        ↓  Typed Local Data  FUTURE  Next.js + React        ↓  Platform Frontend        ↓  API Client        ↓  Backend API        ↓  Database / Services   `

This gives the project a clean path from:

**domainname.com → public Academy website**

to:

**domainname.com + app.domainname.com + api.domainname.com → complete mentor–candidate platform**

without forcing a major rewrite of the current frontend architecture.