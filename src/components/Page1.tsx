import { FunctionComponent } from "react";
import ListaDattesa from "./ListaDattesa";

export type Page1Type = {
  className?: string;
};

const Page1: FunctionComponent<Page1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="mission"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="self-stretch h-[36.563rem] flex flex-row items-start justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div className="relative font-medium z-[1] animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-out">
            03
          </div>
          <b className="flex-1 relative text-[4rem] text-bianco-1-findora z-[0] animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-out">
            MISSION
          </b>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] gap-[1.875rem] text-center text-[2rem] border-[4px] border-solid border-nero-3-findora">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
            <div className="w-[4.688rem] relative font-medium flex items-center justify-center shrink-0">
              03.1
            </div>
            <b className="flex-1 relative text-[2.25rem] text-bianco-1-findora text-left">
              La nostra mission
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[7.5rem] text-left text-white">
            <div className="w-[37.5rem] flex flex-row items-start justify-start min-w-[22.5rem] max-w-[37.5rem]">
              <b className="relative flex-1">
                <p className="m-0">
                  “Sostenere la crescita e lo sviluppo di carriere e competenze,
                  ispirando la realizzazione dei sogni e la prosperità di
                  creativi in tutto il mondo, attraverso l’utilizzo di nuove
                  tecnologie e meccanismi di gamification.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Il tutto rivoluzionando il sistema della competizione,
                  premiazione e visibilità Basato un sistema di ranking
                  innovativo ,con un’approccio easy-to-use”
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
