import { FunctionComponent } from "react";

export type FORMVType = {
  className?: string;
};

const FORMV: FunctionComponent<FORMVType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[840px] bg-white max-w-full overflow-hidden flex flex-col items-center justify-center text-center text-45xl text-white font-gotham ${className}`}
    >
      <div className="w-[840px] bg-nero-1-findora box-border flex flex-col items-center justify-center py-[30px] px-0 max-w-[840px] border-[4px] border-solid border-nero-3-findora">
        <div className="self-stretch flex flex-col items-start justify-start py-[5px] px-0 relative gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-start z-[0]">
            <div className="flex-1 flex flex-col items-start justify-start py-[15px] px-0 gap-[30px]">
              <b className="relative self-stretch">LISTA D’ATTESA</b>
              <div className="relative self-stretch text-xl">
                Entra e scopri un mondo di infinite opportunità
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-left text-xl text-gray">
            <div className="flex flex-row flex-wrap items-start self-stretch justify-start">
              <div className="flex-1 flex flex-col items-center justify-start py-2.5 px-0 box-border min-w-[370px] max-h-[80px]">
                <div className="w-full bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[15px] max-w-[370px] border-[1px] border-solid border-bianco-1-findora">
                  <b className="relative flex items-center self-stretch flex-1">
                    Nome
                  </b>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start py-2.5 px-0 box-border min-w-[370px] max-h-[80px]">
                <div className="w-full bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[15px] max-w-[370px] border-[1px] border-solid border-bianco-1-findora">
                  <b className="relative flex items-center self-stretch flex-1">
                    Cognome
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-5 px-10 box-border min-w-[370px] text-center text-base text-bianco-1-findora">
              <div className="self-stretch bg-verde-1-findora h-[60px] flex flex-row items-start justify-start">
                <b className="relative flex items-center self-stretch justify-center flex-1">
                  Seleziona un opzione +
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch justify-start">
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px]">
                <div className="self-stretch bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[15px] border-[1px] border-solid border-bianco-1-findora">
                  <b className="relative flex items-center self-stretch flex-1">
                    Email
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px]">
                <div className="self-stretch bg-nero-3-findora box-border h-[180px] flex flex-row items-start justify-start p-[15px] border-[1px] border-solid border-bianco-1-findora">
                  <b className="relative self-stretch flex-1">
                    Condividi le tue aspettative, suggerimenti, feedback
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px] text-center text-13xl text-white">
              <div className="self-stretch bg-verde-1-findora h-[60px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
                <b className="relative flex items-center self-stretch justify-center flex-1">
                  SUBMIT
                </b>
              </div>
            </div>
          </div>
          <div className="!m-[0] absolute top-[0px] left-[750px] flex flex-row items-start justify-start py-0 px-[30px] z-[2]">
            <img
              className="w-[30px] relative h-[30px]"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FORMV;
