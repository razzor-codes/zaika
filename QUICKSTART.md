# 🚀 Zaika Restaurant - Quick Start Guide

Welcome to your Zaika restaurant website! Follow these steps to customize it with your own content.

## 1. Add Your Dish Images

1. Open the `public/images/dishes/` folder
2. Add your dish photos (recommended sizes: 600x400px)
3. Update `src/components/DishGallery.tsx` with your dish names and image filenames:

```typescript
const dishes: Dish[] = [
  {
    id: 1,
    name: 'Your Dish Name',
    description: 'Dish description here',
    image: '/images/dishes/your-image.jpg',
    price: '$XX.XX'
  },
  // ... more dishes
];
```

## 2. Update Your Restaurant Info

Edit `src/components/Footer.tsx` to add:
- 📍 Restaurant address
- 📞 Phone number  
- ✉️ Email address
- 🌐 Social media links
- ⏰ Hours of operation

## 3. Customize Your Menu

Edit `src/components/Menu.tsx` to update:
- Menu categories (Appetizers, Mains, Vegetarian, Breads, etc.)
- Menu items with descriptions and prices

Example:
```typescript
{
  category: 'appetizers',
  items: [
    { name: 'Samosa', description: 'Your description', price: '$4.99' },
    { name: 'Pakora', description: 'Your description', price: '$5.99' },
  ]
}
```

## 4. Customize Colors

Edit `src/styles/globals.css` to change the color scheme:

```css
:root {
  --primary-color: #d4773a;      /* Main color */
  --secondary-color: #1a1a1a;    /* Dark background */
  --accent-color: #f4a460;       /* Accent color */
  --text-light: #ffffff;          /* Light text */
  --text-dark: #1a1a1a;           /* Dark text */
  --background-light: #f8f8f8;    /* Light background */
}
```

## 5. Update Hero Section

Edit `src/components/Hero.tsx` to customize:
- Welcome message
- Tagline
- Call-to-action button text

## 6. Test Locally

Run the development server to see your changes in real-time:

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

## 7. Deploy to GitHub

### First Time Setup:

1. Create a GitHub repository: `zaika-restaurant`

2. Update `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/zaika-restaurant"
```

3. Initialize and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Zaika restaurant website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zaika-restaurant.git
git push -u origin main
```

4. Deploy to GitHub Pages:
```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

5. Go to GitHub repository Settings → Pages → Select `gh-pages` branch

Your site will be live at: `https://YOUR_USERNAME.github.io/zaika-restaurant`

### Subsequent Deployments:

After making changes, just push to main and the GitHub Actions workflow will automatically build and deploy:

```bash
git add .
git commit -m "Update menu items"
git push
```

## 📁 File Structure Quick Reference

```
src/
├── components/
│   ├── Header.tsx        ← Navigation, add menu items here
│   ├── Hero.tsx          ← Welcome message, tagline
│   ├── DishGallery.tsx   ← Add your dishes here
│   ├── Menu.tsx          ← Menu categories and items
│   └── Footer.tsx        ← Contact info, hours, links
└── styles/
    ├── globals.css       ← Global colors and fonts
    ├── Header.css        ← Header styling
    ├── Hero.css          ← Hero section styling
    ├── DishGallery.css   ← Gallery styling
    ├── Menu.css          ← Menu styling
    └── Footer.css        ← Footer styling

public/
└── images/
    ├── dishes/           ← Add your dish photos here
    └── menu/             ← Add menu images here
```

## 🎨 Recommended Image Specs

**Dish Images:**
- Size: 600x400px (3:2 ratio)
- Format: JPG or PNG
- Quality: High resolution for crisp display

**Menu Images:**
- Size: 1200x800px or 800x600px
- Format: JPG or PNG
- Quality: PDF for actual menus

## 💡 Tips

- Use descriptive image filenames (e.g., `butter-chicken.jpg`)
- Compress images before uploading for faster loading
- Keep menu descriptions short but appetizing
- Update prices regularly
- Test on mobile devices before deploying

## 🆘 Troubleshooting

**Images not showing?**
- Check the file path is correct
- Ensure images are in `public/images/dishes/` or `public/images/menu/`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in your changes
- Run `npm run lint` to find issues

**Deployment issues?**
- Ensure you're using the correct GitHub username in `package.json`
- Make sure gh-pages branch exists on GitHub
- Check GitHub Actions workflow is enabled

## 📚 Next Steps

1. ✅ Add your restaurant images
2. ✅ Update menu and dishes
3. ✅ Customize colors and content
4. ✅ Test locally
5. ✅ Deploy to GitHub Pages
6. ✅ Share your website!

Happy cooking! 🍽️✨
