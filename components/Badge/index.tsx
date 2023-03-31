import { FC } from "react";
import Container from "./css";

export type Props = {
  variant?: "success" | "danger" | "gray" | "warning";
  content?: string;
};

const Badge: FC<Props> = ({ variant = "gray", content = "Content" }) => {
  return <Container variant={variant}>{content}</Container>;
};

export default Badge;
