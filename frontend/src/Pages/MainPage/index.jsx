import React from "react";
import HeroSection from "./HeroSection";
import Partner from "./Partner";
import About from "./About";
import Services from "./Services";
import Seo from "./Seo";
import Slider from "./Slider";
import Team from "./Team";
import Projects from "./Projects";
import Process from "./Process";
import Testimonials from "./Testimonials";
import News from "./News";
import Down from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Partner />
      <About id="about" />
      <Services id="services" />
      <Seo />
      <Slider />
      <Team />
      <Projects />
      <Process />
      <Testimonials />
      <News />
      <Down />
    </div>
  );
};

export default Home;
