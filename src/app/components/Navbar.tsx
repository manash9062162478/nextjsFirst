"use client";

import { useState } from 'react';
import Link from 'next/link';
import { string } from 'yup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const handleClick = (item: string) => {
   
    setActive(item);
    
  };
  

  return (
    <nav style={{background:"#222"}} className=" shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 align-middle items-center">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link onClick={()=>handleClick("")} href="/" className={`${active === '' ? 'text-white' : 'navbar-text'} text-xl text-white  `}>
                Logo
              </Link>
            </div>
            <div className="hidden md:flex md:align-bottom md:space-x-8 md:ml-10">
              <Link onClick={()=>handleClick("pricing")} href="/pricing" className={` hover:text-white ${active === 'pricing' ? 'text-white' : 'navbar-text'} `}    >
                Pricing
              </Link>
              <Link onClick={()=>handleClick("help")} href="/help" className={`${active === 'help' ? 'text-white' : 'navbar-text'}  hover:text-white`}>
                Help Center
              </Link>
              <Link onClick={()=>handleClick("insights")} href="/insights" className={`${active === 'insights' ? 'text-white' : 'navbar-text'}  hover:text-white`}>
                Insights
              </Link>
              <Link onClick={()=>handleClick("contact")} href="/contact" className={`${active === 'contact' ? 'text-white' : 'navbar-text'}  hover:text-white`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link onClick={()=>handleClick("login")} href="/login" className={`${active === 'login' ? 'text-white' : 'navbar-text'}  hover:text-white`}>
              Login
            </Link>
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Premium
            </button> */}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={()=>handleClick("")} href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium navbar-text">
              Pricing
            </Link>
            <Link onClick={()=>handleClick("")} href="/help" className="block px-3 py-2 rounded-md text-base font-medium navbar-text">
              Help Center
            </Link>
            <Link onClick={()=>handleClick("")} href="/insights" className="block px-3 py-2 rounded-md text-base font-medium navbar-text">
              Insights
            </Link>
            <Link onClick={()=>handleClick("")} href="/contact" className="block px-3 py-2 rounded-md text-base font-medium navbar-text">
              Contact
            </Link>
            <Link onClick={()=>handleClick("")} href="/login" className="block px-3 py-2 rounded-md text-base font-medium navbar-text">
              Login
            </Link>
            {/* <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Get Premium
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
