# Design Guidelines: Modern Cloud/DevOps Portfolio

## Design Approach
**Hybrid Approach**: Material Design principles combined with inspiration from Linear and Vercel for a clean, technical aesthetic that resonates with the Cloud/DevOps industry.

**Design Philosophy**: Professional, technical, and content-forward. The design should communicate expertise and credibility while maintaining modern visual appeal.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 217 33% 6% (deep navy-black)
- Surface: 217 25% 10% (elevated panels)
- Primary: 199 89% 48% (cyan-blue for Cloud/DevOps theme)
- Secondary: 199 70% 35% (darker cyan)
- Accent: 142 71% 45% (success green for achievements/certifications)
- Text Primary: 210 20% 98%
- Text Secondary: 215 20% 65%

**Light Mode (Secondary)**
- Background: 0 0% 100%
- Surface: 210 20% 98%
- Primary: 199 89% 48%
- Secondary: 199 70% 35%
- Text Primary: 217 33% 10%
- Text Secondary: 215 15% 35%

### B. Typography

**Font Stack**
- Primary: Inter (via Google Fonts) - clean, technical, professional
- Monospace: JetBrains Mono - for code snippets, technical details

**Type Scale**
- Hero Heading: text-6xl font-bold (72px) - main name/title
- Section Headings: text-4xl font-bold (36px)
- Subsection Headings: text-2xl font-semibold (24px)
- Body: text-base (16px) - regular weight
- Small/Meta: text-sm (14px) - timestamps, labels

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 consistently
- Component padding: p-8 or p-12
- Section spacing: py-20 or py-24
- Card gaps: gap-8
- Element margins: mb-4, mb-8, mb-12

**Grid System**
- Max container width: max-w-7xl mx-auto
- Content sections: max-w-6xl
- Text content: max-w-4xl
- Responsive columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-lg bg-surface/80)
- Logo/name on left, navigation links center, CTA (Resume/Contact) right
- Smooth scroll behavior to sections
- Active section indicator in navigation

### Hero Section
**Layout**: Full-viewport height with centered content, NO background image
- Large name/title with gradient text effect (cyan to blue)
- Role/tagline: "Cloud & DevOps Engineer"
- Brief 2-line professional summary
- Primary CTA: "View Projects" (filled primary button)
- Secondary CTA: "Download Resume" (outline button)
- Social links: LinkedIn, GitHub, Email (icon buttons with hover states)
- Subtle animated cloud/network SVG background pattern (low opacity)

### About Section
- Two-column layout (text left, skills/tech stack right on desktop)
- Professional bio highlighting Cloud/DevOps focus
- Tech stack displayed as organized cards:
  - Languages (Python, Bash, HTML, CSS, Java)
  - Tools (AWS, Docker, Jenkins, Apache2, Linux CLI)
  - Platforms (AWS, Linux, GitHub, Docker Hub, Azure)
- Each skill category in its own card with icons

### Work Experience
- Timeline design with company logo placeholder (left) and content (right)
- Company name, location, duration clearly visible
- Bullet points for responsibilities with subtle chevron icons
- Card-based layout with hover elevation effect

### Projects Section (CRITICAL)
**Featured Projects Display**
1. **Cloud-Based Web Hosting using AWS**
   - Project card with subtle border and hover glow effect
   - Tech stack badges: AWS, EC2, S3, IAM, Apache2, CloudWatch
   - Description with key features as bullet points
   - No demo link (not provided)

2. **Jenkins CI/CD Pipeline Project**
   - Project card matching design
   - Tech stack badges: Jenkins, Groovy, AWS, EC2, GitHub, Docker
   - GitHub link button with icon: "github.com/Kunal061/ci-cd-aws-static-hosting"
   - Key features with technical details

**Card Design**: Glass-morphism effect with subtle backdrop blur, border, and shadow

### Achievements
- Two-column grid on desktop, stack on mobile
- Each achievement as highlighted card with trophy/star icon
- "AIR 2 in Aptitude Quiz - CodingNinja" with link
- "Hackathon Volunteer - DEVOLYMPUS" with link
- Accent color borders for emphasis

### Education
- Reverse chronological timeline
- Card for each institution with:
  - Degree/Grade name and specialization
  - Institution name and location
  - Years and percentage/GPA
- Degree cards with subtle elevation

### Certifications
- Three-column grid (stack on mobile)
- Each certification as clickable card linking to credential:
  - AWS Fundamentals
  - Oracle Certified Foundations Associate
  - Linux Foundation Certified System Administrator (LFS-101)
- Certificate icon, title, issuing organization
- "View Credential" link with external icon
- Success green accent on hover

### Contact Section
- Clean, centered layout with max-w-2xl
- Email: Kunalr.tech@gmail.com (clickable mailto link)
- Phone: +91 9212294947 (clickable tel link)
- Location: Gurugram, India
- Social links repeated (LinkedIn, GitHub)
- Optional contact form: Name, Email, Message fields with primary CTA button
- Form with subtle border and matching surface background

### Footer
- Simple, centered
- Copyright with current year
- Social links
- "Built with Next.js" attribution
- Background matches surface color

---

## Animations & Interactions

**Minimize animations** - use sparingly:
- Fade-in on scroll for sections (intersection observer)
- Hover scale (scale-105) on project cards and certification cards
- Smooth color transitions on interactive elements
- NO complex page transitions or excessive motion

**Button States**
- Primary buttons: filled with primary color, white text, hover brightness increase
- Outline buttons on dark backgrounds: border with primary color, backdrop-blur-md, NO hover interactions (buttons handle their own states)
- All buttons: rounded-lg, px-6 py-3

---

## Images

**No hero background image** - use SVG pattern or gradient background instead
**No project screenshots** - focus on text descriptions and tech stacks
**Profile photo**: Optional placeholder in About section (150x150px rounded-full)
**Company logos**: Optional small logos for VVDN Technologies in experience section
**Certification badges**: Optional small icons for certification providers

---

## Responsive Behavior

- Mobile-first approach
- Hero: Stack elements vertically, reduce font sizes
- Skills: Single column on mobile, 2-3 columns on desktop
- Projects: Single column on mobile, 2 columns on desktop
- Navigation: Hamburger menu on mobile with slide-in panel
- Consistent padding reduction on mobile (p-4 instead of p-8)

---

## SEO & Meta

- Title: "Kunal Rohilla - Cloud & DevOps Engineer"
- Description: "Portfolio showcasing Cloud computing, AWS, Docker, and Jenkins expertise. Experienced in CI/CD pipelines and cloud infrastructure."
- OG tags for LinkedIn sharing
- Structured data for professional profile

This design prioritizes clarity, professionalism, and technical credibility while maintaining modern visual appeal suitable for a Cloud/DevOps professional's portfolio.