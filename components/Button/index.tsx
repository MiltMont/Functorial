import { FC } from "react";
import Style from "./css";
import Link from "next/link";

export type Props = {
  variant?: "standard" | "success" | "warning" | "error";
  fill?: "fill" | "outline";
  children?: React.ReactNode;
  width?: "full" | "auto";
  href?: string;
};

const Button: FC<Props> = ({
  variant = "standard",
  fill = "fill",
  width = "auto",
  href,
  children,
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
      <Style fill={fill} variant={variant} width={width}>
        {children}
      </Style>
    );
  }
};

export default Button;
