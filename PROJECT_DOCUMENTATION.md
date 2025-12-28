# Volt Wheels System - Project Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Key Components](#key-components)
4. [Pages & Routes](#pages--routes)
5. [Features & Functionality](#features--functionality)
6. [Code Architecture](#code-architecture)

---

## 🎯 Project Overview

**Volt Wheels** is a Next.js-based web application for managing and showcasing:

- **Three sister companies**: Volt Wheels, SRS Enterprise, and NRG Future
- **Euler Motors Products**: Official distributor of electric commercial vehicles
- **Lead Management System**: Admin dashboard for tracking customer inquiries
- **IoT Technology Solutions**: Monitoring and control systems

---

## 📁 File Structure

### **Root Directory**

```
v0-volt-wheels-system-plan/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and configurations
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── scripts/                # Database and automation scripts
└── styles/                 # Global styles
```

---

## 🧩 Key Components

### **1. Navigation Component** (`components/navigation.tsx`)

**Purpose**: Main site navigation with dropdown menus

**Features**:

- Sticky navigation bar with backdrop blur
- Desktop dropdown menus for:
  - About Us (About Us, Career, Policies)
  - Products (Euler Motors Vehicles, Company pages)
  - Services (Our Services, IoT Driven Tech)
- Mobile-responsive hamburger menu
- State management for dropdowns and mobile menu

**Key State**:

- `isOpen`: Controls mobile menu visibility
- `openDropdown`: Tracks which dropdown is active

**Dependencies**:

- `lucide-react` for icons
- `next/link` for navigation
- Custom Button component

---

### **2. Hero Carousel Component** (`components/hero-carousel.tsx`)

**Purpose**: Rotating hero banner with key messages

**Features**:

- 3 slides with different value propositions
- Auto-looping carousel using Embla Carousel
- Navigation dots for slide indication
- Previous/Next buttons (desktop only)
- Responsive typography

**Slides Content**:

1. "Power Your Future with Volt Wheels" - Innovation focus
2. "Sustainable Energy Solutions" - Performance & Reliability
3. "Integrated Mobility Ecosystem" - Trusted Partner

**Dependencies**:

- `embla-carousel-react` for carousel functionality
- `useState`, `useCallback`, `useEffect` for state management

---

### **3. Euler Product Card Component** (`components/euler-product-card.tsx`)

**Purpose**: Display individual Euler Motors vehicle information

**Features**:

- Product image with error fallback (emoji placeholder)
- Product specifications (payload, range, battery, charging)
- Key features list (shows first 3)
- "View Details" button linking to product page
- Hover effects and transitions

**Props Interface**:

```typescript
{
  name: string
  slug: string
  description: string
  image: string
  features: string[]
  specifications?: {
    payload?: string
    range?: string
    battery?: string
    charging?: string
  }
}
```

**Image Handling**:

- Uses Next.js Image component for optimization
- Fallback to emoji if image fails to load
- Supports external URLs from eulermotors.com

---

### **4. Company Card Component** (`components/company-card.tsx`)

**Purpose**: Display information about sister companies

**Features**:

- Company icon with color coding
- Description text
- "Learn More" link
- Hover effects

---

## 📄 Pages & Routes

### **1. Homepage** (`app/page.tsx`)

**Route**: `/`

**Sections**:

1. **Navigation** - Site-wide navigation bar
2. **Hero Carousel** - Rotating banner with key messages
3. **Services Section** - Three service cards:
   - EV Charging Solutions → Volt Wheels
   - Energy Management → SRS Enterprise
   - IoT Integration → NRG Future
4. **IoT Assisted Operation** - Feature highlight section
5. **Euler Motors Products** - Preview of 3 vehicles with link to full page
6. **Companies Section** - Three company cards
7. **Contact Form** - Simple contact form (Name, Email, Message)
8. **Footer** - Links, company info, contact details

**Data Structures**:

- `companies`: Array of company objects with name, slug, description, color, icon
- `services`: Array of service objects with title, description, link

---

### **2. Euler Motors Products Page** (`app/products/euler-motors/page.tsx`)

**Route**: `/products/euler-motors`

**Purpose**: Showcase all Euler Motors vehicles as official distributor

**Sections**:

1. **Hero Section** - "Official Distributor" badge, title, description
2. **Products Grid** - 3 product cards:
   - Euler Turbo EV
   - Euler Storm T1500
   - Euler HiLoad EV
3. **Why Choose Section** - 3 benefit cards:
   - Zero Emissions
   - Cost Effective
   - Advanced Technology
4. **CTA Section** - Call-to-action for quotes and test drives

**Product Data**:
Each product includes:

- Name and slug
- Description
- Image URL (from eulermotors.com)
- Features array (6 items)
- Specifications object (payload, range, battery, charging)

---

### **3. Company Pages** (`app/companies/[slug]/page.tsx`)

**Routes**:

- `/companies/volt-wheels`
- `/companies/srs-enterprise`
- `/companies/nrg-future`

**Purpose**: Individual company information pages

---

### **4. Contact Pages** (`app/companies/[slug]/contact/page.tsx`)

**Routes**:

- `/companies/volt-wheels/contact`
- `/companies/srs-enterprise/contact`
- `/companies/nrg-future/contact`

**Purpose**: Company-specific contact forms using LeadForm component

---

### **5. Admin Dashboard** (`app/admin/dashboard/page.tsx`)

**Route**: `/admin/dashboard`

**Purpose**: Lead management dashboard

**Features**:

- Lead statistics (total, new, contacted, qualified)
- Recent leads list
- Data fetching from `/api/leads`

---

### **6. Admin Leads Page** (`app/admin/leads/page.tsx`)

**Route**: `/admin/leads`

**Purpose**: Full leads management interface

**Features**:

- Filterable lead list by status
- Export functionality (placeholder)
- Uses LeadList component

---

## ⚙️ Features & Functionality

### **Navigation System**

- **Desktop**: Hover-activated dropdowns
- **Mobile**: Collapsible menu with nested items
- **State Management**: React useState for menu states
- **Accessibility**: ARIA labels and keyboard navigation support

### **Image Handling**

- **Next.js Image Optimization**: Automatic image optimization
- **External Images**: Configured to load from eulermotors.com
- **Error Fallback**: Emoji placeholders if images fail
- **Responsive Sizing**: Different sizes for mobile/tablet/desktop

### **Form Handling**

- **Contact Form**: Basic HTML form (needs backend integration)
- **Lead Form**: Advanced form with project types, company selection
- **Validation**: Client-side validation (can be enhanced)

### **Responsive Design**

- **Breakpoints**:
  - Mobile: Default (< 768px)
  - Tablet: `md:` (≥ 768px)
  - Desktop: `lg:` (≥ 1024px)
- **Mobile-First**: All styles start mobile, enhanced for larger screens

---

## 🏗️ Code Architecture

### **Styling System**

- **Framework**: Tailwind CSS v4
- **Theme**: Custom color scheme with CSS variables
- **Design System**: shadcn/ui components
- **Colors**: Primary (blue), Secondary (green), Accent (orange)

### **State Management**

- **React Hooks**: useState, useEffect, useCallback
- **Client Components**: "use client" directive for interactivity
- **Server Components**: Default for static content

### **Type Safety**

- **TypeScript**: Full type checking
- **Interfaces**: Defined for all component props
- **Type Definitions**: Centralized in `types/index.ts`

### **API Routes** (`app/api/`)

- `/api/leads` - GET/POST leads
- `/api/leads/[id]` - Individual lead operations
- `/api/leads/[id]/call` - Phone call integration
- `/api/leads/[id]/whatsapp` - WhatsApp messaging
- `/api/companies` - Company data
- `/api/webhooks/exotel` - Exotel webhook handler

### **Database** (`lib/db.ts`)

- **Neon Database**: Serverless Postgres
- **Schema**: Leads, companies tables
- **Connection**: Serverless-compatible

### **External Integrations**

- **Exotel**: Phone call system
- **WhatsApp API**: Messaging integration
- **Vercel Analytics**: Usage tracking

---

## 🔧 Configuration Files

### **next.config.mjs**

```javascript
- TypeScript build errors ignored (for development)
- Images: Unoptimized mode
- Remote patterns: eulermotors.com allowed
```

### **package.json**

**Key Dependencies**:

- `next`: 16.0.10
- `react`: 19.2.0
- `embla-carousel-react`: Carousel functionality
- `lucide-react`: Icon library
- `@neondatabase/serverless`: Database client
- `tailwindcss`: Styling

---

## 🎨 Design Patterns

### **Component Composition**

- Small, reusable components
- Props-based configuration
- Consistent styling patterns

### **Data Flow**

- Props down, events up
- Server components for data fetching
- Client components for interactivity

### **Error Handling**

- Image error fallbacks
- Try-catch in async operations
- Loading states for data fetching

---

## 📝 Notes & Improvements

### **Current Limitations**

1. **Contact Form**: No backend integration yet
2. **Image URLs**: Using placeholder URLs from eulermotors.com (may need actual images)
3. **Product Detail Pages**: Individual product pages not yet created
4. **Form Validation**: Basic validation, can be enhanced with Zod

### **Recommended Enhancements**

1. Add individual product detail pages (`/products/euler-motors/[slug]`)
2. Implement form submission handlers
3. Add loading skeletons
4. Implement search functionality
5. Add product comparison feature
6. Enhance SEO with metadata
7. Add analytics tracking

---

## 🚀 Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Environment Variables**:

   - Database connection string
   - API keys for Exotel, WhatsApp

3. **Run Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📚 Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Euler Motors**: https://www.eulermotors.com

---

**Last Updated**: December 2025
**Version**: 1.0.0
