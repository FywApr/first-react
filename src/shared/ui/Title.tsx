import { FC } from "react";

type TTextSize = "text-base" | "text-lg" | "text-xl";
type TBorder = "border-8" | "border-4" | "border-2";
type TColor = "text-white" | "text-black";

interface Props {
  textSize?: TTextSize;
  border?: TBorder;
  color: TColor;
}

export const Title: FC<Props> = function Title(props) {
  const { textSize = "text-base", border = "border-0", color="text-black", ...rest } = props;
  
  return (
    <h1 {...rest} className={`${textSize} ${border} ${color}`}>
      {rest.children}
    </h1>
  );
};
