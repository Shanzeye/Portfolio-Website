"use client"

import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';


export default function Hero () {
    return (
        <div>
            <section className="text-gray-600 body-font bg-gray-100 py-24">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello! I'M
        <br className="hidden lg:inline-block"/>
        <Typewriter
          options={{
          strings: ['Web Developer', 'UI/UX Designer','Graphic Designer','Logo Creater'],
          autoStart: true,
          loop: true,
         }}
        />
      </h1>
      <div className="w-[100px] h-[2px] bg-indigo-700"></div>
      <p className="mb-8 leading-relaxed py-24 text-2xl">I'M a "Fronted-Developer" A Web Designer and a Developer, I Specialized in UI Design, Responsive Web Design & Visual Development. Apart from this I'M also a Graphic Designer As a front-end developer, I specialize in creating visually engaging and highly responsive user interfaces that deliver seamless experiences across web and mobile platforms.. </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">HIRE ME</button>
         
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  </div>
</section>
        </div>
    )
}