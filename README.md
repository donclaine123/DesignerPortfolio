# Sample UI/UX & Design Engineering Portfolio

A modern, tactile, and highly interactive **sample UI portfolio** created to showcase agency-grade digital product design, design system architecture, and advanced frontend motion engineering.

This project serves as a practical demonstration of how to build an award-winning personal brand and design engineering portfolio that avoids generic templates and AI clichés.

---

## ✨ Key Features & Design Architecture

### 1. 🎨 Curated Design & Typography System
*   **Distinct Typographic Pairing:** Combines **Bebas Neue** (monumental display), **Alex Brush** (expressive calligraphic cursive), and **Plus Jakarta Sans** (clean geometric sans) with zero mixed-family clashes.
*   **Harmonious Color Palette:** Minimalist warm slate base (`#9cb1bb`, `#FAFAF8`) contrasted with warm terracotta accents (`#cf5338`, `#C85A32`) and deep carbon tones (`#121316`).
*   **Tactile Neobrutalist Touches:** Layered double-bezel shells, subtle paper noise overlays, and floating sticker badges.

### 2. ⚡ Advanced Motion & Parallax Depth
*   **5-Plane Optical Hero Depth:** Multi-layered scroll parallax separating ambient glow, colossal backdrop text, subject portrait cutout, foreground typography, and tactile badges.
*   **Floating Mockup Parallax:** Inner device screens inside project bento cards gently float along the scroll axis as they enter the viewport.
*   **Lenis Smooth Momentum:** Integrated virtual scroll interpolation providing silky, 60–120fps hardware-accelerated momentum.
*   **Continuous & Re-Triggerable Animations:** Entrance animations re-trigger smoothly on scroll (`once: false`) while parallax transforms respond bidirectionally in real time.
*   **Magnetic Cursor Pull:** Physics-based magnetic attraction on primary navigation, explore links, and contact CTAs.

### 3. 📂 Scalable Case Studies (Strategy 1 Architecture)
*   **3 Flagship Bento Masterpieces:** High-impact showcases for top case studies featuring tactile device frames, milestone cards, and verified outcome metrics.
*   **Extended Project Index Archive:** A clean, scannable table for projects 4, 5, 6+ featuring **cursor-tracking micro-preview cards** that follow the mouse on hover.
*   **Interactive Deep-Dive Drawer:** A sliding case study drawer complete with verified outcomes, challenge/solution analysis, design token hex copy utilities, and scroll isolation (`data-lenis-prevent`).

### 4. 📱 Mobile-First Editorial Layout
*   **Editorial Asymmetric Offset:** Solves mobile collision and dead space by artfully framing the full-scale portrait cutout on the right while anchoring the headline in the left column—styled like a high-fashion magazine cover.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
*   **UI Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Motion & Physics:** [Framer Motion](https://www.framer.com/motion/)
*   **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── globals.css          # Design tokens, @theme font definitions, custom scrollbars
│   ├── layout.tsx           # Font loading (Alex Brush, Jakarta, Caveat, Playfair), SEO
│   └── page.tsx             # Master page assembling all portfolio sections
├── components/
│   ├── Navbar.tsx           # Floating responsive navigation with magnetic active pills
│   ├── Hero.tsx             # 5-plane optical parallax hero with cursive typography
│   ├── Projects.tsx         # Flagship bento cards + Extended Archive with cursor preview
│   ├── CaseStudyDrawer.tsx  # Deep-dive sliding drawer with design tokens & metrics
│   ├── Approach.tsx         # 3-phase system architecture cards with double bezels
│   ├── About.tsx            # Philosophy statement and interactive capabilities bento
│   ├── Contact.tsx          # Direct inquiries with magnetic email container & copy tool
│   ├── Magnetic.tsx         # Reusable spring-physics magnetic cursor pull wrapper
│   └── LenisProvider.tsx    # Smooth scrolling provider
```

---

## 💻 Getting Started

### Prerequisites
*   Node.js (v18.17 or higher recommended)
*   npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/DesignerPortfolio.git
   cd DesignerPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View locally:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📝 Customization

### Adding New Case Studies
All case study data is managed inside `src/components/Projects.tsx`:
1. **Add detailed content** to the `caseStudies` object (for the deep-dive drawer).
2. **Add an entry** to the `archiveProjects` array to automatically generate a new row with hover preview in the Extended Project Index.

---

## 📄 License

This sample portfolio is open-source under the [MIT License](LICENSE). Feel free to use it as inspiration or a foundation for your own portfolio.