# Sai Harsha Chaluvadi — Portfolio (React)

A fully converted React portfolio from the original HTML design.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
harsha-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Icons.jsx       # SVG icon components
│   │   ├── Nav.jsx         # Sticky nav + mobile drawer
│   │   ├── Hero.jsx        # Hero section with animated badges
│   │   ├── About.jsx       # About + animated SVG + stats
│   │   ├── Skills.jsx      # Skills grid
│   │   ├── Projects.jsx    # Project cards
│   │   ├── Experience.jsx  # Timeline + education
│   │   ├── Achievements.jsx# Achievement cards
│   │   ├── Contact.jsx     # Contact form + socials
│   │   └── Footer.jsx      # Footer
│   ├── data.js             # All content data (easy to update)
│   ├── hooks.js            # Custom hooks (useScrolled, useFadeIn)
│   ├── styles.css          # All CSS
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 📸 Adding Your Photo

Replace the `src` in `Hero.jsx`:
```jsx
<img src={require("../assets/photo.jpg")} alt="..." className="hero-photo" />
```
Then place your image at `src/assets/photo.jpg`.

## ✏️ Updating Content

All content is centralized in `src/data.js`:
- Skills, projects, experience, achievements — all editable there.
- Contact details are in `Contact.jsx`.

## 🌐 Deploy

```bash
# Vercel
npx vercel

# Netlify
npm run build && netlify deploy --prod --dir=build
```
