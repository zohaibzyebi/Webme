import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import chatButton from '../../assests/images/chat-icon-blue.svg'
const Footer = () => {
  return (
    <Fragment>
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            Web me
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

      </footer>
      <div className="flex justify-end items-center w-full z-[1000] bottom-0 fixed px-4 py-4 bounceDown">
        <Link href="https://wa.link/2h2al5" >
          <a target="_blank" rel="noopener noreferrer">
            <Image src={chatButton} alt="Chat with us" height="50px"
              width="50px"
              className="cursor-pointer" />
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Footer;