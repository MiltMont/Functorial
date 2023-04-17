import { FC, ReactComponentElement } from "react";
import slugify from "slugify";
import Text from "../utils/Text";
import S, { type as envType } from "./css";
import { Color } from "../../styles/Theme";

type Props = {
  type?:
    | "theorem"
    | "definition"
    | "example"
    | "exercise"
    | "proposition"
    | "corollary";
  label?: string;
  id?: string;
  children: ReactComponentElement<any>;
};

const MathEnviroment: FC<Props> = (props) => {
  const { type = "theorem", label, id, children } = props;
  return (
    <S.Root id={label ? slugify(label, { lower: true }) : id}>
      <S.Label type={type}>
        <Text
          weight={4}
          color={envType[type].textColor as Color}
          transform="uppercase"
        >
          {type}
        </Text>
        {label && (
          <Text size={2} weight={2} color={envType[type].textColor as Color}>
            {label}
          </Text>
        )}
      </S.Label>
      <S.Content type={type}>{children}</S.Content>
    </S.Root>
  );
};

export default MathEnviroment;
