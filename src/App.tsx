import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FindoraLandingPage from "./pages/FindoraLandingPage";

const baseUrl =
  process.env.NODE_ENV === "production" ? "/findora-open-beta-react" : "";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Findora Open Beta Local";
        metaDescription = "Findora Open Beta Local Description";
        break;
      case "/findora-open-beta-react/":
        title = "Findora Open Beta";
        metaDescription = "Findora Open Beta Description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path={`${baseUrl}/`} element={<FindoraLandingPage />} />
    </Routes>
  );
}

export default App;
