import React from "react";

const MyWork = () => {
  return (
    <section id="works" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col flex-grow">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Portafolio</h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
          </div>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;