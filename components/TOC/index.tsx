import { FC } from "react";
import { S } from "./css";
import Icon from "../utils/Icon";
import Text from "../utils/Text";
import { useState } from "react";

type Props = {
  headings: string[];
};

const TOC: FC<Props> = ({ headings }) => {
  const [open, setOpen] = useState(true);

  return (
    <S.Root>
      <S.Label isOpen={open}>
        <Text size={3} weight={4} color="accent8">
          Table of Contents
        </Text>
        <S.IconBox onClick={() => setOpen(!open)}>
          {open ? (
            <Icon icon="close" color="accent4" size={20} />
          ) : (
            <Icon icon="plus" color="accent4" size={20} />
          )}
        </S.IconBox>
      </S.Label>

      <S.List isOpen={open}>
        {headings.map((heading) => (
          <Text size={3} weight={1} color="accent8" key={heading.toLowerCase()}>
            {heading}
          </Text>
        ))}
      </S.List>
    </S.Root>
  );
};

export default TOC;
