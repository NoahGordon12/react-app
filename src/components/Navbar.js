import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <>

<nav className="bg-gray-300">
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/CardList"> Products </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/Form"> Add product </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/Cart"> Cart </Link>
    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4" to="/Login"> Login </Link>
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar