import { FunctionComponent, useEffect, useRef, useState } from "react";
import BenefitCard from "../components/BenefitCard";

export type BenefitPageType = {
  className?: string;
};

const BenefitPage: FunctionComponent<BenefitPageType> = ({
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const benefits = [
    {
      prop: "01.1",
      title: "Ricerca immediata",
      description:
        "Più utilizzi il nostro il processo di ricerca più esso si abituerà alle tue preferenze e ti farà risparmiare tempo e fatica.",
    },
    {
      prop: "01.2",
      title: "Acquistare su Findora",
      description:
        "Ottieni un servizio su misura per le tue esigenze specifiche in base al tuo progetto.",
      propPadding: "0rem 15rem 0rem 7.5rem",
      propWidth: "unset",
      propFlex: "1",
    },
    {
      prop: "01.3",
      title: "Vendere su Findora",
      description:
        "Creare il tuo servizio è un'opportunità per mostrare il tuo talento e fornire ai clienti tutte le informazioni di cui hanno bisogno per aiutarli a decidere di lavorare con te.",
      propPadding: "0rem 15rem 0rem 7.5rem",
      propWidth: "unset",
      propFlex: "1",
    },
    {
      prop: "01.4",
      title: "Fiducia e sicurezza",
      description:
        "Feedback e sistema di Ranking sono essenziali per il marketplace di Findora. Con le valutazioni, i livelli e il feedback del venditore, abbiamo semplificato l'esame, il confronto e l'acquisto dei servizi di cui hai bisogno.",
      propPadding: "0rem 15rem 0rem 7.5rem",
      propWidth: "unset",
      propFlex: "1",
    },
    {
      prop: "01.5",
      title: "Prendi Ispirazione",
      description:
        "Dai un'occhiata agli splendidi lavori fatti dalla community per trasformare in realtà la tua prossima grande idea.",
      propPadding: "0rem 15rem 0rem 7.5rem",
      propWidth: "unset",
      propFlex: "1",
    },
  ];

  return (
    <div
      ref={ref}
      className={`self-stretch flex flex-col items-start justify-start text-left text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="benefit"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="flex flex-row items-start self-stretch justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div
            className={`relative font-medium z-[1] animate-fade-right animate-once animate-duration-500 animate-delay-0 animate-ease-out ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            }`}
          >
            01
          </div>
          <b
            className={`flex-1 relative text-[4rem] text-bianco-1-findora z-[0]} ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            }`}
          >
            BENEFIT
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-center text-[2rem]">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              prop={benefit.prop}
              ricercaImmediata={benefit.title}
              piUtilizziIlNostroIlProce={benefit.description}
              propPadding={benefit.propPadding}
              propWidth={benefit.propWidth}
              propFlex={benefit.propFlex}
              textClassName={
                inView
                  ? "animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitPage;
