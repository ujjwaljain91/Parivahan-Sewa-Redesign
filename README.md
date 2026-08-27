# 🚗 Parivahan Sewa — UX/UI Redesign

> **A citizen-first redesign of the Parivahan Sewa ecosystem, transforming a complex government service portal into a clear, accessible, task-oriented digital experience.**


---

## 📌 Overview

Parivahan Sewa is the digital platform of the **Ministry of Road Transport & Highways, Government of India**, providing a wide range of services related to driving licences, vehicle registration, permits, challans, vehicle fitness, vehicle scrapping, dashboards, industry services, and transport information.

The existing ecosystem contains a large number of services and multiple underlying systems such as:

* VAHAN
* SARATHI
* eChallan
* V-Scrap
* Homologation
* VLTD
* SLD
* CNG
* and other transport platforms

While the ecosystem is functionally extensive, the user experience can become difficult to navigate because users are exposed to a large amount of government terminology, nested navigation, service categories, operational systems, and multiple login paths.

This project explores a **complete UX/UI redesign** that preserves the breadth of the Parivahan ecosystem while making the complexity easier for citizens to navigate.

---

# 🎯 Problem Statement

The primary challenge is not a lack of functionality.

The challenge is **how that functionality is presented**.

The existing experience tends to expose the structure of the government system rather than the user's task.

For example, a citizen generally thinks:

> "I want to renew my driving licence."

not:

> "Which Parivahan system or category handles my licence renewal?"

The redesign therefore follows a simple principle:

## **Hide unnecessary complexity, not functionality.**

The goal is to help users:

* discover the correct service
* understand what they need before starting
* complete complex processes step by step
* understand their current application status
* recover from errors
* access their vehicles, licence and challan information
* use the platform across mobile, tablet and desktop

---

# 💡 Design Concept

## From System-Centric → Task-Centric

### Existing mental model

```text
Government structure
       ↓
Department / System
       ↓
Service category
       ↓
Sub-category
       ↓
Service
```

### Redesigned mental model

```text
User goal
   ↓
Service discovery
   ↓
Requirements
   ↓
Guided process
   ↓
Payment / submission
   ↓
Confirmation
   ↓
Tracking
```

The underlying government systems can remain separate while the user experiences a more coherent **Parivahan front door**.

---

# 🧭 Information Architecture

The redesigned experience is organized around six major entry points:

```text
Parivahan
│
├── Services
├── Track
├── Information
├── Business & Industry
├── Data & Dashboards
├── Help
│
├── Search
├── My Parivahan
└── Sign In
```

### Services

Includes:

* Driving Licence
* Vehicle Registration
* Permits
* Fitness
* Tax & Checkpost
* eChallan
* PUCC
* Fancy Number
* Vehicle Scrapping
* mParivahan
* Vahan Green Sewa
* Vehicle Recall
* and other verified transport services

### Business & Industry

Includes:

* Dealer Services
* Dealer Authorization
* Trade Certificate
* VLTD Maker
* SLD Maker
* CNG Maker
* Homologation
* RVSF
* testing/industry-related services

### Data & Dashboards

Includes:

* Vahan
* Sarathi
* eChallan
* PUCC
* Homologation
* VLTD
* SLD
* Trade Certificate
* Analytics
* Reports

### Information

Includes:

* Citizen Guides
* Vehicle information
* Driving Licence information
* Permits
* Forms
* FAQs
* Fees
* Manuals
* Acts, Rules & Policies
* Notifications

---

# 👥 User Groups

The ecosystem supports multiple audiences, so the redesign separates their experiences.

## 👤 Citizens

Primary needs:

* Driving Licence
* Vehicle Registration
* RC services
* Challans
* PUC
* Permits
* Vehicle Scrapping
* Applications
* Documents
* Appointments

## 🏢 Business & Industry

Primary users:

* Dealers
* Manufacturers
* RVSFs
* Testing organizations
* Industry users

Services include:

* Dealer systems
* Homologation
* VLTD
* SLD
* CNG
* Trade Certificate
* Industry services

## 🏛️ Government / RTO Officials

Operational access includes:

* VAHAN
* SARATHI
* VAHAN Backlog
* Reports
* MIS
* Dashboards
* authorized operational systems

The redesign avoids making citizens understand these internal system names unless they are relevant to their task.

---

# 🔐 Authentication Redesign

The existing ecosystem exposes multiple login systems.

Instead of presenting them as four equally important public navigation items:

* Dealer Login
* Sarathi Login
* Vahan Login
* Vahan Backlog Login

the redesign introduces audience-based entry points:

```text
Sign In
│
├── Citizen
│   └── My Parivahan
│
├── Business / Dealer
│   └── Business Portal
│
└── Government / RTO Staff
    ├── VAHAN
    ├── SARATHI
    └── Backlog
```

This preserves the underlying system access while improving user understanding.

---

# ⭐ Key UX Features

## Task-First Homepage

Instead of making banners and system categories the primary entry point, the homepage starts with:

> **What do you need to do today?**

Users can search for services using natural language.

Examples:

* Renew my driving licence
* Transfer my car ownership
* Check my challan
* Find my vehicle details
* Scrap my vehicle

---

## 🔎 Universal Search

A global search system helps users discover:

* services
* guides
* forms
* FAQs
* notifications
* information

Search is designed around user intent rather than exact government terminology.

---

## 📍 Service Discovery

Each service communicates:

* What the service does
* Who can use it
* What is required
* Process steps
* Fees
* Related services
* Primary action

---

## 📝 Guided Application Flows

Complex government processes are broken into manageable steps.

Typical flow:

```text
Details
   ↓
Verification
   ↓
Documents
   ↓
Review
   ↓
Payment
   ↓
Confirmation
   ↓
Tracking
```

The number of steps adapts based on the service.

---

## 📊 Application Tracking

Users can see:

* application ID
* current status
* completed stages
* pending stages
* next action

Example:

```text
Submitted
   ✓
Verification
   ✓
Documents
   ●
Payment
   ○
Completed
   ○
```

---

## 👤 My Parivahan

A centralized citizen experience for:

* Vehicles
* Driving Licence
* Applications
* Challans
* Documents
* Appointments

The objective is to provide a single understandable citizen dashboard even when underlying government systems remain distributed.

---

## 🚗 Vehicle Dashboard

Provides a consolidated view of:

* RC
* Insurance
* PUC
* Tax
* Fitness
* ownership
* relevant vehicle actions

Common actions include:

* Renew RC
* Transfer ownership
* Change address
* View vehicle details
* Download documents

---

## 🪪 Driving Licence Dashboard

Provides:

* licence status
* validity
* vehicle classes
* appointments
* relevant services

Actions include:

* Renew
* Duplicate
* Add Class
* Change Details
* Download

---

## ⚠️ eChallan

Provides a streamlined flow for:

* checking challans
* viewing details
* payment
* transaction status
* receipts
* raising concerns where applicable

---

## ♻️ Vehicle Scrapping

A dedicated journey for:

* checking eligibility
* finding authorized facilities
* starting the process
* tracking the application
* certificates and relevant information

---

## 📚 Information Hub

Information is separated from transactional services.

Users can find:

* Citizen Guides
* FAQs
* Forms
* Fees
* Manuals
* Acts & Rules
* Notifications
* Vehicle information
* Licence information
* Permit information

### Principle

**Services = Do something**

**Information = Understand something**

---

# 🎨 Design System

The redesign uses a normalized design system derived from the existing Parivahan visual language.

## Colors

### Primary

`#00487F`

### Primary Dark

`#1E4567`

### Primary Subtle

`#EAF3F9`

### Accent

`#F28C28`

### Success

`#198754`

### Warning

`#F59E0B`

### Error

`#DC3545`

### Info

`#0D6EFD`

### Neutral

`#000000`
`#474A52`
`#6B7280`
`#FAFAFA`
`#FFFFFF`
`#D1D5DB`
`#E5E7EB`

---

# ✍️ Typography

Primary font stack:

```css
system-ui,
-apple-system,
"Segoe UI",
Roboto,
Arial,
"Noto Sans",
sans-serif
```

Supports English and Hindi/Devanagari.

Core type scale:

| Level      | Size | Line Height | Weight |
| ---------- | ---: | ----------: | -----: |
| Display    | 48px |        56px |    700 |
| H1         | 40px |        48px |    700 |
| H2         | 32px |        40px |    700 |
| H3         | 24px |        32px |    600 |
| H4         | 20px |        28px |    600 |
| Body Large | 18px |        28px |    400 |
| Body       | 16px |        24px |    400 |
| Body Small | 14px |        21px |    400 |
| Caption    | 12px |        18px |    400 |

---

# 📐 Spacing

Normalized spacing scale:

```text
4
8
12
16
24
32
40
48
64
80
96 px
```

The system intentionally avoids arbitrary spacing values in order to maintain consistent rhythm throughout the application.

---

# 🔲 Radius

```text
8px
10px
16px
20px
999px
```

Used consistently for:

* controls
* cards
* surfaces
* badges
* pills

---

# 🌐 Responsive Design

The project follows a mobile-first approach.

### Breakpoints

```text
Mobile       < 640px
Tablet       640–1023px
Desktop      1024–1279px
Large        ≥ 1280px
```

### Desktop

* 1200px maximum content width
* 12-column grid
* 24px gutters

### Tablet

* 8-column grid
* 20px gutters

### Mobile

* 4-column grid
* 16px page padding
* single-column forms
* responsive cards
* mobile navigation
* responsive tables

The entire experience is designed to work across:

* mobile
* tablet
* laptop
* desktop
* large desktop

---

# ♿ Accessibility

Accessibility is treated as a core product requirement.

The redesign includes:

* keyboard navigation
* visible focus states
* accessible form labels
* screen-reader-friendly structure
* WCAG AA contrast targets
* minimum 44px touch targets
* semantic HTML
* accessible dialogs
* responsive typography
* reduced-motion support
* English/Hindi localization support
* status information that is not communicated only through color

Focus style:

```text
3px solid #00487F
2px offset
```

---

# 🧩 Component Architecture

The project follows a reusable component approach.

```text
components/
│
├── common/
├── layout/
├── ui/
└── features/
```

### Layout

* GovernmentHeader
* MainHeader
* MegaMenu
* MobileDrawer
* Footer
* Breadcrumbs

### UI

* Button
* Card
* Badge
* Alert
* Stepper
* Modal
* Accordion
* FileUpload
* Form controls

### Features

* UniversalSearch
* ApplicationTracker
* VehicleLookupCard
* ChallanViewer
* ScrappingEstimator
* RTOSelector
* DocumentChecklist
* FeeSummary
* VehicleSummary
* LicenceSummary

---

# 🗂️ Project Structure

```text
src/
│
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── utilities.css
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── ui/
│   └── features/
│
├── data/
│   ├── servicesData.ts
│   ├── intentData.ts
│   ├── rtoData.ts
│   ├── dashboardData.ts
│   ├── notificationsData.ts
│   ├── mediaData.ts
│   ├── formsData.ts
│   ├── faqData.ts
│   ├── authData.ts
│   ├── featureRegistry.ts
│   └── translations.ts
│
└── pages/
```

---

# 🧠 Feature Registry

`featureRegistry.ts` acts as the master capability registry.

Each verified capability should map to:

* feature ID
* display name
* category
* audience
* route
* parent category
* service type
* underlying system where applicable
* implementation status

This prevents capabilities from being accidentally omitted during the redesign.

---

# 🔄 Critical User Journeys

The prototype focuses on the following end-to-end experiences.

## 1. Renew Driving Licence

```text
Homepage
→ Search / Services
→ Driving Licence
→ Renewal
→ Requirements
→ State/RTO
→ Authentication
→ Application
→ Documents
→ Review
→ Payment
→ Success
→ Tracking
```

## 2. Transfer Vehicle Ownership

```text
Homepage
→ Vehicle
→ Transfer Ownership
→ Requirements
→ Vehicle Details
→ Verification
→ Documents
→ Review
→ Payment
→ Success
→ Tracking
```

## 3. eChallan

```text
Homepage
→ eChallan
→ Search
→ Results
→ Challan Details
→ Payment
→ Success
```

## 4. Know Your Vehicle

```text
Homepage
→ Know Your Vehicle
→ Registration Number
→ Vehicle Details
```

## 5. Vehicle Scrapping

```text
Homepage
→ Vehicle Scrapping
→ Eligibility
→ Find Facility
→ Application
→ Status / Certificate
```

## 6. My Parivahan

```text
Sign In
→ My Parivahan
→ Vehicles
→ Driving Licence
→ Applications
→ Challans
→ Documents
→ Appointments
```

---

# 🏗️ Design & Development Approach

The project was developed around a **design-system-first** approach.

### Step 1 — Research

Analyze:

* current Parivahan information architecture
* existing services
* login ecosystem
* VAHAN/SARATHI/eChallan relationships
* government portal patterns
* accessibility requirements

### Step 2 — Capability Mapping

Create a complete registry of verified Parivahan capabilities.

### Step 3 — UX Architecture

Reorganize the experience around:

**User task → service → guided workflow**

### Step 4 — Design System

Normalize:

* colors
* typography
* spacing
* radii
* grids
* responsive behavior
* components

### Step 5 — Prototyping

Build critical journeys first.

### Step 6 — Implementation

Use reusable components and data-driven service patterns.

### Step 7 — Responsive QA

Audit the complete experience across:

* 320px
* 375px
* 390px
* 430px
* 480px
* 576px
* 640px
* 768px
* 820px
* 900px
* 1024px
* 1280px
* 1440px
* 1920px

### Step 8 — Accessibility QA

Validate:

* keyboard
* focus
* contrast
* touch targets
* semantic structure
* localization
* zoom behavior

---

# 🛠️ Tech Stack

The implementation is built using modern web technologies.

Typical stack:

* React
* TypeScript
* Vite
* CSS
* Responsive CSS Grid/Flexbox
* Component-based architecture

The implementation is structured so that the UI can later connect to real government APIs/services without requiring a complete frontend rewrite.

---

# 🧪 Prototype Data

Where real government APIs are unavailable, the prototype uses **demo/mock data**.

Examples include:

* vehicle information
* challan records
* application IDs
* dashboard statistics
* RTO information
* payment transactions

Demo data should never be presented as real government records.

---

# ⚠️ Important Disclaimer

This is an **independent UX/UI redesign concept and hackathon prototype**.

It is not an official redesign of Parivahan Sewa and is not affiliated with or endorsed by:

**Ministry of Road Transport & Highways, Government of India**

The project uses the publicly available Parivahan ecosystem as the subject of a design exercise.

Any demo data shown in the prototype is fictional/example data.

---



# 📱 Responsive QA

Before deployment, verify the website at:

```text
320px
375px
390px
430px
480px
576px
640px
768px
820px
900px
1024px
1280px
1440px
1920px
```

Test both portrait and landscape orientations.

Check:

* no unintended horizontal overflow
* no clipped text
* no overlapping components
* no broken navigation
* responsive forms
* responsive tables
* responsive dashboards
* mobile search
* mobile authentication
* complete application journeys

---

# ✅ Current Goals

The project aims to demonstrate:

* better information architecture
* task-oriented service discovery
* reduced cognitive load
* progressive disclosure
* consistent design-system implementation
* accessible government UX
* responsive design
* reusable component architecture
* coherent cross-system experience

---

# 📈 Future Improvements

Potential future iterations include:

* integration with real Parivahan APIs
* real authentication integration
* real-time application status
* personalized service recommendations
* multilingual expansion
* advanced service search
* voice-assisted service discovery
* notification center
* deeper personalization
* stronger analytics and usability testing

These are intentionally outside the current prototype scope unless supported by the available backend/API infrastructure.

---

# 🏆 Hackathon Design Thesis

> **Parivahan doesn't need less functionality. It needs less complexity for the person using it.**

The redesign therefore focuses on transforming:

**Many government systems → One understandable experience**

**Department-first → Task-first**

**Information overload → Progressive disclosure**

**Scattered services → Service discovery**

**Unclear progress → Transparent status**

**Fragmented systems → Coherent experience**

---

## 👨‍💻 Project

**Parivahan Sewa — UX/UI Redesign**

Live Demo:
https://parivahansewa.netlify.app/

Built as a UX/UI and frontend redesign exploration focused on improving the usability, accessibility, and coherence of a complex government digital-service ecosystem.
