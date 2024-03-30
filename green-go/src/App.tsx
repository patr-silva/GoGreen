import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutus";
import Join from "@/scenes/join";
import OurClasses from "@/scenes/ourclasses";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-white'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Join setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
