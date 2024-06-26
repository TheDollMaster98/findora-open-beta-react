import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-center text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div className="relative font-medium z-[1]">04</div>
          <b className="flex-1 relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            F.A.Q.
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-[2rem]">
          <FrameComponent
            prop="04.1"
            cosFindora="Cos'è Findora?"
            findoraUnaMarketplaceCheM="Findora è una Marketplace che mette in contatto clienti e professionisti in vari settori, come Grafica e Design, Digital Marketing, Scrittura e Traduzione, Video e Animazioni, Servizi per la Casa e altri."
          />
          <FrameComponent
            prop="04.2"
            cosFindora="Quando sarà disponibile Findora sul mercato?"
            findoraUnaMarketplaceCheM="Stiamo lavorando duramente per portare il nostro servizio sul mercato il prima possibile. Iscriviti alla lista d'attesa e ti invieremo a breve tutte le informazioni sul lancio."
          />
          <FrameComponent
            prop="04.3"
            cosFindora="Quale sarà il costo di Findora?"
            findoraUnaMarketplaceCheM="Findora è completamente gratuita. I partecipanti possono accedere alla piattaforma e utilizzarla senza alcun costo."
          />
          <FrameComponent
            prop="04.4"
            cosFindora="Quali sono i requisiti per diventare un Freelancer su Findora?"
            findoraUnaMarketplaceCheM="Per diventare un professionista su Findora, devi avere competenze ed esperienza nel settore in cui desideri offrire i tuoi servizi. La piattaforma verifica attentamente i professionisti che si iscrivono per assicurarsi che siano qualificati e affidabili."
          />
          <FrameComponent
            prop="04.5"
            cosFindora="Come posso migliorare le mie possibilità di successo su Findora?"
            findoraUnaMarketplaceCheM="Per migliorare le tue possibilità di successo su Findora, è importante offrire un servizio di alta qualità, mantenere una comunicazione aperta e tempestiva con i clienti e rispettare le scadenze. Inoltre, aggiornare regolarmente il tuo profilo e il tuo portfolio, chiedere recensioni positive dai clienti e promuovere i tuoi servizi su altri canali può aiutarti ad attrarre più clienti e a far crescere il tuo business."
          />
          <FrameComponent
            prop="04.6"
            cosFindora="Chi c'è dietro al progetto?"
            findoraUnaMarketplaceCheM="Findora è composta da gruppi di giovani con la voglia di rivoluzionare il modo in cui le persone si approcciano alla ricerca ed acquisto dei servizi. L’azienda è guidata dai suoi Founders, Edoardo C. Marcotulli e Federico D’Armini."
          />
          <div className="self-stretch flex flex-col items-start justify-start py-[1.875rem] pr-[3.75rem] pl-[1.875rem] text-left border-[4px] border-solid border-nero-3-findora">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative font-medium">{`PER DOLL & MERC`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[1.875rem] text-[1.5rem] text-bianco-1-findora">
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.875rem]">
                  <div className="self-stretch flex flex-col items-center justify-center">
                    <div className="w-[4rem] relative box-border h-[0.25rem] border-t-[4px] border-solid border-verde-1-findora" />
                  </div>
                  <b className="flex-1 relative">
                    Quando sarà disponibile Findora sul mercato?
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[1.875rem] relative h-[1.875rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
