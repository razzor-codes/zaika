# 🍛 Zaika - Restaurant Website

A modern, eye-catching React website for Zaika restaurant featuring an interactive menu, dish gallery, and GitHub Pages deployment ready.

## Features

✨ **Modern Design**
- Responsive layout that works on all devices
- Smooth animations and transitions
- Professional color scheme inspired by Indian cuisine
- Mobile-first approach

🍽️ **Showcase Your Menu**
- Dish gallery with image display
- Interactive modal for dish details
- Multiple menu categories
- Price display for all items

📱 **Fully Responsive**
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Touch-friendly buttons

🚀 **Easy Deployment**
- Ready for GitHub Pages
- One-command build and deploy
- Automatic routing configuration

## Project Structure

```
zaika-restaurant/
├── public/
│   └── images/
│       ├── dishes/          # Add your dish images here
│       └── menu/            # Add your menu images here
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── DishGallery.tsx  # Dish showcase
│   │   ├── Menu.tsx         # Menu section
│   │   └── Footer.tsx       # Footer with contact info
│   ├── styles/
│   │   ├── globals.css      # Global styles
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── DishGallery.css
│   │   ├── Menu.css
│   │   └── Footer.css
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Zaika-Restaurant
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:5173/`

### Adding Your Images

1. **For Dishes:**
   - Add dish images to `public/images/dishes/`
   - Update the image paths in `src/components/DishGallery.tsx`

2. **For Menu:**
   - Add menu images to `public/images/menu/`
   - Reference them as needed

### Customization

#### Update Restaurant Info
Edit `src/components/Footer.tsx` to add:
- Restaurant address
- Phone number
- Email
- Social media links
- Hours of operation

#### Customize Colors
Edit `src/styles/globals.css` to change the CSS variables:
```css
:root {
  --primary-color: #d4773a;      /* Main orange color */
  --secondary-color: #1a1a1a;    /* Dark background */
  --accent-color: #f4a460;       /* Light orange accent */
  --text-light: #ffffff;          /* White text */
  --text-dark: #1a1a1a;           /* Dark text */
}
```

#### Update Menu Items
Edit `src/components/Menu.tsx` to add your menu categories and items.

#### Update Dishes
Edit `src/components/DishGallery.tsx` to add your signature dishes with descriptions and prices.

## Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and create a new repository named `zaika-restaurant`
2. Do NOT initialize with README (we have one already)

### Step 2: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit: Zaika restaurant website"
git branch -M main
git remote add origin https://github.com/[YOUR_USERNAME]/zaika-restaurant.git
git push -u origin main
```

### Step 3: Update Homepage URL

Update the `homepage` field in `package.json`:
```json
"homepage": "https://[YOUR_USERNAME].github.io/zaika-restaurant"
```

Replace `[YOUR_USERNAME]` with your actual GitHub username.

### Step 4: Deploy

Build the project:
```bash
npm run build
```

Then, initialize git subtree for gh-pages deployment:

```bash
git subtree push --prefix dist origin gh-pages
```

If the gh-pages branch doesn't exist, create it first:
```bash
git branch -D gh-pages
git subtree push --prefix dist origin gh-pages
```

### Step 5: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select `gh-pages` branch as the source
4. Save

Your website will be live at: `https://[YOUR_USERNAME].github.io/zaika-restaurant`

## Automated Deployment with GitHub Actions

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Optimized images and assets
- Fast loading with Vite
- Minimal dependencies
- CSS-based animations (GPU accelerated)

## License

Open source project for your restaurant.

## Support

For questions or issues, check the [Vite Documentation](https://vitejs.dev/) and [React Documentation](https://react.dev/).

---

**Made with ❤️ for Zaika Restaurant**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
