import { FunctionComponent, useMemo, CSSProperties } from "react";

export type HowToWorkCardType = {
  className?: string;
  creaITuoiServizi?: string;
  offriLeTueCompetenzeEdIni?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  textClassName?: string;
};

const HowToWorkCard: FunctionComponent<HowToWorkCardType> = ({
  className = "",
  creaITuoiServizi,
  offriLeTueCompetenzeEdIni,
  propAlignSelf,
  textClassName = "",
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start p-[1.875rem] gap-[0.937rem] text-center text-[1.5rem] text-bianco-1-findora font-gotham ${className}`}
      style={frameDiv2Style}
    >
      <div
        className={`${textClassName} w-[11.25rem] relative bg-bianco-1-findora h-[11.25rem]`}
      />
      <b
        className={`self-stretch relative flex items-center justify-center h-[3.375rem] shrink-0 ${textClassName}`}
      >
        {creaITuoiServizi}
      </b>
      <div
        className={`w-full relative text-[1.25rem] text-white text-left inline-block min-w-[17.5rem] max-w-[28.125rem] ${textClassName}`}
      >
        {offriLeTueCompetenzeEdIni}
      </div>
    </div>
  );
};

export default HowToWorkCard;
