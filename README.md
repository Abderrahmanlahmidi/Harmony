# Harmony React UI

<div align="center">

![npm version](https://img.shields.io/npm/v/harmony-react-ui)
![npm downloads](https://img.shields.io/npm/dm/harmony-react-ui)
![license](https://img.shields.io/npm/l/harmony-react-ui)
![bundle size](https://img.shields.io/bundlephobia/minzip/harmony-react-ui)

**A modern, accessible React component library built with TypeScript, Tailwind CSS, and Framer Motion.**

[Documentation](#documentation) • [Components](#components) • [Installation](#installation) • [Examples](#examples)

</div>

---

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

---

## 📦 Installation

```bash
npm install harmony-react-ui
```

```bash
yarn add harmony-react-ui
```

```bash
pnpm add harmony-react-ui
```

### Peer Dependencies

Make sure you have React installed:

```bash
npm install react react-dom
```

### Tailwind CSS Setup

Harmony React UI is built with Tailwind CSS. Add the package to your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/harmony-react-ui/dist/**/*.{js,mjs}',
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

---

## 🚀 Quick Start

```tsx
import { Button, Alert, Card } from 'harmony-react-ui';

function App() {
  return (
    <div className="p-8">
      <Alert variant="success">
        Welcome to Harmony React UI!
      </Alert>
      
      <Card className="mt-4">
        <Card.Header>
          <Card.Title>Getting Started</Card.Title>
          <Card.Description>
            Start building beautiful interfaces with Harmony UI.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Your content here...</p>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">Get Started</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
```

---

## 📚 Components

### Form Components

#### Button
Primary action buttons with multiple variants and sizes.

```tsx
import { Button } from 'harmony-react-ui';
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

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `isLoading`: `boolean`
- `leftIcon`, `rightIcon`: `React.ReactNode`

---

#### Input
Text input fields with validation states and icons.

```tsx
import { Input } from 'harmony-react-ui';
import { Mail } from 'lucide-react';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  leftIcon={<Mail size={18} />}
  error="Invalid email address"
/>
```

**Props:**
- `label`: `string`
- `error`: `boolean | string`
- `helperText`: `string`
- `leftIcon`, `rightIcon`: `React.ReactNode`
- `size`: `'sm' | 'md' | 'lg'`

---

#### Checkbox
Single and grouped checkboxes with descriptions.

```tsx
import { Checkbox, CheckboxGroup } from 'harmony-react-ui';

<Checkbox
  label="Accept terms and conditions"
  description="I agree to the terms of service"
/>

<CheckboxGroup label="Select your interests">
  <Checkbox label="Design" name="interests" />
  <Checkbox label="Development" name="interests" />
  <Checkbox label="Marketing" name="interests" />
</CheckboxGroup>
```

---

#### Radio
Radio buttons and groups for single selections.

```tsx
import { Radio, RadioGroup } from 'harmony-react-ui';

<RadioGroup label="Choose a plan">
  <Radio
    label="Basic"
    description="Perfect for individuals"
    name="plan"
    value="basic"
  />
  <Radio
    label="Pro"
    description="For teams and professionals"
    name="plan"
    value="pro"
  />
</RadioGroup>
```

---

#### Toggle
Switch toggles for binary options with smooth animations.

```tsx
import { Toggle } from 'harmony-react-ui';

<Toggle
  label="Dark Mode"
  description="Enable dark theme"
  checked={isDark}
  onChange={(e) => setIsDark(e.target.checked)}
/>
```

---

#### SearchBar
Search input with loading states and keyboard shortcuts.

```tsx
import { SearchBar } from 'harmony-react-ui';

<SearchBar
  placeholder="Search..."
  isLoading={isSearching}
  shortcut="⌘K"
  onClear={() => setQuery('')}
/>
```

---

### Feedback Components

#### Alert
Contextual feedback messages with multiple variants.

```tsx
import { Alert } from 'harmony-react-ui';

<Alert variant="info">
  This is an informational message
</Alert>

<Alert 
  variant="success" 
  onClose={() => console.log('Closed')}
>
  Operation completed successfully!
</Alert>

<Alert variant="warning" layout="pill">
  Limited time offer!
</Alert>
```

**Variants:** `'info' | 'success' | 'warning' | 'danger'`  
**Layouts:** `'default' | 'pill'`

---

#### Toast
Temporary notification messages with auto-dismiss.

```tsx
import { ToastProvider, useToast } from 'harmony-react-ui';

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
    <button onClick={() => toast.success('Saved!')}>
      Save
    </button>
  );
}
```

**Methods:**
- `toast.info(message)`
- `toast.success(message)`
- `toast.warning(message)`
- `toast.error(message)`

---

#### Modal
Dialog overlays for important actions and confirmations.

```tsx
import { Modal, Button } from 'harmony-react-ui';
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

**Variants:** `'info' | 'success' | 'warning' | 'danger'`

---

#### Progress
Progress bars and indicators with multiple styles.

```tsx
import { Progress } from 'harmony-react-ui';

<Progress
  value={75}
  label="Upload progress"
  variant="primary"
  showValue
  striped
/>
```

**Props:**
- `value`: `number` (0-100)
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `striped`: `boolean`

---

#### Spinner
Loading spinners with customizable sizes and colors.

```tsx
import { Spinner } from 'harmony-react-ui';

<Spinner size="lg" variant="primary" thickness="thick" />
```

---

### Display Components

#### Card
Container for content with header, body, and footer sections.

```tsx
import { Card } from 'harmony-react-ui';

<Card hoverable bordered>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Your content here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

---

#### Badge
Small status indicators and labels.

```tsx
import { Badge } from 'harmony-react-ui';

<Badge variant="primary" size="md" rounded="full">
  New
</Badge>
```

**Variants:** `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'`

---

#### Typography
Text components with consistent styling.

```tsx
import { Typography } from 'harmony-react-ui';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="small">Small text</Typography>
```

---

### Navigation Components

#### ProfileDropdown
User profile menu with account actions.

```tsx
import { ProfileDropdown } from 'harmony-react-ui';

<ProfileDropdown
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://..."
  }}
/>
```

---

## 🎨 Customization

### Theme Colors

Customize the theme colors in your Tailwind config:

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
<Button className="custom-class shadow-lg">
  Custom Button
</Button>
```

### Dark Mode

Components automatically support dark mode when using Tailwind's dark mode:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
};
```

---

## 🔧 TypeScript Support

All components are fully typed with TypeScript:

```tsx
import type { ButtonProps, AlertProps } from 'harmony-react-ui';

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'lg',
  children: 'Click me',
};
```

---

## 📖 Examples

### Login Form

```tsx
import { Input, Button, Card, Alert } from 'harmony-react-ui';
import { Mail, Lock } from 'lucide-react';

function LoginForm() {
  return (
    <Card className="max-w-md mx-auto">
      <Card.Header>
        <Card.Title>Welcome Back</Card.Title>
        <Card.Description>Sign in to your account</Card.Description>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input
          label="Email"
          type="email"
          leftIcon={<Mail size={18} />}
          placeholder="you@example.com"
        />
        <Input
          label="Password"
          type="password"
          leftIcon={<Lock size={18} />}
          placeholder="••••••••"
        />
      </Card.Content>
      <Card.Footer>
        <Button variant="primary" className="w-full">
          Sign In
        </Button>
      </Card.Footer>
    </Card>
  );
}
```

### Settings Panel

```tsx
import { Toggle, Card } from 'harmony-react-ui';

function SettingsPanel() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Settings</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Toggle
          label="Notifications"
          description="Receive email notifications"
        />
        <Toggle
          label="Dark Mode"
          description="Use dark theme"
        />
        <Toggle
          label="Auto-save"
          description="Save changes automatically"
        />
      </Card.Content>
    </Card>
  );
}
```

---

## 📊 Bundle Size

Harmony React UI is optimized for tree-shaking. Import only what you need:

```tsx
// ✅ Good - Only imports Button
import { Button } from 'harmony-react-ui';

// ❌ Avoid - Imports everything
import * as HarmonyUI from 'harmony-react-ui';
```

**Approximate sizes:**
- Full library: ~53 KB (gzipped)
- Individual components: 2-5 KB each

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT © Abderrahman Lahmidi

---

## 🔗 Links

- **npm Package:** https://www.npmjs.com/package/harmony-react-ui
- **GitHub Repository:** https://github.com/Abderrahmanlahmidi/Harmony
- **Issues:** https://github.com/Abderrahmanlahmidi/Harmony/issues

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion) - Animations
- [Lucide Icons](https://lucide.dev) - Icon library

---

<div align="center">

**Made with ❤️ by [Abderrahman Lahmidi](https://github.com/Abderrahmanlahmidi)**

⭐ Star this project on [GitHub](https://github.com/Abderrahmanlahmidi/Harmony) if you find it helpful!

</div>
