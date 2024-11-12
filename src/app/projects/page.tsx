import Image from "next/image";
import Link from "next/link";



export default function Projects () {
    return (
        <div>
            <section className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-200 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/assets/images/sample1.jpg"/>
        <div className="text-center relative z-10 w-full">
          <h2 className=" py-5 text-3xl text-gray-900 font-bold title-font mb-2">ARCHITECT WEBSITE</h2>
          
        </div>
        </div>



        <div className="flex flex-wrap w-full bg-gray-200 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/assets/images/sample2.jpg"/>
        <div className="text-center relative z-10 w-full">
          <h2 className=" py-5 text-3xl text-gray-900 font-bold title-font mb-2">BLOGGING WEBSITE</h2>
         
          
        </div>
        </div>



        <div className="flex flex-wrap w-full bg-gray-200 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/assets/images/sample3.jpg"/>
        <div className="text-center relative z-10 w-full">
          <h2 className=" py-5 text-3xl text-gray-900 font-bold title-font mb-2">TRAVEL WEBSITE</h2>
         
          
          
        </div>
        </div>
      
        
    </div>
  </div>
</section>










        </div>
    )
}