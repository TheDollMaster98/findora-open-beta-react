import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

export type Page3Type = {
  className?: string;
};

const Page3: FunctionComponent<Page3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div className="relative font-medium z-[1]">01</div>
          <b className="flex-1 relative text-[4rem] text-bianco-1-findora z-[0]">
            BENEFIT
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-center text-[2rem]">
          <FrameComponent2
            prop="01.1"
            ricercaImmediata="Ricerca immediata"
            piUtilizziIlNostroIlProce="Più utilizzi il nostro il processo di ricerca più esso si abituerà alle tue preferenze e ti farà risparmiare tempo e fatica."
          />
          <FrameComponent2
            prop="01.2"
            ricercaImmediata="Acquistare su Findora"
            piUtilizziIlNostroIlProce="Ottieni un servizio su misura per le tue esigenze specifiche in base al tuo progetto."
            propPadding="0rem 15rem 0rem 7.5rem"
            propWidth="unset"
            propFlex="1"
          />
          <FrameComponent2
            prop="01.3"
            ricercaImmediata="Vendere su Findora"
            piUtilizziIlNostroIlProce="Creare il tuo servizio è un'opportunità per mostrare il tuo talento e fornire ai clienti tutte le informazioni di cui hanno bisogno per aiutarli a decidere di lavorare con te."
            propPadding="0rem 15rem 0rem 7.5rem"
            propWidth="unset"
            propFlex="1"
          />
          <FrameComponent2
            prop="01.4"
            ricercaImmediata="Fiducia e sicurezza"
            piUtilizziIlNostroIlProce="Feedback e sistema di Ranking sono essenziali per il marketplace di Findora. Con le valutazioni, i livelli e il feedback del venditore, abbiamo semplificato l'esame, il confronto e l'acquisto dei servizi di cui hai bisogno."
            propPadding="0rem 15rem 0rem 7.5rem"
            propWidth="unset"
            propFlex="1"
          />
          <FrameComponent2
            prop="01.5"
            ricercaImmediata="Prendi Ispirazione"
            piUtilizziIlNostroIlProce="Dai un'occhiata agli splendidi lavori fatti dalla community per trasformare in realtà la tua prossima grande idea."
            propPadding="0rem 15rem 0rem 7.5rem"
            propWidth="unset"
            propFlex="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
