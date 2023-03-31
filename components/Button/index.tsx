import { FC } from "react";
import Style from "./css";

export type Props = {
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  children?: React.ReactNode;
  width?: "full" | "auto";
};

const Button: FC<Props> = ({
  variant = "standard",
  fill = "fill",
  width = "auto",
  children,
}) => (
  <Style fill={fill} variant={variant} width={width}>
    {children}
  </Style>
);

export default Button;
