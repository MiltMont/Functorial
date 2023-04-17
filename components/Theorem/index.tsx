import { FC, ReactComponentElement } from "react";
import styled from "styled-components";
import slugify from "slugify";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";
import Text from "../utils/Text";

type Props = {
  label?: string;
  id?: string;
  children: ReactComponentElement<any>;
};

const S = {
  Root: styled.div`
    margin-bottom: ${(p) => p.theme.space[1]};
  `,

  Label: styled.div`
    background-color: ${(p) => p.theme.colors.warning};

    width: fit-content;
    padding: ${base(1 / 4)};
    border-radius: ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} 0 0;
  `,

  Content: styled.div`
    border: 1px solid ${(p) => p.theme.colors.warning};
    border-radius: 0 ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} ${(p) => p.theme.borderRadius[2]};
    overflow-x: scroll;
    padding: ${(p) => p.theme.space[1]};
  `,
};

const Theorem: FC<Props> = ({ label, id, children }) => {
  return (
    <S.Root id={label ? slugify(label, { lower: true }) : id}>
      <S.Label>
        <Text weight={4} color="background">
          THEOREM
        </Text>
        {label && (
          <Text size={2} weight={1} color={"background"}>
            {label}
          </Text>
        )}
      </S.Label>
      <S.Content>{children}</S.Content>
    </S.Root>
  );
};

const The: FC<Props> = ({ label, children, id }) => {
  return (
    <div
      id={label ? slugify(label, { lower: true }) : id}
      style={{ marginBottom: theme.space[1] }}
    >
      {label && (
        <div
          style={{
            backgroundColor: theme.colors.accent3,
            width: "fit-content",
            padding: base(1 / 4),
            borderRadius: `${theme.borderRadius[2]} ${theme.borderRadius[2]} 0 0`,
          }}
        >
          <Text size={2} weight={1} color={"foreground"}>
            {label}
          </Text>
        </div>
      )}
      <div
        style={{
          border: `1px solid ${theme.colors.accent3}`,
          borderRadius: label
            ? `0  ${theme.borderRadius[2]} ${theme.borderRadius[2]} ${theme.borderRadius[2]}`
            : theme.borderRadius[2],
          overflowX: "scroll",
          padding: theme.space[1],
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Theorem;
