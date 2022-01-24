import Header from "./partials/Header";
import AboutUs from "./partials/AboutUs";
import Experience from "./partials/Experience";
import MyWorks from "./partials/MyWorks";
import Education from "./partials/Education";
import Footer from "./partials/Footer";

function Main() {
  return (
    <main className="bg-gray-900">
      <Header />
      <AboutUs />
      <Experience />
      <MyWorks />
      <Education />
      <Footer />
    </main>
  );
}

export default Main;
