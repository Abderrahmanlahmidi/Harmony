# Harmony React UI

<div align="center">

![npm version](https://img.shields.io/npm/v/harmony-react-ui)
![npm downloads](https://img.shields.io/npm/dm/harmony-react-ui)
![license](https://img.shields.io/npm/l/harmony-react-ui)
![bundle size](https://img.shields.io/bundlephobia/minzip/harmony-react-ui)

**A modern, accessible React component library built with TypeScript, Tailwind CSS, and Framer Motion.**

[Documentation](https://github.com/Abderrahmanlahmidi/Harmony) • [npm Package](https://www.npmjs.com/package/harmony-react-ui)

</div>

---

## 📦 Monorepo Structure

This repository is organized as a monorepo containing:

- **`packages/harmony-ui/`** - The component library (published to npm as `harmony-react-ui`)
- **`packages/docs/`** - Documentation website

## 🚀 Quick Start

### For Users

Install the component library in your project:

```bash
npm install harmony-react-ui
```

See the [Component Library README](./packages/harmony-ui/README.md) for full documentation.

### For Contributors

```bash
# Clone the repository
git clone https://github.com/Abderrahmanlahmidi/Harmony.git
cd Harmony

# Install dependencies for all packages
npm install

# Run the documentation site
npm run dev

# Build the component library
npm run build:lib

# Build everything
npm run build
```

## 📚 Available Scripts

- `npm run dev` - Start the documentation development server
- `npm run build:lib` - Build the component library
- `npm run build:docs` - Build the documentation site
- `npm run build` - Build both library and docs
- `npm run publish:lib` - Publish the component library to npm
- `npm run test` - Run tests in all packages

## 📦 Publishing the Library

To publish a new version of the component library:

```bash
# 1. Update version in packages/harmony-ui/package.json
# 2. Build the library
npm run build:lib

# 3. Publish to npm
npm run publish:lib
```

## 🏗️ Project Structure

```
Harmony/
├── packages/
│   ├── harmony-ui/          # Component library
│   │   ├── src/
│   │   │   ├── components/  # React components
│   │   │   └── utils/       # Utility functions
│   │   ├── dist/            # Built files (generated)
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── docs/                # Documentation website
│       ├── src/
│       │   ├── pages/       # Documentation pages
│       │   ├── router/      # Routing
│       │   └── constants/   # Data and constants
│       ├── package.json
│       └── README.md
│
├── package.json             # Root workspace config
└── README.md               # This file
```

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean aesthetics with smooth animations
- ♿ **Accessible** - WCAG 2.1 compliant components with full keyboard navigation
- 🎭 **Fully Typed** - Written in TypeScript with comprehensive type definitions
- 🎬 **Animated** - Smooth, performant animations powered by Framer Motion
- 🎯 **Tree-shakeable** - Import only what you need for optimal bundle size
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 📦 **Zero Config** - Works out of the box with sensible defaults
- 🔧 **Customizable** - Easy to customize with Tailwind CSS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © Abderrahman Lahmidi

## 🔗 Links

- **npm Package:** https://www.npmjs.com/package/harmony-react-ui
- **GitHub Repository:** https://github.com/Abderrahmanlahmidi/Harmony
- **Issues:** https://github.com/Abderrahmanlahmidi/Harmony/issues

---

<div align="center">

**Made with ❤️ by [Abderrahman Lahmidi](https://github.com/Abderrahmanlahmidi)**

⭐ Star this project on [GitHub](https://github.com/Abderrahmanlahmidi/Harmony) if you find it helpful!

</div>
