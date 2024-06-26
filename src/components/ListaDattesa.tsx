import { FunctionComponent } from "react";

export type ListaDattesaType = {
  className?: string;
};

const ListaDattesa: FunctionComponent<ListaDattesaType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center text-center text-[4rem] text-white font-gotham ${className}`}
    >
      <div className="self-stretch box-border h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />
      <div className="self-stretch bg-verde-1-findora h-[11.25rem] flex flex-row items-center justify-center">
        <b className="self-stretch flex-1 relative flex items-center justify-center">
          LISTA D’ATTESA
        </b>
      </div>
      <div className="self-stretch box-border h-[1.875rem] border-[4px] border-solid border-nero-3-findora" />
    </div>
  );
};

export default ListaDattesa;
