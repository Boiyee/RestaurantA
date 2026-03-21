# 🚀 Restaurant Website Setup Guide

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A code editor (VS Code recommended)

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18.2.0
- React Router for navigation
- TailwindCSS for styling
- React Icons for beautiful icons

### Step 2: Start Development Server
```bash
npm start
```

The website will automatically open at `http://localhost:3000`

### Step 3: Explore the Application
- **Home Page** - Showcases your restaurant with hero section and specials
- **Menu Page** - Displays categorized menu items (Appetizers, Mains, Pasta, Desserts)
- **About Page** - Team information, story, hours, and values
- **Gallery Page** - Image gallery with filtering
- **Contact Page** - Contact form and location information

---

## 📝 Customization Guide

### 1. Update Restaurant Information

#### Colors & Branding
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#d4a574',      // Change this to your brand color
  dark: '#1a1a1a',         // Dark background
  light: '#f5f5f5',        // Light background
}
```

#### Restaurant Name & Logo
Edit `src/components/Header.jsx` (Line 17):
```jsx
<Link to="/" className="text-3xl font-serif font-bold text-primary">
  🍽️ Your Restaurant Name    {/* Change this */}
</Link>
```

#### Contact Information
Update in:
- `src/components/Footer.jsx` - Address and phone
- `src/pages/Contact.jsx` - Hours and address
- `src/pages/About.jsx` - Opening hours

### 2. Update Menu Items

Edit `src/pages/Menu.jsx` and modify the `menuItems` object:

```jsx
const menuItems = {
  appetizers: [
    { 
      name: 'Your Dish Name', 
      price: '$12', 
      description: 'Dish description here' 
    },
    // Add more items...
  ]
}
```

### 3. Add Your Images

1. Create a `public/images/` folder
2. Add your restaurant images there
3. Use them in components:
   ```jsx
   <img src="/images/your-image.jpg" alt="description" />
   ```

### 4. Update About Page Team

Edit `src/pages/About.jsx` - Find the `team` array and update:
```jsx
const team = [
  {
    name: 'Chef Name',
    role: 'Executive Chef',
    bio: 'Chef biography here',
    emoji: '👨‍🍳'
  }
]
```

---

## 🎨 Design System

### Colors
```
Primary (Gold):    #d4a574
Dark (Charcoal):   #1a1a1a
Light (Off-white): #f5f5f5
```

### Typography
- **Headings**: Playfair Display (serif) - elegant and bold
- **Body**: Poppins (sans-serif) - clean and modern

### Spacing
TailwindCSS uses 4px units:
- `p-4` = 16px padding
- `m-2` = 8px margin
- `gap-4` = 16px gap

### Components
All components use TailwindCSS utility classes for consistent styling.

---

## 🔧 Features to Implement

### Priority 1 (High Impact)
- [ ] Replace emoji gallery with real photos
- [ ] Add actual menu items and prices
- [ ] Set up contact form backend
- [ ] Add restaurant opening hours

### Priority 2 (Medium Impact)
- [ ] Integrate reservation system (e.g., Resy, OpenTable)
- [ ] Add Google Maps embed
- [ ] Newsletter signup
- [ ] Blog/news section

### Priority 3 (Nice to Have)
- [ ] Online ordering integration
- [ ] Customer reviews
- [ ] Staff profiles
- [ ] Photo slider in gallery

---

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All breakpoints are handled automatically by TailwindCSS using the `md:` and `lg:` prefixes.

---

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push

---

## 🚨 Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### CSS not loading
- Ensure TailwindCSS is properly configured
- Check `src/index.css` imports Tailwind directives
- Restart development server

### Images not showing
- Check file path is correct and relative to `public/` folder
- Use `/images/filename.jpg` format
- Ensure image file exists

### Form not working
- Currently, the contact form logs to console
- Implement backend service to handle submissions
- Look at Contact.jsx `handleSubmit` function

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🎯 Next Steps

1. **Personalize** - Update all restaurant information
2. **Add Images** - Replace emoji with real photos
3. **Enhance Menu** - Add full menu with prices
4. **Set Up Backend** - Create contact form handler
5. **Deploy** - Put your website live on the internet

---

**Ready to launch your restaurant online? Let's go! 🍽️**
