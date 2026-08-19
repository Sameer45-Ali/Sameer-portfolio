# Sameer Ali — AI Engineer & Model Evaluator Portfolio

A modern, high-performance, animated portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, featuring an interactive AI Evaluation Sandbox, dynamic project architecture deep dives, neural network canvas background, and full mobile responsiveness.

---

## 🚀 Live Demo & Quick Deploy to Vercel

### Method 1: Automatic Deployment with GitHub + Vercel (Recommended)

1. **Initialize Git & Push to GitHub**:
   Open PowerShell in this project folder (`C:\Users\samee\.gemini\antigravity\scratch\sameer-ai-portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sameer Ali AI Portfolio"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `sameer-portfolio` (or any name you prefer)
   - Set to **Public**
   - Click **Create repository**

3. **Link and Push your code**:
   ```bash
   git remote add origin https://github.com/Sameer45-Ali/sameer-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
   - Click **"Add New..."** -> **"Project"**.
   - Click **"Import"** next to your `sameer-portfolio` repository.
   - Leave all default settings (Framework preset: Next.js) and click **"Deploy"**.
   - 🎉 **Your portfolio will be live worldwide in under 60 seconds with a free `.vercel.app` URL and free SSL!**

---

### Method 2: Instant Deploy via Vercel CLI

1. Run this single command inside the project directory:
   ```bash
   npx vercel
   ```
2. Follow the quick terminal prompts (press Enter for defaults).
3. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

## 🛠️ Local Development

To run the portfolio locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at:
# http://localhost:3000
```

To create a production build and test it:
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
sameer-ai-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Metadata, SEO tags & global styling
│   │   ├── page.tsx           # Main single-page portfolio layout
│   │   └── globals.css        # Tailwind styles & glassmorphic neon effects
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive glass navbar with active section indicator
│   │   ├── Hero.tsx           # High-impact animated headline & availability badge
│   │   ├── ParticleBackground.tsx # Interactive canvas neural synapse background
│   │   ├── AiEvalTerminal.tsx # Recruiter interactive sandbox simulating model evals
│   │   ├── Projects.tsx       # Filterable showcase for all 4 flagship AI/ML projects
│   │   ├── Skills.tsx         # Categorized engineering & AI skills matrix
│   │   ├── Certifications.tsx # Google, DeepLearning.AI, IBM credentials
│   │   ├── ExperienceEdu.tsx  # Sukkur IBA University education section
│   │   ├── Contact.tsx        # Direct messaging, copy email/phone & socials
│   │   └── Footer.tsx         # Minimalist status & footer
│   └── data/
│       └── portfolioData.ts   # Centralized data file for easy updates
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📝 Customizing Your Information

All your personal information, projects, skills, and certifications are centralized in:
`src/data/portfolioData.ts`

Whenever you want to add a new project, update metrics, or add new certifications, just edit that one file!
