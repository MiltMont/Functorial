import { FC } from "react";
import Style from "./css";

export type Props = {
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  children?: React.ReactNode;
};

const Button: FC<Props> = ({
  variant = "standard",
  fill = "fill",
  children,
}) => (
  <Style fill={fill} variant={variant}>
    {children}
  </Style>
);

export default Button;
