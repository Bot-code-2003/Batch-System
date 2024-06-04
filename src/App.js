import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ/FAQ";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./components/MobileMenu";
import Final from "./components/Final";
import Footer from "./components/Footer";
import Rights from "./components/Rights";

const App = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });

  return (
    <div className="App">
      {isSmallDevice ? <MobileMenu /> : <Navbar />}
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      {/* {isSmallDevice ? "" : <Testimonial />} */}
      <FAQ /> 
      <Final />
      <Footer />
      <Rights />
    </div>
  );
};

export default App;
