import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Topbar from './TopBar'
import logo from '../assets/logo.png'
import tabletLogo from '../assets/mainLogo.png'

// Import PNG icons
import dashboardIcon from '../assets/dash.png'
import recruitmentIcon from '../assets/person.png'
import scheduleIcon from '../assets/mic.png'
import employeeIcon from '../assets/employee.png'
import departmentIcon from '../assets/mic.png'
import supportIcon from '../assets/mic.png'
import settingsIcon from '../assets/settings.png'

const menuItems = [
  { icon: dashboardIcon, label: "Dashboard", link: "/dashboard", section: "MAIN MENU" },
  { icon: recruitmentIcon, label: "Recruitment", link: "/recruitment", section: "MAIN MENU" },
  { icon: scheduleIcon, label: "Schedule", link: "/schedule", section: "MAIN MENU" },
  { icon: employeeIcon, label: "Employee", link: "/employee", section: "MAIN MENU" },
  { icon: departmentIcon, label: "Department", link: "/department", section: "MAIN MENU" },
  { icon: supportIcon, label: "Support", link: "/support", section: "OTHER" },
  { icon: settingsIcon, label: "Settings", link: "/settings", section: "OTHER" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 m-2 bg-white rounded-md"
        >
          {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
        </button>
      </div>

      <div
        className={`
          fixed top-0 left-0 h-full bg-[#FAFAFA] shadow-lg transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'w-64' : 'w-0 md:w-16 lg:w-64'}
          overflow-hidden md:overflow-visible
        `}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-2 right-2 p-2"
          >
            <X className="h-6 w-6" />
          </button>
        )}

        <div className="p-4 flex items-center justify-center">
          <img src={tabletLogo} alt="Tablet Logo" className="block lg:hidden h-10" />
          <img src={logo} alt="Vasitum Logo" className="hidden lg:block h-10" />
        </div>

        <nav className="mt-8">
          {["MAIN MENU", "OTHER"].map((section) => (
            <div key={section} className="mb-4">
              <h2 className="px-4 md:text-xs font-semibold text-gray-500 mb-2 hidden md:block text-[10px]">{section}</h2>
              {menuItems
                .filter((item) => item.section === section)
                .map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) => 
                      `flex items-center px-4 py-2 gap-[24px]
                      ${isActive ? 'text-red-500' : 'text-gray-700'} 
                      hover:text-red-500`
                    }
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`
                        w-6 h-6 p-1 opacity-100 
                        ${index === menuItems.findIndex(i => i.link === item.link) ? 'filter-red' : 'filter-gray'}
                      `}
                      style={{
                        width: "24px",
                        height: "24px",
                        padding: "2px 3.54px 4px 3px",
                        gap: "0px",
                        opacity: "1",
                      }}
                    />
                    <span className="hidden lg:inline font-poppins">{item.label}</span>
                  </NavLink>
                ))}
            </div>
          ))}
        </nav>
      </div>
      <Topbar/>
    </>
  )
}