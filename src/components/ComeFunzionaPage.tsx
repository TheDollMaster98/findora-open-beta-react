import { FunctionComponent, useEffect, useRef, useState } from "react";
import HowToWorkCard from "./HowToWorkCard";

export type ComeFunzionaPageType = {
  className?: string;
};

const ComeFunzionaPage: FunctionComponent<ComeFunzionaPageType> = ({
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

  const freelancerBenefits = [
    {
      prop: "02.1",
      title: "Per FREELANCER",
      benefits: [
        {
          creaITuoiServizi: "Crea i tuoi Servizi",
          offriLeTueCompetenzeEdIni:
            "Offri le tue competenze ed inizia a guadagnare subito.",
        },
        {
          creaITuoiServizi: "Costruisci la tua reputazione",
          offriLeTueCompetenzeEdIni:
            "Vendi servizi, accumula punti e scala le classifiche.",
          propAlignSelf: "stretch",
        },
        {
          creaITuoiServizi: "Impara dai migliori",
          offriLeTueCompetenzeEdIni:
            "Partecipa a workshop esclusivi e ricevi mentoring dai top freelancer del settore.",
          propAlignSelf: "unset",
        },
      ],
    },
  ];

  const userBenefits = [
    {
      prop: "02.2",
      title: "Per UTENTI",
      benefits: [
        {
          creaITuoiServizi: "Trova tutto ciò di cui hai bisogno",
          offriLeTueCompetenzeEdIni:
            "Entra e ricerca velocemente il servizio più adatto a te tramite L’intelligenza Artificiale.",
          propAlignSelf: "unset",
        },
        {
          creaITuoiServizi: "Esplora le nostre categorie",
          offriLeTueCompetenzeEdIni:
            "Esplora una vasta gamma di servizi offerti da professionisti qualificati.",
          propAlignSelf: "stretch",
        },
        {
          creaITuoiServizi: "Compra in sicurezza",
          offriLeTueCompetenzeEdIni:
            "Affidati a recensioni verificate e pagamenti protetti.",
          propAlignSelf: "stretch",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className={`self-stretch flex flex-col items-start justify-start text-center text-[2.5rem] text-nero-3-findora font-gotham ${className}`}
      data-scroll-to="come-funziona"
    >
      <div className="self-stretch bg-nero-3-findora h-[3.75rem]" />
      <div className="flex flex-row items-start self-stretch justify-start">
        <div className="self-stretch flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-[1.875rem] pr-[0rem] pl-[1.875rem] gap-[0.937rem] min-w-[41.25rem] max-w-[41.25rem] border-[4px] border-solid border-nero-3-findora">
          <div
            className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 z-[1] ${
              inView
                ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            }`}
          >
            02
          </div>
          <b className="relative text-[4rem] text-bianco-1-findora text-left z-[0]">
            <p
              className={`m-0 ${
                inView
                  ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                  : ""
              }`}
            >
              COME
            </p>
            <p
              className={`m-0 ${
                inView
                  ? "animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                  : ""
              }`}
            >
              FUNZIONA
            </p>
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-[2rem]">
          {/* PER FREELENCER */}
          {freelancerBenefits.map((section, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora"
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
                <div
                  className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  }`}
                >
                  {section.prop}
                </div>
                <b
                  className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  }`}
                >
                  {section.title}
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[1.5rem] text-bianco-1-findora">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[1.875rem]">
                  {section.benefits.map((benefit, idx) => (
                    <HowToWorkCard
                      key={idx}
                      creaITuoiServizi={benefit.creaITuoiServizi}
                      offriLeTueCompetenzeEdIni={
                        benefit.offriLeTueCompetenzeEdIni
                      }
                      propAlignSelf={benefit.propAlignSelf}
                      textClassName={
                        inView
                          ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                          : ""
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* PER UTENTI */}
          {userBenefits.map((section, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col items-start justify-start p-[1.875rem] gap-[1.875rem] border-[4px] border-solid border-nero-3-findora"
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
                <div
                  className={`w-[4.688rem] relative font-medium flex items-center justify-center shrink-0 ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  }`}
                >
                  {section.prop}
                </div>
                <b
                  className={`flex-1 relative text-[2.25rem] text-bianco-1-findora text-left ${
                    inView
                      ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                      : ""
                  }`}
                >
                  {section.title}
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[1.5rem] text-bianco-1-findora">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] gap-[1.875rem]">
                  {section.benefits.map((benefit, idx) => (
                    <HowToWorkCard
                      key={idx}
                      creaITuoiServizi={benefit.creaITuoiServizi}
                      offriLeTueCompetenzeEdIni={
                        benefit.offriLeTueCompetenzeEdIni
                      }
                      propAlignSelf={benefit.propAlignSelf}
                      textClassName={
                        inView
                          ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                          : ""
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComeFunzionaPage;
