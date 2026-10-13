# Nikhil Bharadwaj - Portfolio

Modern personal portfolio engineered with **Angular 21**, **TypeScript**, and **SCSS**.

🚀 **Live Site**: [https://nikhilbharadwaj500.github.io](https://nikhilbharadwaj500.github.io)

---

## 🌟 Highlights & Architecture

- **Modern Angular 21 Architecture**: Standalone components, reactive signals, typed models, clean separation of concerns.
- **Dark-First Tech Aesthetic**: Glassmorphic frosted cards, radiant mesh glows, smooth scrolling, and light/dark theme toggle with persistent storage.
- **Dynamic Typing Hero**: Typewriter effect cycling through core engineering specializations, quick stats counter, and direct social links.
- **Interactive Experience Timeline**: Career milestones at Digit Insurance, Beckman Coulter, and Xon Labs with impact bullets, award badges, and tech stack tags.
- **Categorized Skills Matrix**: Filterable skills across Frontend, Backend, Databases, Cloud & APM, and Creative pursuits.
- **Engineered Projects Showcase**: Category filters (Enterprise, AI & ML, Full-Stack, Systems) with peer-reviewed research paper access.
- **Honors & Certifications**: Spotlights for Digit Insurance *Tech Titan Award*, IJSART Published Research Paper, and Udemy Credentials.
- **Automated CI/CD**: Seamless GitHub Actions workflow deploying to GitHub Pages on every push to `main`.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v20+ recommended)
- npm (v10+)
- Angular CLI: `npm install -g @angular/cli`

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/nikhilbharadwaj500/nikhilbharadwaj500.github.io.git
cd nikhilbharadwaj500.github.io

# Install dependencies
npm install

# Start development server
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

### Build
```bash
# Production build
npm run build
```
Output will be generated in `dist/portfolio/browser`.

### Tests
```bash
npm test
```

---

## 📝 Updating Your Content

All personal content, experience history, skills, achievements, and project items are modularly decoupled into:
- [src/app/data/portfolio.data.ts](src/app/data/portfolio.data.ts)
- [src/app/models/portfolio.model.ts](src/app/models/portfolio.model.ts)

Whenever you have a new role, project, or certificate to add, simply edit `src/app/data/portfolio.data.ts`!

---

## 🚀 GitHub Pages Deployment

The automated workflow in `.github/workflows/deploy.yml` triggers on any push to `main`:
1. Checks out repository and installs dependencies.
2. Builds the optimized Angular application.
3. Automatically deploys to GitHub Pages via official GitHub Actions.

> **Note**: In your repository settings on GitHub, under **Settings > Pages > Build and deployment**, ensure the **Source** is set to **GitHub Actions**.
