import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

export type Page2Type = {
  className?: string;
};

const Page2: FunctionComponent<Page2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-center text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="come-funziona"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="flex flex-row items-start self-stretch justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div className="w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 z-[1]">
            02
          </div>
          <b className="relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            <p className="m-0">COME</p>
            <p className="m-0">FUNZIONA</p>
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
              <div className="w-[4.688rem] relative font-medium flex items-center justify-center shrink-0">
                02.1
              </div>
              <b className="flex-1 relative text-[2.25rem] text-bianco-1-findora text-left">
                Per FREELANCER
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-[1.5rem] text-bianco-1-findora">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[1.875rem]">
                <FrameComponent1
                  creaITuoiServizi="Crea i tuoi Servizi"
                  offriLeTueCompetenzeEdIni="Offri le tue competenze ed inizia a guadagnare subito."
                />
                <FrameComponent1
                  creaITuoiServizi="Costruisci la tua reputazione"
                  offriLeTueCompetenzeEdIni="Vendi servizi, accumula punti e scala le classifiche."
                  propAlignSelf="stretch"
                />
                <FrameComponent1
                  creaITuoiServizi="Impara dai migliori"
                  offriLeTueCompetenzeEdIni="Partecipa a workshop esclusivi e ricevi mentoring dai top freelancer del settore."
                  propAlignSelf="unset"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
              <div className="w-[4.688rem] relative font-medium flex items-center justify-center shrink-0">
                02.2
              </div>
              <b className="flex-1 relative text-[2.25rem] text-bianco-1-findora text-left">
                Per UTENTI
              </b>
            </div>
            <div className="flex flex-col items-start self-stretch justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[1.875rem]">
                <FrameComponent1
                  creaITuoiServizi="Trova tutto ciò di cui hai bisogno"
                  offriLeTueCompetenzeEdIni="Entra e ricerca velocemente il servizio più adatto a te tramite L’intelligenza Artificiale."
                  propAlignSelf="unset"
                />
                <FrameComponent1
                  creaITuoiServizi="Esplora le nostre categorie"
                  offriLeTueCompetenzeEdIni="Esplora una vasta gamma di servizi offerti da professionisti qualificati."
                  propAlignSelf="stretch"
                />
                <FrameComponent1
                  creaITuoiServizi="Compra in sicurezza"
                  offriLeTueCompetenzeEdIni="Affidati a recensioni verificate e pagamenti protetti."
                  propAlignSelf="stretch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
