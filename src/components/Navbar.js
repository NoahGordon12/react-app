import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <>

<nav className="flex items-center justify-between flex-wrap bg-teal p-6">
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/products"> Products </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/form"> Add product </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/cart"> Cart </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/login"> Login </Link>
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar




/* import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="lg:px-16 px-6 bg-gray-700 flex flex-wrap items-center lg:py-0 py-2">
                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/">Startsida</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/barber">Fotbollsskor</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/mybookings">Mina köp</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/login">Logga in</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header; */