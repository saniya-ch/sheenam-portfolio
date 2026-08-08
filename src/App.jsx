import Cursor from "./components/Cursor";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <Cursor />

      {!loading && (
        
        <>
          <Navbar />

          <Hero />

          <About />

          <Work />

          <Experience />

          <Toolkit />

          <Contact />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;