# Mohd Talish Ansari — Portfolio

A modern, SEO-friendly portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🌗 **Dark / Light mode** — persists across sessions
- 📧 **Contact form with backend** — powered by Nodemailer (sends real emails + auto-reply)
- 📄 **Resume attachment** — hosted as `/public/resume.pdf`
- 🔍 **SEO Optimized** — meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- 📱 **Fully responsive** — works on all screen sizes
- ⚡ **Fast** — Next.js App Router with static generation
- 🎨 **Polished UI** — Playfair Display + DM Sans, animated canvas background

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # SEO robots.txt
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── api/
│       └── contact/
│           └── route.ts    # ← Backend: Contact form API (Nodemailer)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ContactForm.tsx     # Contact form (client component)
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── CertificationsSection.tsx
└── public/
    └── resume.pdf          # ← Add your resume PDF here!
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your resume PDF
Copy your resume to `public/resume.pdf`

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=talishtarik1234@gmail.com
SMTP_PASS=your-gmail-app-password
EMAIL_TO=talishtarik1234@gmail.com
```

> **Gmail App Password**: Google Account → Security → 2-Step Verification → App passwords

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm start
```

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🔧 Customization

- **Update links**: Edit `components/Navbar.tsx` and `components/Footer.tsx`  
- **Add/edit projects**: Edit `components/sections/ProjectsSection.tsx`
- **Update skills**: Edit `components/sections/SkillsSection.tsx`
- **Change domain**: Update all `https://mohd-talish-ansari.vercel.app/` references in `app/layout.tsx`, `app/sitemap.ts`
- **OpenGraph image**: Add an image at `public/og-image.png` (1200×630px)

## 📦 Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Nodemailer** — Email sending backend
- **Google Fonts** — Playfair Display, DM Sans, JetBrains Mono
