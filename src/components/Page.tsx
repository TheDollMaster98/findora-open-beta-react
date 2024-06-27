import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  const faqItems = [
    {
      prop: "04.1",
      question: "Cos'è Findora?",
      answer:
        "Findora è una Marketplace che mette in contatto clienti e professionisti in vari settori, come Grafica e Design, Digital Marketing, Scrittura e Traduzione, Video e Animazioni, Servizi per la Casa e altri.",
    },
    {
      prop: "04.2",
      question: "Quando sarà disponibile Findora sul mercato?",
      answer:
        "Stiamo lavorando duramente per portare il nostro servizio sul mercato il prima possibile. Iscriviti alla lista d'attesa e ti invieremo a breve tutte le informazioni sul lancio.",
    },
    {
      prop: "04.3",
      question: "Quale sarà il costo di Findora?",
      answer:
        "Findora è completamente gratuita. I partecipanti possono accedere alla piattaforma e utilizzarla senza alcun costo.",
    },
    {
      prop: "04.4",
      question:
        "Quali sono i requisiti per diventare un Freelancer su Findora?",
      answer:
        "Per diventare un professionista su Findora, devi avere competenze ed esperienza nel settore in cui desideri offrire i tuoi servizi. La piattaforma verifica attentamente i professionisti che si iscrivono per assicurarsi che siano qualificati e affidabili.",
    },
    {
      prop: "04.5",
      question:
        "Come posso migliorare le mie possibilità di successo su Findora?",
      answer:
        "Per migliorare le tue possibilità di successo su Findora, è importante offrire un servizio di alta qualità, mantenere una comunicazione aperta e tempestiva con i clienti e rispettare le scadenze. Inoltre, aggiornare regolarmente il tuo profilo e il tuo portfolio, chiedere recensioni positive dai clienti e promuovere i tuoi servizi su altri canali può aiutarti ad attrarre più clienti e a far crescere il tuo business.",
    },
    {
      prop: "04.6",
      question: "Chi c'è dietro al progetto?",
      answer:
        "Findora è composta da gruppi di giovani con la voglia di rivoluzionare il modo in cui le persone si approcciano alla ricerca ed acquisto dei servizi. L’azienda è guidata dai suoi Founders, Edoardo C. Marcotulli e Federico D’Armini.",
    },
  ];

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-center text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="faq"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="flex flex-row items-start self-stretch justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div className="relative font-medium z-[1]">04</div>
          <b className="flex-1 relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            F.A.Q.
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-[2rem]">
          {faqItems.map((item, index) => (
            <FrameComponent
              key={index}
              prop={item.prop}
              cosFindora={item.question}
              findoraUnaMarketplaceCheM={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
