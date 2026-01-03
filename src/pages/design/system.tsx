import { useState } from "react"
import Sidebar from "./content/sidebar"
import { Outlet } from "react-router-dom"

export default function System() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-white">

      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />

      <main className={`flex-1 ${isCollapsed ? 'ml-20' : 'ml-64'} p-10 bg-neutral-50/50 min-h-screen transition-all duration-300 ease-in-out`}>
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
