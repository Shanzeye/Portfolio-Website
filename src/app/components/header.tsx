import Link from "next/link";
import React from "react";
import { FaCloudDownloadAlt } from 'react-icons/fa';

export default function Header () {
    return (
        <div>
            <header className="text-gray-600 body-font bg-indigo-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl">PoRtFoLiO</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl font-bold justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About Me</Link>
      <Link href="/projects" className="mr-5 hover:text-gray-900">Projects</Link>


    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        <a href="/assets/cv.pdf">
        Download CV
       <FaCloudDownloadAlt className="text-xl ml-2" />
        </a>
    </button>
        
  </div>
</header>
        </div>
    )
}