import { FunctionComponent } from "react";
import ListaDattesa from "./ListaDattesa";
import Navbar from "./Navbar";

export type Page4Type = {
  className?: string;
};

const Page4: FunctionComponent<Page4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-center text-[4rem] text-white font-gotham ${className}`}
    >
      <div className="bg-verde-1-findora h-[1rem]"></div>
      <div className="self-stretch flex flex-col items-center justify-start pt-[1.875rem] px-[0rem] pb-[3.75rem] text-[2.5rem] text-nero-3-findora border-[4px] border-solid border-nero-3-findora">
        <div className="flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.875rem] gap-[0.937rem] lg:flex-row lg:gap-[0.938rem] lg:items-start lg:justify-start md:flex-row md:gap-[0.938rem] md:items-start md:justify-center sm:flex-row sm:gap-[0.938rem] sm:items-start sm:justify-center">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium">00</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center text-left text-[4rem] text-bianco-1-findora">
              <b className="relative flex-1">La nostra presentazione</b>
            </div>
          </div>
          <div className="w-[67.5rem] relative bg-gainsboro h-[37.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default Page4;
