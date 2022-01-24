import React from "react";

const ContactUs = () => {
  return (
    <section id="contacts">
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-24 pb-4 mx-auto">
          <div className="text-center mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Contáctenos</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0 bg-gray-900">
          {/* style="filter: grayscale(1) contrast(1.2) opacity(0.16);" */}
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7807.307887683923!2d-56.61779607583709!3d-34.64034380088787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1cb0902e0937af5a!2sMicro%20Macro%20LIBERTAD!5e0!3m2!1sen!2suy!4v1642890159021!5m2!1sen!2suy" width="100%" height="100%" frameBorder="0" loading="lazy"></iframe>
          {/* <iframe title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" height="100%" frameborder="0"></iframe> */}
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <div className="bg-gray-900 relative flex flex-wrap py-12 rounded shadow-md">
              <div className="px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">Dirección</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                {/* </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0"> */}
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">Email</h2>
                <a href="#link" className="text-indigo-400 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">Teléfono</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;