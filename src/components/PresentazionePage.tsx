import { FunctionComponent, useEffect, useRef, useState } from "react";

export type PresentazionePageType = {
  className?: string;
};

const PresentazionePage: FunctionComponent<PresentazionePageType> = ({
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

  return (
    <div
      ref={ref}
      className={`self-stretch flex flex-col items-start justify-start text-center text-[4rem] text-white font-gotham ${className}`}
    >
      <div className="bg-verde-1-findora h-[1rem]"></div>
      <div className="self-stretch flex flex-col items-center justify-start pt-[1.875rem] px-[0rem] pb-[3.75rem] text-[2.5rem] text-nero-3-findora border-[4px] border-solid border-nero-3-findora">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.875rem] gap-[0.937rem] lg:flex-row lg:gap-[0.938rem] lg:items-start lg:justify-start md:flex-row md:gap-[0.938rem] md:items-start md:justify-center sm:flex-row sm:gap-[0.938rem] sm:items-start sm:justify-center ${
              inView
                ? "animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-out"
                : ""
            }`}
          >
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium">00</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center text-left text-[4rem] text-bianco-1-findora">
              <b className="relative flex-1">La nostra presentazione</b>
            </div>
          </div>
          <div
            className={`w-[67.5rem] relative bg-gainsboro h-[37.5rem] ${
              inView
                ? "animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out"
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentazionePage;
