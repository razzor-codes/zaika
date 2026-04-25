# Zaika Restaurant Website - Development Guidelines

This is a React + TypeScript + Vite project for the Zaika restaurant website.

## Project Overview

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 8
- **Styling:** CSS3 (custom, no frameworks)
- **Deployment:** GitHub Pages
- **Purpose:** Restaurant website showcase

## File Structure

- `src/components/` - React components for each section
- `src/styles/` - CSS files for styling
- `public/images/` - Static image assets
- `.github/workflows/` - GitHub Actions for CI/CD

## Key Components

- **Header.tsx** - Navigation with mobile menu
- **Hero.tsx** - Welcome/hero section
- **DishGallery.tsx** - Interactive dish showcase with modal
- **Menu.tsx** - Menu items organized by category
- **Footer.tsx** - Contact information and links

## Styling System

Using CSS custom properties (variables) for theming:

```css
--primary-color: #d4773a
--secondary-color: #1a1a1a
--accent-color: #f4a460
```

All components are mobile-responsive (media queries at 768px and 480px).

## Common Tasks

### Add a New Dish
Edit `src/components/DishGallery.tsx` and add to the `dishes` array:
```typescript
{
  id: 7,
  name: 'Dish Name',
  description: 'Description',
  image: '/images/dishes/filename.jpg',
  price: '$XX.XX'
}
```

### Add a Menu Category
Edit `src/components/Menu.tsx` and add to the `menuItems` array:
```typescript
{
  category: 'category-name',
  items: [
    { name: 'Item', description: 'Desc', price: '$XX.XX' }
  ]
}
```

### Change Colors
Edit `src/styles/globals.css` CSS variables section.

### Update Contact Info
Edit `src/components/Footer.tsx` with restaurant details.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Deployment

The project uses GitHub Actions for automatic deployment. On every push to `main`:
1. Dependencies are installed
2. Project is built
3. Built files are deployed to `gh-pages` branch
4. Website updates at `https://USERNAME.github.io/zaika-restaurant`

## Important Notes

- Images should be added to `public/images/` folders
- All image paths should start with `/images/`
- CSS animations are GPU-accelerated for smooth performance
- Mobile menu is implemented with CSS toggle
- Modal dialogs use inline state management

## Future Enhancements

Potential improvements for future versions:
- Add photo carousel
- Implement online ordering
- Add reviews/ratings section
- Dark mode toggle
- Multi-language support
- Contact form with email integration
- Instagram feed integration
