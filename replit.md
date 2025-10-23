# Kunal Rohilla - Cloud & DevOps Portfolio

## Overview
A modern, professional portfolio website for Kunal Rohilla showcasing Cloud/DevOps engineering expertise, AWS projects, certifications, and professional experience. Built with React, TypeScript, and Tailwind CSS with a focus on visual excellence and user experience.

## Purpose
- Showcase professional experience as a Cloud/DevOps Engineer
- Highlight AWS and Jenkins CI/CD projects with technical details
- Display certifications and achievements
- Provide easy contact information and social links
- Demonstrate technical skills in modern web development

## Project Architecture
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for client-side navigation
- **State Management**: React Query for data fetching (minimal backend)
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React for general icons, react-icons/si for brand logos
- **Theme**: Dark mode primary with cyan-blue accent colors for Cloud/DevOps theme

## Key Features
1. **Hero Section**: Full-viewport introduction with gradient text, animated background pattern, and social links
2. **About Section**: Professional bio with organized tech stack (Languages, Tools, Platforms)
3. **Work Experience**: Timeline design featuring VVDN Technologies internship details
4. **Projects Showcase**: 
   - Jenkins CI/CD Pipeline Project (with GitHub link)
   - AWS Cloud-Based Web Hosting
   - Glass-morphism card design with tech stack badges
5. **Achievements**: Cards highlighting AIR 2 ranking and hackathon volunteer work
6. **Education Timeline**: B.Tech CSE, Senior Secondary, and Secondary education details
7. **Certifications Grid**: AWS, Oracle, and Linux Foundation certifications
8. **Contact Section**: Email, phone, location with social platform links
9. **Responsive Design**: Mobile-first approach with smooth animations
10. **Dark/Light Mode Toggle**: Complete theme switching capability

## Recent Changes
- **2025-01-22**: Initial portfolio implementation
  - Created all section components (Hero, About, Experience, Projects, Achievements, Education, Certifications, Contact)
  - Implemented navigation with smooth scroll and active section highlighting
  - Added ThemeProvider for dark/light mode switching
  - Configured design tokens for Cloud/DevOps theme (cyan-blue primary colors)
  - Implemented glass-morphism effects on project cards
  - Added timeline designs for experience and education sections
  - Integrated all data from CV including GitHub project link

## User Preferences
- **Design Style**: Modern, professional, technical aesthetic inspired by Material Design and Linear
- **Color Scheme**: Dark mode primary with cyan-blue (#00A8E1) for Cloud/DevOps branding
- **Target Audience**: Recruiters, hiring managers, and potential collaborators in Cloud/DevOps space
- **Content Focus**: AWS expertise, CI/CD automation, cloud infrastructure

## Portfolio Content Details

### Personal Information
- **Name**: Kunal Rohilla
- **Email**: Kunalr.tech@gmail.com
- **Phone**: +91 9212294947
- **LinkedIn**: https://www.linkedin.com/in/kunal-rohilla-745545246/
- **GitHub**: https://github.com/Kunal061
- **Location**: Gurugram, India

### Technical Skills
- **Languages**: Python, Bash, HTML, CSS, Java, YAML, Groovy
- **Tools**: AWS Cloud Services, Docker, Apache2, Linux CLI, VS Code, Azure Portal, Jenkins
- **Platforms**: AWS, Linux (Ubuntu), Windows, GitHub, Docker Hub, Azure VMs

### Projects
1. **Jenkins CI/CD Pipeline**
   - GitHub: https://github.com/Kunal061/ci-cd-aws-static-hosting
   - Auto-deployment from GitHub to Apache2 on AWS EC2
   - Groovy-based pipeline scripting
   - Webhook integration for real-time updates

2. **AWS Cloud-Based Web Hosting**
   - EC2, S3, IAM implementation
   - Apache2 configuration
   - Load balancing and CloudWatch monitoring

### Work Experience
- **Cloud Intern** at VVDN Technologies Pvt Ltd (Jun 2024 - Jul 2024)
- AWS deployment setups (EC2, S3, IAM)
- Apache2 server configuration
- Auto scaling groups implementation

### Education
- **B.Tech CSE** - Dronacharya College of Engineering (2022-2026)
- **Senior Secondary (78%)** - Holy Cross School (2022)
- **Secondary (74%)** - Holy Cross School (2020)

### Certifications
- AWS Fundamentals
- Oracle Certified Foundations Associate
- Linux Foundation Certified System Administrator (LFS-101)

### Achievements
- AIR 2 in Aptitude Quiz (CodingNinja)
- Hackathon Volunteer (DEVOLYMPUS)

## Design System
Following design_guidelines.md with:
- Primary color: Cyan-blue (199 89% 48%)
- Accent color: Success green (142 71% 45%) for achievements/certifications
- Typography: Inter for body, JetBrains Mono for code
- Spacing: Consistent use of 8px grid system
- Components: shadcn/ui with custom styling
- Animations: Subtle hover effects, scroll-triggered fade-ins
- Responsive: Mobile-first with breakpoints at sm, md, lg

## Development Notes
- No backend persistence required (static portfolio)
- All content is hardcoded from CV data
- Smooth scroll navigation between sections
- Intersection Observer for active section highlighting
- Glass-morphism effects using backdrop-blur
- Timeline designs using absolute positioning
- Dark mode implemented with class-based theme switching
