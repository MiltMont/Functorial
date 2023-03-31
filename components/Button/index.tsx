import { FC } from "react";
import Style from "./css";

export type Props = {
  variant?: "gray" | "grayOutline";
  children?: React.ReactNode;
};

const Button: FC<Props> = ({ variant = "gray", children }) => (
  <Style variant={variant}>{children}</Style>
);

export default Button;
