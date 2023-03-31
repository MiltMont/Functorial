import { FC } from "react";
import Container from "./css";

export type Props = {
  variant?: "blue" | "red" | "gray";
  content?: string;
};

const Badge: FC<Props> = ({ variant = "gray", content = "Content" }) => {
  return <Container variant={variant}>{content}</Container>;
};

export default Badge;
