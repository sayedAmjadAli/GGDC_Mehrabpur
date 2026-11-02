# GGDC Mehrabpur – College Website

Modern React website for **Government Girls Degree College Mehrabpur**.

Design and structure inspired by a similar government college website.

## Features

- Multi-page website (Home, About, Admissions, Academics, Fees, Notices, Staff, Facilities, Events, Contact)
- Fully responsive (mobile-friendly)
- Clean green + orange theme
- Contact form
- Easy to update content and images

## How to run locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder. Deploy this folder to **Vercel**, **Netlify**, or **Cloudflare Pages**.

## How to update images & logo

1. Put your images inside the `public/images/` folder.
2. Replace placeholders in the code with your real images:

```jsx
<img src="/images/logo.png" alt="GGDC Mehrabpur Logo" className="w-12 h-12" />
<img src="/images/hero.jpg" alt="Campus" />
```

Recommended files:
- `public/images/logo.png`
- `public/images/hero.jpg`
- `public/images/principal.jpg`
- Facility / event photos

## Deployment (recommended: Vercel)

1. Push this project to a GitHub repository.
2. Go to vercel.com → New Project → Import the repo.
3. Click Deploy.

---

Built with React + Vite + Tailwind CSS + React Router.
