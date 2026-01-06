# @harmony-ui/react

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean aesthetics with smooth animations
- ♿ **Accessible** - WCAG 2.1 compliant components
- 🎭 **Fully Typed** - Written in TypeScript with comprehensive type definitions
- 🎬 **Animated** - Smooth animations powered by Framer Motion
- 🎯 **Tree-shakeable** - Import only what you need
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 📦 **Zero Config** - Works out of the box

## 📦 Installation

```bash
npm install @harmony-ui/react
# or
yarn add @harmony-ui/react
# or
pnpm add @harmony-ui/react
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom
```

### Tailwind CSS Setup

Add the library to your Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@harmony-ui/react/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
      },
    },
  },
  plugins: [],
};
```

Import the styles in your main file:

```tsx
import '@harmony-ui/react/styles.css';
```

## 🚀 Quick Start

```tsx
import { Button, Alert, Card } from '@harmony-ui/react';

function App() {
  return (
    <div>
      <Alert variant="success">
        Welcome to Harmony UI!
      </Alert>
      
      <Card>
        <Card.Header>
          <Card.Title>Getting Started</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>Start building beautiful interfaces with Harmony UI.</p>
        </Card.Content>
      </Card>
      
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  );
}
```

## 📚 Components

### Form Components
- **Button** - Primary action buttons with variants and sizes
- **ButtonIcon** - Icon-only buttons for compact interfaces
- **Input** - Text input fields with validation states
- **Checkbox** - Single and grouped checkboxes
- **Radio** - Radio buttons and groups
- **Toggle** - Switch toggles for binary options
- **SearchBar** - Search input with loading states

### Feedback Components
- **Alert** - Contextual feedback messages
- **Toast** - Temporary notification messages
- **Modal** - Dialog overlays for important actions
- **Progress** - Progress bars and indicators
- **Spinner** - Loading spinners

### Display Components
- **Card** - Container for content with header, body, and footer
- **Badge** - Small status indicators and labels
- **Typography** - Text components with consistent styling

### Navigation Components
- **ProfileDropdown** - User profile menu

## 📖 Usage Examples

### Alert

```tsx
import { Alert } from '@harmony-ui/react';

<Alert variant="info">
  This is an informational message
</Alert>

<Alert variant="success" onClose={() => console.log('Closed')}>
  Operation completed successfully!
</Alert>
```

### Button

```tsx
import { Button } from '@harmony-ui/react';
import { Plus } from 'lucide-react';

<Button variant="primary" size="md">
  Click me
</Button>

<Button 
  variant="secondary" 
  leftIcon={<Plus size={18} />}
  isLoading
>
  Add Item
</Button>
```

### Card

```tsx
import { Card } from '@harmony-ui/react';

<Card hoverable>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description goes here</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Your content here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Modal

```tsx
import { Modal, Button } from '@harmony-ui/react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        variant="info"
        title="Confirmation"
        description="Are you sure you want to proceed?"
      >
        <p>Additional content here</p>
      </Modal>
    </>
  );
}
```

### Toast

```tsx
import { ToastProvider, useToast, Button } from '@harmony-ui/react';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

function YourApp() {
  const { toast } = useToast();
  
  return (
    <Button onClick={() => toast.success('Success!')}>
      Show Toast
    </Button>
  );
}
```

### Form Components

```tsx
import { Input, Checkbox, Radio, Toggle } from '@harmony-ui/react';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email"
/>

<Checkbox
  label="Accept terms"
  description="I agree to the terms and conditions"
/>

<Radio
  label="Option 1"
  name="options"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>

<Toggle
  label="Dark Mode"
  description="Enable dark theme"
  checked={isDark}
  onChange={(e) => setIsDark(e.target.checked)}
/>
```

## 🎨 Customization

### Theme Colors

You can customize the theme colors in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        success: '#your-color',
        warning: '#your-color',
        danger: '#your-color',
        info: '#your-color',
      },
    },
  },
};
```

### Component Styling

All components accept a `className` prop for custom styling:

```tsx
<Button className="custom-class">
  Custom Button
</Button>
```

## 🔧 TypeScript Support

All components are fully typed. Import types as needed:

```tsx
import type { ButtonProps, AlertProps } from '@harmony-ui/react';

const customButton: ButtonProps = {
  variant: 'primary',
  size: 'lg',
  children: 'Click me',
};
```

## 📄 License

MIT © Abderrahman Lahmidi

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📧 Email: contact@abderrahman.io
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/harmony-ui/issues)
- 📖 Documentation: [Full Documentation](https://harmony-ui.dev)

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
