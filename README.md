# Restaurant Website Template

A modern, elegant restaurant website built with React and TailwindCSS.

## Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Modern UI** - Clean, professional interface with TailwindCSS styling
- **Multiple Pages** - Home, Menu, About, Contact, and Gallery pages
- **Interactive Elements** - Smooth animations and transitions
- **Contact Form** - Ready-to-integrate contact form
- **Gallery** - Image gallery with modal view
- **Mobile Navigation** - Hamburger menu for mobile devices
- **SEO Ready** - Semantic HTML structure

## Project Structure

```
RestaurantA/
├── public/
│   └── images/              # Add restaurant images here
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   └── Footer.jsx       # Footer with contact info
│   ├── pages/
│   │   ├── Home.jsx         # Home page with hero and features
│   │   ├── Menu.jsx         # Menu page with categories
│   │   ├── About.jsx        # About page with team info
│   │   ├── Contact.jsx      # Contact form and info
│   │   └── Gallery.jsx      # Image gallery
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── .gitignore               # Git ignore rules
```

## Installation

1. **Install Node.js** (if not already installed)
   - Visit https://nodejs.org and download the LTS version

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The website will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (not reversible)

## Customization

### Colors
Edit the `tailwind.config.js` file to change the primary color scheme:
```js
colors: {
  primary: '#d4a574',  // Change this
  dark: '#1a1a1a',
  light: '#f5f5f5',
}
```

### Restaurant Info
- **Home Page** - Update restaurant name and hero text in `src/pages/Home.jsx`
- **Menu** - Add your actual menu items in `src/pages/Menu.jsx`
- **About** - Customize team info in `src/pages/About.jsx`
- **Contact** - Update address and phone in `src/pages/Contact.jsx`
- **Hours** - Update opening hours in multiple pages

### Adding Images
1. Create an `images/` folder in `public/`
2. Add your images there
3. Reference them in components as `/images/your-image.jpg`

## Features to Add

- [ ] Integration with reservation system (OpenTable, Resy, etc.)
- [ ] Add real images to gallery
- [ ] Implement backend contact form handling
- [ ] Add online ordering/delivery integration
- [ ] Blog section for restaurant updates
- [ ] Customer review section
- [ ] Newsletter signup
- [ ] Staff testimonials
- [ ] Special events calendar

## Dependencies

- **React** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder that you can deploy to any hosting platform.

## Deployment Options

- **Vercel** - Recommended for React apps (https://vercel.com)
- **Netlify** - Easy deployment with CI/CD (https://netlify.com)
- **GitHub Pages** - Free hosting for static sites
- **Firebase Hosting** - Google's hosting solution
- **Traditional Hosting** - Upload the `dist/` folder via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use for commercial projects
