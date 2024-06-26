import { FunctionComponent } from "react";
import Page5 from "../components/Page5";
import Page4 from "../components/Page4";
import Page3 from "../components/Page3";
import Page2 from "../components/Page2";
import Page1 from "../components/Page1";
import Page from "../components/Page";

const FindoraLandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-nero-1-findora h-[431.25rem] overflow-hidden flex flex-col items-start justify-start">
      <Page5 />
      <Page4 />
      <Page3 />
      <Page2 />
      <Page1 />
      <Page />
      <div className="self-stretch bg-nero-3-findora h-[22.5rem]" />
    </div>
  );
};

export default FindoraLandingPage;
