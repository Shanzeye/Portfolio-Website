import Hero from "./components/hero";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div>
      < Hero />

      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5  mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h1 className="text-4xl font-bold text-gray-900 py-24">ABOUT ME</h1>
      
      <p className="leading-relaxed text-lg">As a front-end developer, I specialize in creating visually engaging and highly responsive user interfaces that deliver seamless experiences across web and mobile platforms. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I focus on turning design concepts into functional, user-friendly websites. I’m passionate about optimizing performance, improving accessibility, and ensuring cross-browser compatibility to enhance the overall user experience. By staying up to date with the latest trends and technologies, I strive to build intuitive and dynamic front-end solutions that drive user engagement and satisfaction. </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <p className="text-gray-500">Web Designer</p>
    </div>
  </div>
</section>
   

    <Skills />

    <div id="Contact">
    <section className="text-gray-600 body-font relative bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">Contact Me</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">For More Information Contact Me.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SUBMIT</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
</div>

    </div>
  );
}
