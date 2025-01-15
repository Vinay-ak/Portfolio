
// Modules

import { ReactLenis } from 'lenis/react'


// Components

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
// import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Work />
      {/* <Review /> */}
      <Contact />
    </main>
    <Footer />
    </ReactLenis>
  );
};

export default App;
