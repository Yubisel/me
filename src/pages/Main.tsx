// import './styles.scss';
import Header from "./partials/Header";
import AboutUs from "./partials/AboutUs";
import Services from "./partials/Services";
import MyWorks from "./partials/MyWorks";
import ContactUs from "./partials/ContactUs";
import Footer from "./partials/Footer";

function Main() {
  return (
    <main className="bg-gray-900">
      <Header />
      <AboutUs />
      <Services />
      <MyWorks />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default Main;
