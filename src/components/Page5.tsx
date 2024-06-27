import { FunctionComponent } from "react";

export type Page5Type = {
  className?: string;
};

const Page5: FunctionComponent<Page5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-nero-3-findora flex flex-row items-start justify-start py-[3.75rem] px-[0rem] text-center text-[1rem] text-white font-gotham ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(90deg,_#1ab58a,_#0e8cad)] box-border h-[60rem] flex flex-col items-center justify-center p-[0.937rem] border-[4px] border-solid border-nero-3-findora">
        <div className="flex flex-col items-center self-stretch justify-end flex-1">
          <div className="flex flex-col items-center self-stretch justify-center flex-1">
            <div className="flex flex-row items-center justify-center gap-[3.75rem] animate-fade-down animate-once animate-duration-1000 animate-ease-in-out">
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[11.25rem] relative h-[11.25rem]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[42.188rem] relative h-[9.375rem] "
                  alt=""
                  src="/group-136.svg"
                />
              </div>
            </div>
          </div>
          <div className="opacity-75 animate-bounce">
            <div className="self-stretch flex flex-row items-center justify-center p-[0.625rem] ">
              <b className="relative">
                <p className="m-0">Scorri e scopri un mondo</p>
                <p className="m-0"> di infinite opportunità</p>
              </b>
            </div>
            <div className="flex flex-col items-center self-stretch justify-end ">
              <img
                className="w-[0.938rem] relative h-[0.938rem] object-contain"
                alt=""
                src="/polygon-5.svg"
              />
              <img
                className="w-[0.938rem] relative h-[0.938rem] object-contain"
                alt=""
                src="/polygon-5.svg"
              />
              <img
                className="w-[0.938rem] relative h-[0.938rem] object-contain"
                alt=""
                src="/polygon-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
