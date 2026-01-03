import { NavLink, useNavigate } from 'react-router-dom'
import {
  Type,
  Palette,
  Box,
  Layout,
  MousePointer2,
  FileText,
  Search,
  Github,
    PlusCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen
} from 'lucide-react'

const navigation = [
  { name: 'Introduction', icon: FileText, path: '/system', end: true },
  { name: 'How to use', icon: BookOpen, path: '/system/usage' },
  { name: 'Colors', icon: Palette, path: '/system/colors' },
  { name: 'Typography', icon: Type, path: '/system/typography' },
  {
    name: 'Components',
    icon: Box,
    children: [
      { name: 'Buttons', icon: MousePointer2, path: '/system/buttons' },
        { name: 'ButtonIcon', icon: PlusCircle, path: '/system/button-icon' },
      // { name: 'Inputs', icon: Type, path: '/system/inputs' },
      // { name: 'Cards', icon: Layout, path: '/system/cards' },
      // { name: 'Modals', icon: Layers, path: '/system/modals' },
    ]
  }
]

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className={`
      ${isCollapsed ? 'w-20' : 'w-64'} 
      border-r border-neutral-200 h-screen fixed left-0 top-0 bg-white flex flex-col z-20 transition-all duration-300 ease-in-out
    `}>

      <div className={`p-6 border-b border-neutral-100 relative ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 bg-neutral-900 rounded-lg flex-shrink-0 flex items-center justify-center">
            <Layout className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && <span className="font-bold text-neutral-900 tracking-tight whitespace-nowrap">Harmony</span>}
        </div>


        <button
          onClick={onToggle}
          className={`
            absolute top-7 -right-3 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center 
            hover:bg-neutral-50 transition-colors shadow-sm cursor-pointer z-30
          `}
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {!isCollapsed && (
          <div className="mt-6 relative animate-in fade-in duration-300">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-neutral-200 transition-all outline-none"
            />
          </div>
        )}
      </div>


      <nav className={`flex-1 overflow-y-auto ${isCollapsed ? 'px-0 py-4 flex flex-col items-center' : 'p-4'} space-y-8`}>
        {navigation.map((item) => (
          <div key={item.name} className={isCollapsed ? 'w-full flex flex-col items-center' : 'w-full'}>
            {item.children ? (
              <div className={`space-y-1 ${isCollapsed ? 'w-full flex flex-col items-center' : 'w-full'}`}>
                {!isCollapsed && (
                  <h3 className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 truncate">
                    {item.name}
                  </h3>
                )}
                {item.children.map((child) => (
                  <NavLink
                    key={child.name}
                    to={child.path}
                    title={isCollapsed ? child.name : ''}
                    className={({ isActive }) => `
                      flex items-center rounded-lg text-sm font-medium transition-colors
                      ${isCollapsed ? 'w-10 h-10 justify-center mb-1' : 'gap-3 px-3 py-2 w-full'}
                      ${isActive
                        ? 'bg-neutral-900 text-white shadow-md shadow-neutral-900/10'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}
                    `}
                  >
                    <child.icon className="w-4 h-4 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{child.name}</span>}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                to={item.path}
                end={item.end}
                title={isCollapsed ? item.name : ''}
                className={({ isActive }) => `
                  flex items-center rounded-lg text-sm font-medium transition-colors
                  ${isCollapsed ? 'w-10 h-10 justify-center' : 'gap-3 px-3 py-2 w-full'}
                  ${isActive
                    ? 'bg-neutral-900 text-white '
                    : 'text-neutral-600 hover:bg-neutral-100'}
                `}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span className="truncate">{item.name}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </nav>


      <div className={`p-4 border-t border-neutral-100 space-y-2 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>

        <button
          onClick={() => navigate('/')}
          title={isCollapsed ? 'Back to Home' : ''}
          className={`
            flex items-center ${isCollapsed ? 'justify-center px-0 w-10 h-10' : 'gap-3 px-3'} py-2.5 rounded-lg text-sm font-medium 
            text-neutral-600 hover:bg-neutral-100 transition-all duration-200 w-full
          `}
        >
          <Home className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && <span className="truncate">Back to Home</span>}
        </button>


        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title={isCollapsed ? 'GitHub Repository' : ''}
          className={`
            flex items-center ${isCollapsed ? 'justify-center px-0 w-10 h-10' : 'gap-3 px-3'} py-2.5 rounded-lg text-sm font-medium 
            text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 w-full
          `}
        >
          <Github className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && <span className="truncate">GitHub Repository</span>}
        </a>
      </div>
    </aside>
  )
}