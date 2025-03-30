
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-md mr-2"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  IndiaStack
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary">
                About
              </Link>
              <Link to="/products" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary">
                Products
              </Link>
              <Link to="/developers" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary">
                Developers
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center">
            <Button variant="outline" className="mr-2">Login</Button>
            <Button>Register</Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/developers"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Developers
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-2">
              <Button variant="outline" className="w-full" onClick={toggleMenu}>Login</Button>
              <Button className="w-full" onClick={toggleMenu}>Register</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
