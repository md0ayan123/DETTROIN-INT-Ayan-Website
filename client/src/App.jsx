import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import GrowthPath from "./components/GrowthPath.jsx";
import WhyUs from "./components/WhyUs.jsx";
import SchoolLife from "./components/SchoolLife.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Admissions from "./components/Admissions.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import FloatContact from "./components/FloatContact.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <index>
        <Hero />
        <About />
        <GrowthPath />
        <WhyUs />
        <SchoolLife />
        <Testimonials />
        <Admissions />
        <FAQ />
      </index>
      <Footer />
      <FloatContact />
    </>
  );
}

