import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar({ network }) {
  return (
    <nav className="bg-pink-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-8">
            <Link to="/">
              <span className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 p-1 rounded-full"
                />
                <span className="ml-2 text-xl">CrowdChain</span>
              </span>
            </Link>
          </div>
          <span className="md:ml-0 sm:ml-0 ml-14 inline-flex items-center animation-ping text-md text-purple-600 p-1 border border-purple-500 bg-purple-200 rounded-md">
            NetworkID: {network}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
