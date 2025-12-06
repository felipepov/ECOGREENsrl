# Ecogreen Construcción SRL - Website

A professional corporate website built for **Ecogreen Construcción SRL**, a family-owned construction company specializing in civil and road engineering projects.

**Project Date:** August 2020  
**Client:** Ecogreen Construcción SRL  
**Developer:** Felipe Poviña

## About the Client

Ecogreen Construcción SRL is a family-owned construction company founded in 2014 by Ing. Horacio Poviña and Ing. Ignacio Poviña. The company specializes in engineering and construction of civil and road works, with extensive experience in various construction solutions. The company is known for its professionalism, commitment to quality, and responsibility in meeting deadlines and conditions for each project.

## Project Overview

This website serves as the digital presence for Ecogreen Construcción SRL, showcasing their services, projects, company information, and providing a contact form for potential clients. The site features a modern, responsive design with smooth animations and a professional aesthetic that reflects the company's commitment to quality construction work.

## Technologies Used

- **HTML5** - Semantic markup
- **SCSS/SASS** - Modular CSS architecture with BEM methodology
- **JavaScript** - Interactive functionality and form handling
- **Node.js & npm** - Build tools and development environment
- **Browser Sync** - Live reload development server
- **PostCSS** - CSS processing and optimization

## Features

### Sections

1. **Home/Hero Section**
   - Eye-catching hero image with overlay
   - Call-to-action button
   - Smooth animations and transitions

2. **Services (Proyectos)**
   - Three main service categories:
     - **Combustible** (Fuel): Fuel storage plants and service stations
     - **Caminos** (Roads): Road paving and railway renovation projects
     - **Puentes y Drenajes** (Bridges & Drainage): Bridges and drainage works

3. **About Us (Quienes Somos)**
   - Company history and mission
   - Vision and values
   - Team information

4. **Clients (Clientes)**
   - Showcase of major clients
   - Animated client logo carousel

5. **Contact (Contactanos)**
   - Contact information (phone and email)
   - Interactive contact form
   - Embedded Google Maps location

### Design Features

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with smooth transitions and hover effects
- Professional color scheme reflecting the company's green/eco theme
- Accessible navigation with mobile hamburger menu
- Optimized images and lazy loading
- Custom scrollbar styling

## Project Structure

```
ECOGREENsrl/
├── src/                    # Source files
│   ├── sass/              # SCSS source files
│   │   ├── abstracts/     # Variables, colors, sizes, typography
│   │   ├── base/          # Reset, root, base styles
│   │   ├── components/    # Reusable components (nav, cards, buttons)
│   │   ├── layouts/       # Page-specific layouts
│   │   └── utilities/     # Utility classes and icons
│   ├── images/            # Image assets
│   ├── js/                # JavaScript files
│   └── index.html         # Main HTML file
├── public/                 # Compiled/built files (deployment ready)
│   ├── css/               # Compiled CSS
│   ├── images/            # Optimized images
│   ├── js/                # JavaScript files
│   └── index.html         # Final HTML
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with live reload:
```bash
npm start
```

This will:
- Copy source files to the `public` directory
- Compile SCSS to CSS
- Watch for file changes
- Start a local server (usually at `http://localhost:3000`)

### Build for Production

Compile and optimize all assets for production:
```bash
npm run build
```

This will:
- Copy all HTML, images, and JS files
- Compile SCSS to CSS
- Minify and optimize CSS with autoprefixer and cssnano

### Available Scripts

- `npm start` - Start development server with watch mode
- `npm run build` - Build for production
- `npm run build:sass` - Compile SCSS only
- `npm run copy` - Copy all source files to public
- `npm run serve` - Start browser-sync server only

## Color Scheme

The website uses a green color palette that reflects the company's eco-friendly and construction focus:

- **Darkest Green:** `#023000` - Headers and dark text
- **Dark Green:** `#034000` - Footer and accents
- **Semi Dark:** `#045D00` - Button hover states
- **Semi Light:** `#008000` - Primary buttons and links
- **Light Green:** `#00B700` - Highlights and accents
- **Light Background:** `#dcdcdd` - Section backgrounds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project was created for Ecogreen Construcción SRL. All rights reserved.

---

**Built with care in August 2020**  
*Sitio diseñado por Felipe Poviña*
