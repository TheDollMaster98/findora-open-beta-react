import { FunctionComponent, useCallback } from "react";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div
      className={`w-[1918px] bg-nero-3-findora max-w-full flex flex-row items-center justify-start text-center text-17xl text-white font-gotham ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[60px]">
        <b className="relative">Findora</b>
      </div>
      <div className="flex-1 h-[60px] overflow-hidden flex flex-row items-center justify-end gap-[10px] text-xl">
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
          <div
            className="self-stretch flex flex-row items-center justify-center p-2.5 cursor-pointer"
            data-scroll-to="frameContainer"
            onClick={onFrameContainerClick}
          >
            <div className="relative font-medium">Benefit</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="relative font-medium">Come funziona</div>
          </div>
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative font-medium">Mission</div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center p-2.5">
            <div className="relative font-medium">F.A.Q</div>
          </div>
        </div>
        <div className="self-stretch bg-verde-1-findora flex flex-row items-center justify-center py-0 px-[60px] text-5xl">
          <b className="relative">LISTA D’ATTESA</b>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
