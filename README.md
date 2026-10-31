# Ayesha Tahir — Full Stack Developer & AI Chatbot Portfolio

A modern, high-performance developer portfolio website engineered with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **ReportLab PDF generation**. Specifically tailored for freelance clients on Fiverr, recruiters, and technical collaborators.

---

## 🌟 Key Features

- **Hero & Personal Branding**: Hero section featuring verified title (*Full Stack Developer | AI Chatbot Developer*), interactive tech avatar, dynamic role indicators, and direct Fiverr/LinkedIn links.
- **My Services (7 Cards)**: Website Development, Full Stack Development, AI Chatbot Development, React Native App Development, UI/UX Designing, Python Development, and Technical Documentation.
- **Curated Projects (11 Total)**:
  - **6 Concept/Demo Projects**: Modern E-commerce, AI Customer Support Chatbot, Portfolio, Taskflow Kanban, React Native Mobile App, Python Automation Pipeline.
  - **5 Real Full-Stack Systems**: Ledger Management System, HR Management System, School Management System, Commercial E-commerce Website, and AI Chatbot developed during professional tenure at **Codqor Technologies**.
  - Interactive architecture modal with deep technical specifications and transparency disclaimers.
- **ATS-Optimized CV & PDF Generator**:
  - Automatically compiles and serves `Ayesha-Tahir-CV.pdf` directly from `public/`.
  - Built with Python `ReportLab` using strict ATS-friendly typography, 2-page constraint, verified Codqor experience, Gift University BS Software Engineering, and 90% NSCT test score.
  - Regenerate anytime with `python scripts/generate_cv.py`.
- **Interactive Capabilities**:
  - Smooth scrolling navigation with active section tracker and mobile drawer.
  - Functional Dark / Light mode toggle with `localStorage` persistence.
  - Festive celebratory micro-animations (`canvas-confetti`) on CV download and form submission.
  - One-click copy for email and phone number.
  - Robust Contact Form with server validation, local logging, and optional Resend/Formspree integration.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Glassmorphism
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: `canvas-confetti`
- **PDF Engine**: Python 3 `reportlab`

---

## 🚀 Running Locally

### 1. Prerequisites
- **Node.js** (v18.17+ or v20+)
- **Python** (v3.8+ for PDF generator script)

### 2. Development Server
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Verify production compilation and static optimization:
```bash
npm run build
npm run start
```

---

## 📄 Managing Your CV & Details

### How to Regenerate the Downloadable PDF:
The script `scripts/generate_cv.py` creates both `public/Ayesha-Tahir-CV.pdf` and `public/resume/Ayesha-Tahir-CV.pdf`.
1. Open [scripts/generate_cv.py](scripts/generate_cv.py) and update any information.
2. Run in terminal:
```bash
python scripts/generate_cv.py
```
3. The "Download CV" button on the website will automatically serve the newly generated file.

### How to Add or Change Your Photo:
1. Place your headshot in `public/images/` as `ayesha-photo.jpg` (or replace `public/images/avatar.svg`).
2. The portfolio hero section includes built-in hover guides to easily showcase your authentic photograph.

### How to Edit Projects, Services, or Contact Info:
All data is centralized in [data/portfolioData.ts](data/portfolioData.ts). You can update titles, descriptions, links, or add new projects without modifying React components.

---

## ✉️ Contact Form Configuration

By default, message submissions are validated and logged to the server terminal, with a direct `Send via Email App` mailto fallback.

To enable automated forwarding directly to your email inbox:
1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
2. Add your **Resend** API key:
```env
RESEND_API_KEY=re_your_api_key_here
```
*(Or set `FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id`)*

---

## 🌐 Verified Information Summary

| Field | Detail |
| :--- | :--- |
| **Name** | Ayesha Tahir |
| **Title** | Full Stack Developer & AI Chatbot Developer |
| **Location** | Pakistan |
| **Email** | ayeshatahirshehbaz@gmail.com |
| **Phone** | 03286140499 |
| **LinkedIn** | [linkedin.com/in/ayesha-tahir-918448383/](https://www.linkedin.com/in/ayesha-tahir-918448383/) |
| **Fiverr** | [fiverr.com/ayesha_aidev](https://www.fiverr.com/ayesha_aidev) |
| **Company Experience** | Codqor Technologies (Full Stack Developer, 2025–2026, 1 Year) |
| **Education** | BS Software Engineering, Gift University, Gujranwala (2026) |
| **Achievement** | National Skill Competency Test (NSCT) — 90% (HEC) |
