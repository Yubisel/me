import { faGithub, faLinkedin, faGitlab, faBitbucket } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="#link" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img alt="feature" className="object-cover object-center" width="60px" height="60px" src="images/logo-rounded.png" />
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Ing. Yubisel Vega Alvarez</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="#link" className="ml-5 text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a href="#link" className="ml-5 text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#link" className="ml-5 text-gray-400">
            <FontAwesomeIcon icon={faGitlab} size="2x" />
          </a>
          <a href="#link" className="ml-5 text-gray-400">
            <FontAwesomeIcon icon={faBitbucket} size="2x"/>
          </a>
        </span>
      </div>
    </footer>
  );
};


export default Footer;