import styled from "styled-components";
import { base } from "../../utils/base";

type Props = {
  type?:
    | "theorem"
    | "definition"
    | "example"
    | "exercise"
    | "proposition"
    | "corollary";
};

export const type = {
  theorem: {
    textColor: "background",
    color: "brand",
  },
  definition: {
    textColor: "accent7",
    color: "successDark",
  },
  proposition: {
    textColor: "background",
    color: "warning",
  },
  corollary: {
    textColor: "background",
    color: "accent6",
  },
  example: {
    textColor: "foreground",
    color: "success",
  },
  exercise: {
    textColor: "dangerLight",
    color: "danger",
  },
};

const S = {
  Root: styled.div`
    margin-bottom: ${(p) => p.theme.space[1]};
    p {
      margin: 0;
    }
  `,

  Label: styled.div<Props>`
    background-color: ${(p) => p.theme.colors[type[p.type].color]};

    width: fit-content;
    padding: ${base(1 / 4)} ${base()};
    border-radius: ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} 0 0;
  `,

  Content: styled.div<Props>`
    border: 1px solid ${(p) => p.theme.colors[type[p.type].color]};
    border-radius: 0 ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} ${(p) => p.theme.borderRadius[2]};
    overflow-x: scroll;
    padding: ${(p) => p.theme.space[1]};
  `,
};

export default S;
