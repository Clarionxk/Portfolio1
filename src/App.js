import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
   <NavBar />
   <Home />
   <About />
   <Services />
   <Experience />
   <Contact />

  

   <SocialLinks />
    </div>
  );
}


export default App;

