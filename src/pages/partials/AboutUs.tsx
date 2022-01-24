import React from "react";

const AboutUs = () => {
  return ( 
    <section id="about-us" className="diagonal-box mb-12">
      <img alt="feature" className="object-cover object-center absolute left-0 z-10 bottom-20" src="images/barbero.png" />
      <div className="content">
        <section className="text-gray-400 body-font">
          <div className="container px-5 pt-24 pb-4 mx-auto">
            <div className="text-center mb-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Quienes somos</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white text-opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley emaining essentially unchanged.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;