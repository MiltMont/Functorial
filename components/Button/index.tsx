import { FC } from "react";
import Style from "./css";
import Link from "next/link";
import { MouseEventHandler } from "react";

export type Props = {
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  children?: React.ReactNode;
  width?: "full" | "auto";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({
  variant = "standard",
  fill = "fill",
  width = "auto",
  href,
  children,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        <Style fill={fill} variant={variant} width={width}>
          {children}
        </Style>
      </Link>
    );
  } else {
    return (
      <Style fill={fill} variant={variant} width={width} onClick={onClick}>
        {children}
      </Style>
    );
  }
};

export default Button;
