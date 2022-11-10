import React, { useState, useEffect } from 'react';
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../assests/images/rev-01.png";
import Search from "../Reusable/Search";

const navigation = [
  { name: "WEBME", href: "/#about" },
  { name: "Solutions", href: "/#services" },
  { name: "Resources", href: "/#works" },
  { name: "Customer Success", href: "/#testimonials" },
  { name: "Talk to WEBME", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Popover>
      <div className={`fixed z-50 w-full md:w-5/6 left-1/2 -translate-x-1/2 bg-white py-6 px-4 sm:px-6 lg:px-8 rounded ${scrollPosition > 100 && `drop-shadow-sm`}`}>
        <Search isOpen={isOpen} setIsOpen={setIsOpen} />

        <nav className="relative flex items-center justify-between sm:h-10 font-bold" aria-label="Global">
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center md:ml-10 md:pr-4 md:space-x-8">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/" >
                  <Image
                    alt="Webme"
                    height="50px"
                    width="50px"
                    className="cursor-pointer"
                    src={logo}
                  />
                </Link>
              </div>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-5">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <BiSearchAlt size="25" className="text-dark" />
            </button>
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
            <button className="bg-indigo-500 text-white px-5 py-2 rounded uppercase">Try For Free</button>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <Image
                    alt="Webme"
                    height="50px"
                    width="50px"
                    className="cursor-pointer"
                    src={logo}
                  />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-3 flex flex-col pl-8 pb-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
