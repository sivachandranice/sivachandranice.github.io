
# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [https://sivachandranice.github.io/sivachandranice.github.io/](https://sivachandranice.github.io/sivachandranice.github.io/)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations
- **Shadcn/ui** - Beautiful UI components
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation and footer
│   ├── sections/        # Main page sections
│   └── ui/             # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean and professional design
- **Smooth Animations** - Powered by Framer Motion
- **Dark/Light Theme** - Theme switching capability
- **Contact Form** - Working contact form with EmailJS
- **SEO Optimized** - Meta tags and semantic HTML

## 🔧 Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sivachandranice/sivachandranice.github.io.git
cd sivachandranice.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `docs` directory.

### Linting

```bash
npm run lint
```

## 📦 Deployment

This project is configured for GitHub Pages deployment from the main branch.

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/docs" folder
5. Click "Save"

### Manual Deployment Steps

1. Build the project locally:
```bash
npm run build
```

2. Commit and push the generated `docs` folder to the main branch:
```bash
git add docs/
git commit -m "Build for GitHub Pages"
git push origin main
```

3. GitHub will automatically deploy from the `docs` folder

The site will be available at: [https://sivachandranice.github.io/sivachandranice.github.io/](https://sivachandranice.github.io/sivachandranice.github.io/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website or create an issue in this repository.

---

Built with ❤️ using modern web technologies
