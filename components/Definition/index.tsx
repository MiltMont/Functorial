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
    p {
      margin: 0;
    }
  `,

  Label: styled.div`
    background-color: ${(p) => p.theme.colors.accent6};

    width: fit-content;
    padding: ${base(1 / 4)} ${base()};
    border-radius: ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} 0 0;
  `,

  Content: styled.div`
    border: 1px solid ${(p) => p.theme.colors.accent6};
    border-radius: 0 ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} ${(p) => p.theme.borderRadius[2]};
    overflow-x: scroll;
    padding: ${(p) => p.theme.space[1]};
  `,
};

const Defnition: FC<Props> = ({ label, id, children }) => {
  return (
    <S.Root id={label ? slugify(label, { lower: true }) : id}>
      <S.Label>
        <Text weight={4} color="background">
          DEFINITION
        </Text>
        {label && (
          <Text size={2} weight={2} color={"background"}>
            {label}
          </Text>
        )}
      </S.Label>
      <S.Content>{children}</S.Content>
    </S.Root>
  );
};

export default Defnition;
