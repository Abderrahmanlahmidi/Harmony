import { NavLink, useNavigate } from 'react-router-dom'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Home,
} from 'lucide-react'
import { SIDEBAR_NAVIGATION } from '../../../constants/sidebar.data';
import { useState } from 'react'





interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNavigation = SIDEBAR_NAVIGATION.reduce((acc, item) => {
    const isParentMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (item.children) {
      const matchingChildren = item.children.filter(child =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (isParentMatch) {
        acc.push(item);
      } else if (matchingChildren.length > 0) {
        acc.push({ ...item, children: matchingChildren });
      }
    } else {
      if (isParentMatch) {
        acc.push(item);
      }
    }
    return acc;
  }, [] as typeof SIDEBAR_NAVIGATION);

  return (
    <aside className={`
      ${isCollapsed ? 'w-20' : 'w-64'} 
      border-r border-neutral-200 h-screen fixed left-0 top-0 bg-white dark:bg-neutral-50 flex flex-col z-20 transition-all duration-300 ease-in-out
    `}>

      <div className={`p-6 border-b border-neutral-100 relative ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
              <rect x="0" y="0" width="24" height="24" rx="6" className="fill-neutral-900 dark:fill-neutral-50" />
              <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-neutral-50 dark:stroke-neutral-900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 9h18" className="stroke-neutral-50 dark:stroke-neutral-900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V9" className="stroke-neutral-50 dark:stroke-neutral-900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-neutral-900 tracking-tight whitespace-nowrap">
              Harmony
            </span>
          )}
        </div>


        <button
          onClick={onToggle}
          className={`
            absolute top-7 -right-3 w-6 h-6 bg-white dark:bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center 
            hover:bg-neutral-50 dark:hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer z-30
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-neutral-100 border-transparent rounded-lg text-sm focus:bg-white dark:focus:bg-neutral-50 focus:border-neutral-200 dark:focus:border-neutral-700 transition-all outline-none"
            />
          </div>
        )}
      </div>


      <nav className={`flex-1 overflow-y-auto ${isCollapsed ? 'px-0 py-4 flex flex-col items-center' : 'p-4'} space-y-8`}>
        {filteredNavigation.map((item) => (
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
                        ? 'bg-neutral-900 text-neutral-50 shadow-md shadow-neutral-900/10'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}
                    `}
                  >
                    <child.icon className="w-4 h-4 shrink-0" />
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
                    ? 'bg-neutral-900 text-neutral-50 '
                    : 'text-neutral-600 hover:bg-neutral-100'}
                `}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span className="truncate">{item.name}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </nav>


      <div className={`p-4 border-t border-neutral-100 space-y-2 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        {/* <button
          onClick={toggleTheme}
          title={isCollapsed ? (isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode') : ''}
          className={`
            flex items-center ${isCollapsed ? 'justify-center px-0 w-10 h-10' : 'gap-3 px-3'} py-2.5 rounded-lg text-sm font-medium 
            text-neutral-600 hover:bg-neutral-100 transition-all duration-200 w-full
          `}
        >
          {isDarkMode ? <Sun className="w-4 h-4 shrink-0" /> : <Moon className="w-4 h-4 shrink-0" />}
          {!isCollapsed && <span className="truncate">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button> */}

        <button
          onClick={() => navigate('/')}
          title={isCollapsed ? 'Back to Home' : ''}
          className={`
            flex items-center ${isCollapsed ? 'justify-center px-0 w-10 h-10' : 'gap-3 px-3'} py-2.5 rounded-lg text-sm font-medium 
            text-neutral-600 hover:bg-neutral-100 transition-all duration-200 w-full
          `}
        >
          <Home className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span className="truncate">Back to Home</span>}
        </button>
      </div>
    </aside>
  )
}
