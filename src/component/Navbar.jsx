import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (

    <div>
      <nav className="bg-gray-900 p-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="text-purple-500 text-2xl font-bold mr-4">🌊</div>
        <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
        <a href="/team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
        <a href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
        <a href="/calendar" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto `}>
        <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Dashboard</a>
          <a href="/team" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">Team</a>
          <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">Projects</a>
          <a href="/calendar" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">Calendar</a>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search" className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm mr-4" />
          <div className="text-gray-300 hover:text-white cursor-pointer">🔔</div>
          <div>
            <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full ml-4" />
          </div>
        </div>
        <div>
          <Link to="/login" >
            <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mx-2 rounded"
            >Login</button>
            </Link>
            <Link to ="/signup">
            <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >  SignUp</button></Link>
            
        </div>
      </div>
        </nav>
    </div>
    
  )
}

export default Navbar
