import { FC, HTMLAttributes } from "react";

type TBorder = "border-2";
type TColor = "text-white" | "text-black";
interface Props extends HTMLAttributes<HTMLParagraphElement>{
  border?: TBorder;
  color?: TColor;
}

export const Paragraph: FC<Props> = function Paragraph(props) {
  const { border = "border-0", color = "text-black", ...rest } = props;

  return (
    <p {...rest} className={`${border} ${color}`}>
      {rest.children}
    </p>
  );
};
