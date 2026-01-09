import {
  Type,
  Palette,
  Box,
  Layout,
  MousePointer2,
  FileText,
  Search,
  PlusCircle,
  BookOpen,
  TextCursorInput,
  Tag,
  AlertTriangle,
  LayoutDashboard,
  Navigation,
  Loader2,
  Layers,
  CircleDot,
  CheckCircle2,
  Zap,
  Activity,
} from 'lucide-react';

export const SIDEBAR_NAVIGATION = [
  { name: 'Introduction', icon: FileText, path: '/system', end: true },
  { name: 'How to use', icon: BookOpen, path: '/system/usage' },
  { name: 'Colors', icon: Palette, path: '/system/colors' },
  {
    name: 'Components',
    icon: Box,
    children: [
      { name: 'Typography', icon: Type, path: '/system/typography' },
      { name: 'Buttons', icon: MousePointer2, path: '/system/buttons' },
      { name: 'ButtonIcon', icon: PlusCircle, path: '/system/button-icon' },
      { name: 'Inputs', icon: TextCursorInput, path: '/system/inputs' },
      { name: 'Badges', icon: Tag, path: '/system/badges' },
      { name: 'Alerts', icon: AlertTriangle, path: '/system/alerts' },
      { name: 'Cards', icon: Layout, path: '/system/cards' },
      { name: 'Spinners', icon: Loader2, path: '/system/spinners' },
      { name: 'Modals', icon: Layers, path: '/system/modals' },
      { name: 'Radios', icon: CircleDot, path: '/system/radios' },
      { name: 'Checkboxes', icon: CheckCircle2, path: '/system/checkboxes' },
      { name: 'Toggles', icon: Zap, path: '/system/toggles' },
      { name: 'Progress', icon: Activity, path: '/system/progress' },
      { name: 'Search Bar', icon: Search, path: '/system/search' },
    ]
  },
  {
    name: 'Layouts',
    icon: LayoutDashboard,
    children: [
      { name: 'Navbar', icon: Navigation, path: '/system/navbar' },
    ]
  }
];
