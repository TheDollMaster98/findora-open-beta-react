import { FunctionComponent, useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import PresentazionePage from "../components/PresentazionePage";
import BenefitPage from "../components/BenefitPage";
import ComeFunzionaPage from "../components/ComeFunzionaPage";
import MissionePage from "../components/MissionePage";
import FAQPage from "../components/FAQPage";
import Navbar from "../components/Navbar";
import ListaDattesa from "../components/ListaDattesa";

const FindoraLandingPage: FunctionComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbarTop, setNavbarTop] = useState(0);

  const handleScroll = () => {
    if (window.scrollY >= navbarTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    if (navbar) {
      setNavbarTop(navbar.offsetTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarTop]);

  return (
    <div className="relative flex flex-col items-start justify-start w-full overflow-hidden bg-nero-1-findora">
      {/* LOGO */}
      <HomePage />
      <ListaDattesa />
      {/* NAVBAR */}
      <div
        className={`navbar w-full bg-nero-3-findora flex-row items-center justify-center text-center text-17xl text-white font-gotham ${
          isSticky ? "fixed top-0 z-50" : ""
        }`}
      >
        <Navbar />
        {/* <div className="bg-verde-1-findora h-[1rem]"></div> */}
      </div>

      {/* PRESENTAZIONE */}
      <PresentazionePage />
      {/* BENEFIT: */}
      <BenefitPage />
      {/* COME FUNZIONA */}
      <ComeFunzionaPage />
      {/* MISSION */}
      <MissionePage />
      <ListaDattesa />
      {/* F.A.Q. */}
      <FAQPage />
      <div className="self-stretch bg-nero-3-findora h-[22.5rem]" />
    </div>
  );
};

export default FindoraLandingPage;
