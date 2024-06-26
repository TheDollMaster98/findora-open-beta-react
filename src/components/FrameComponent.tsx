import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  cosFindora?: string;
  findoraUnaMarketplaceCheM?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  prop,
  cosFindora,
  findoraUnaMarketplaceCheM,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] text-center text-[2rem] text-nero-3-findora font-gotham border-[4px] border-solid border-nero-3-findora ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[4.688rem] relative font-medium flex items-center justify-center shrink-0">
            {prop}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[3.75rem] pl-[1.875rem] gap-[0.937rem] text-left text-[1.5rem] text-bianco-1-findora">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.875rem]">
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="w-[4rem] relative box-border h-[0.25rem] border-t-[4px] border-solid border-verde-1-findora" />
            </div>
            <b className="flex-1 relative">{cosFindora}</b>
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.875rem] relative h-[0.469rem]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[7.5rem] text-[1.25rem]">
            <div className="flex-1 relative">{findoraUnaMarketplaceCheM}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
