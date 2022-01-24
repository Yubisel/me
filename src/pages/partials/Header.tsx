import React, { useEffect, useState } from "react";
import MenuLink from "../components/MenuLink";

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState("");
  const handleScroll = () => {
    if (window.scrollY <= 120) {
      setHeaderBackground("");
    } else {
      setHeaderBackground("bg-black bg-opacity-80");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${headerBackground} text-white body-font fixed top-0 z-50 w-full`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#link" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img alt="feature" className="object-cover object-center" width="60px" height="60px" src="images/logo-rounded.png" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <MenuLink to="#home" desccription="Inicio" />
            <MenuLink to="#about-us" desccription="Sobre me" />
            <MenuLink to="#services" desccription="Experiencia" />
            <MenuLink to="#works" desccription="Mis trabajos" />
            <MenuLink to="#contacts" desccription="Contáctenos" />
          </nav>
        </div>
      </header>
      <div id="home" className="w-full bg-cover bg-center" style={{ height: "100vh", backgroundImage: "url(images/landing-background.jpg)" }}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-70">
          <img alt="feature" className="object-cover object-center" src="images/logo.png" />
        </div>
      </div>
    </>
  );
};

export default Header;