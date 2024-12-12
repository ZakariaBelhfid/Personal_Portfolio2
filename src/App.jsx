import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, StarsCanvas } from "./components";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const Education = React.lazy(() => import("./components/Education"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <StarsCanvas />
          <Education />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;