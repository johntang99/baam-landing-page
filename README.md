# 🥢 Golden Dragon Restaurant

**Authentic Chinese Cuisine**

A complete, professional Chinese restaurant website built with Next.js, showcasing the flexible BAAM Studio restaurant template system.

## 🎨 Theme

  --primary: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;

  --secondary: #7c3aed;
  --secondary-dark: #6d28d9;
  --secondary-50: #f5f3ff;

  --success: #10b981;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
  --text-dark: #111827;
  --text-gray: #6b7280;

  --text-display: 3rem;
  --text-heading: 2.25rem;
  --text-subheading: 1.25rem;
  --text-body: 1rem;
  --text-small: 0.875rem;

## 🚀 Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3001
```

## 📦 Built With

- Next.js 16
- TypeScript
- Tailwind CSS
- Unsplash Photos
- BAAM Studio Template System

## 🍜 Features

- 70+ Chinese dishes with dual language (English/Chinese)
- Chef's specials and house favorites  
- Tea menu section
- Online reservations
- Photo gallery
- Customer reviews
- Blog with recipes

**Proof of concept for flexible restaurant template architecture.**


lsof -ti:3004 | xargs kill -9
rm -rf .next
npm run dev

npm install
npm run build

git add .
git commit -m "Update: describe your changes"
git push

curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_q0GoDvZJAFAnwltOHmjsvQLj53aw/VDEvj0yDDg