# Synthelytix App - Next.js

A modern web application recreating the nightly.app interface using Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14
- 🎯 Tailwind CSS for styling
- 📱 Mobile-first approach
- 🚀 Fast performance
- ♿ Accessibility-focused

## Pages

- **Home** (`/`) - Hero section with features overview
- **Blog** (`/blog`) - Blog post listing and updates
- **Download** (`/download`) - Download options for browser and mobile
- **Branding** (`/branding`) - Brand guidelines and assets

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── blog/
│   │   └── page.tsx        # Blog page
│   ├── download/
│   │   └── page.tsx        # Download page
│   └── branding/
│       └── page.tsx        # Branding page
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Features.tsx    # Features section
│       ├── Stats.tsx       # Statistics section
│       └── CTA.tsx         # Call-to-action section
```

## Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for animations and effects
- **Google Fonts**: Prompt and Poppins

### Color Palette

- Primary: `#6067F9`
- Secondary: `#707AFF`
- Dark Background: `#0F0F1A`
- Light Text: `#F7F7F7`

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **PostCSS** - CSS transformations

## Development

### Linting

```bash
npm run lint
```

### Creating New Components

Create components in `src/components/` and use the existing components as templates.

## Deployment

The project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any Node.js hosting provider

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
