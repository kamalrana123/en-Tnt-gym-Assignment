import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <div className='bg-red-600 px-3 py-2 rounded-2xl  text-white' >En-TNT Gym</div>
                </Link>
                
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="/Home"
                                className={(isActive) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Appointment"
                                className={(isActive) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Appointment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Calendar"
                                className={(isActive) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Calendar
                            </NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header