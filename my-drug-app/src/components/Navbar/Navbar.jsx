import React from 'react'
import logo from '../../assets/images/imu.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50 mb-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* اللوجو */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Drugs Checker Logo" className="h-10 w-10" />
          <NavLink to="/" className="text-2xl font-bold text-blue-700">
            Drugs Checker
          </NavLink>
        </div>

        {/* الروابط */}
        <ul className="flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white bg-blue-600 px-4 py-2 rounded-md"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/drugs" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white bg-blue-600 px-4 py-2 rounded-md"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Drugs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/searches" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white bg-blue-600 px-4 py-2 rounded-md"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              New Searches
            </NavLink>
          </li>
        </ul>

        {/* أزرار تسجيل الدخول */}
        <div>
          <NavLink to="/login" className="text-gray-700 hover:text-blue-600 px-3">
            Login
          </NavLink>
          <NavLink to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Register
          </NavLink>
        </div>
      </div>
    </nav>





    
    
    </>
  )
}
