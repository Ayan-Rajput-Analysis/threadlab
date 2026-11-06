# 🧵 THREADLAB // Digital Haute Couture & Generative Fashion Atelier

> **Interactive 3D & Cinematic E-Commerce Showroom**  
> Engineered with Next.js 16 (App Router), React 19, Tailwind CSS v4, GSAP Animations, Lenis Smooth Scroll, and Zustand Reactive Store.

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.2-20232a?style=for-the-badge&logo=react&logoColor=61dafb" alt="React">
  <img src="https://img.shields.io/badge/GSAP-3.15-88ce02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP">
  <img src="https://img.shields.io/badge/Lenis-Smooth%20Scroll-black?style=for-the-badge" alt="Lenis">
  <img src="https://img.shields.io/badge/Tailwind-CSS%20v4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

---

## 📌 Executive Summary

**ThreadLab** is a high-concept digital fashion showroom and generative e-commerce platform exploring the convergence of haute couture, computational textile draping, and editorial typography. Designed to deliver an immersive 60fps cinematic shopping experience, it combines physics-inspired layout choreography with zero-friction micro-interactions.

---

## 🏛️ Architecture & Component Hierarchy

```
threadlab/
├── 📁 src/
│   ├── 📁 app/                    # Next.js 16 App Router (Layouts, Server Components, Metadata)
│   │   ├── layout.tsx             # Root layout with font optimization & theme providers
│   │   ├── page.tsx               # Cinematic editorial landing page
│   │   └── template.tsx           # Route transition choreographer
│   │
│   ├── 📁 components/
│   │   ├── 📁 layout/             # Core spatial navigation
│   │   │   ├── Navbar.tsx         # Sticky glassmorphic navigation bar with reactive cart counter
│   │   │   ├── SmoothScroll.tsx   # Lenis inertial scrolling engine
│   │   │   └── ClientLayout.tsx   # Client hydration boundary
│   │   │
│   │   ├── 📁 shared/             # Interactive editorial modules
│   │   │   ├── AnimatedText.tsx   # GSAP split-type heading reveals
│   │   │   ├── CartDrawer.tsx     # Slide-over cart powered by Zustand global state
│   │   │   ├── FadeIn.tsx         # Intersection-observer motion wrappers
│   │   │   ├── ShopGallery.tsx    # Curated product catalog grid with dynamic filter tags
│   │   │   └── VideoSection.tsx   # High-definition video canvas container
│   │   │
│   │   └── 📁 ui/                 # Micro-components & interactive controls
│   │       ├── ShopTriggerButton.tsx
│   │       ├── UiverseButton.tsx
│   │       └── UiverseCard.tsx
│   │
│   ├── 📁 hooks/                  # Custom React hooks (useReducedMotion, useWindowSize)
│   ├── 📁 lib/                    # Constants, fonts, SEO metadata, and Zustand store
│   └── 📁 styles/                 # Tailwind CSS v4 design tokens and keyframe rules
```

---

## ✨ Key Features & Engineering Highlights

1. **Lenis Inertial Smooth Scrolling**: Ultra-responsive momentum scrolling decoupled from native layout blocking, synced seamlessly with GSAP scroll triggers.
2. **Kinetic Typography & Stagger Animations**: Split-text word and character entrance choreography using GSAP timelines for dramatic editorial reveals.
3. **Zustand Reactive State Management**: Global cart state, item quantities, and drawer animations with zero unnecessary component re-renders.
4. **Tailwind CSS v4 Engine**: Built on the next-generation LightningCSS engine for ultra-fast compile times, native CSS variables, and fluid typography.
5. **Accessibility (WCAG 2.1 AA)**: Built-in `prefers-reduced-motion` detection, semantic landmarks, full keyboard trap control on the modal cart drawer, and high-contrast color ratios.

---

## 🚀 Quickstart & Development

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ayan-Rajput-Analysis/threadlab.git
cd threadlab

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

### Production Build

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 👨‍💻 Author

**Ayan Rajput**  
*AI & Deep Learning Engineer | Computer Vision Specialist | Creative 3D Web Developer*  
- **GitHub**: [@Ayan-Rajput-Analysis](https://github.com/Ayan-Rajput-Analysis)  
- **LinkedIn**: [Ayan Rajput](https://www.linkedin.com/in/ayan-rajput-8781a7397/)  
- **Email**: [ayanrajput779900@gmail.com](mailto:ayanrajput779900@gmail.com)

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
