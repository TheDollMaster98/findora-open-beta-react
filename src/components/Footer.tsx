import { FunctionComponent } from "react";
import { socialLinks } from "../model/social";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`bg-nero-1-findora box-border max-w-full h-[480px] flex flex-row items-start justify-center p-[60px] gap-[60px] text-left text-5xl text-white font-gotham border-[4px] border-solid border-nero-3-findora self-stretch ${className}`}
    >
      <div className="w-[360px] flex flex-col items-center justify-start gap-[30px] max-w-[360px]">
        <div className="flex flex-col items-center self-stretch justify-center">
          <b className="relative">CONTATTI</b>
        </div>
        <div className="flex flex-row items-center self-stretch justify-center text-verde-1-findora">
          <a
            href="mailto:info.findora@gmail.com"
            className="relative font-medium no-underline text-verde-1-findora"
          >
            info.findora@gmail.com
          </a>
        </div>
      </div>
      <div className="w-[360px] flex flex-col items-center justify-start gap-[30px] max-w-[360px]">
        <div className="flex flex-col items-center self-stretch justify-center">
          <b className="relative">PRIVACY</b>
        </div>
        <div className="flex flex-row items-center self-stretch justify-center">
          <div className="w-60 relative bg-gainsboro h-[60px]">
            {"  TASTO IUBENTA"}
          </div>
        </div>
      </div>
      <div className="w-[360px] flex flex-col items-center justify-start gap-[30px] max-w-[360px]">
        <div className="flex flex-col items-center self-stretch justify-center">
          <b className="relative">SOCIAL</b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-row items-center self-stretch justify-center"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[45px] relative h-[45px] overflow-hidden shrink-0"
                  alt={link.alt}
                  src={link.src}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
