# 🚀 Developer Portfolio

A single-page developer portfolio built with **React** + **Vite** and deployed to **GitHub Pages**.

## ✨ Features

- Single-page layout with smooth-scroll navigation
- Sections: Hero, About, Skills, Companies, Experience, Contact
- Filterable project grid
- Data-driven content (edit one file to update everything)
- Responsive, mobile-first design with dark theme
- Framer Motion scroll animations

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- GitHub Actions for CI/CD deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+) and npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173`

### Build for production

```bash
npm run build
npm run preview
```

## ✏️ Customizing Your Portfolio

All content lives in **`src/data/portfolioData.js`**. Edit this single file to update:

- Your name, role, tagline & photo
- About text & highlight tags
- Skills & categories
- Companies (title, description, tech, links)
- Experience timeline
- Contact info & social links

## 🎨 Design Customization

Colors and fonts are controlled via CSS variables at the top of **`src/index.css`**:

- `--bg` / `--surface` — background colors
- `--text-primary` / `--text-muted` — text colors
- `--accent-cyan` / `--accent-violet` — accent colors
- `--font-heading` / `--font-body` — typography (Google Fonts)

## 🌐 Deploying to GitHub Pages

1. **Push this project to a GitHub repo.**

2. **Configure the base path** in `vite.config.js`:
   - If your repo is named `portfolio` → set `base: '/portfolio/'`
   - If using a user/org page (`<your-username>.github.io`) → set `base: '/'`

3. **Enable GitHub Pages:**
   - Go to repo **Settings → Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**
   - Save. The workflow in `.github/workflows/deploy.yml` will handle the rest.

4. Every push to `main` automatically builds and deploys. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`
   - or `https://<your-username>.github.io/` for user pages

## 📂 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml   # CI/CD deployment
├── src/
│   ├── components/                # UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Companies.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js       # 👈 edit this file
│   ├── assets/                    # your images
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                        # static assets (favicon, resume)
├── index.html
├── vite.config.js
└── package.json
```

## 📄 License

MIT
