import { S } from "./css";
import { FrontMatter } from "../../../lib/mdx";
import { FC } from "react";
import Spacer from "../../utils/Spacer";
import Badge from "../../Badge";
import Text from "../../utils/Text";
import Flex from "../../utils/Flex";
import { base } from "../../../utils/base";

type Props = {
  frontMatter: FrontMatter;
};

const LG: FC<Props> = ({ frontMatter }) => {
  return (
    <S.Root>
      <Spacer size={2} />
      <Badge content={frontMatter.tag} />
      <Text size={7} weight={1}>
        {frontMatter.title}
      </Text>
      <Flex direction="row" gap={base(1)} alignItems="center">
        <Text size={2} weight={1} color={"accent5"}>
          {frontMatter.date}
        </Text>
        <Text size={3} weight={1} color="accent6">
          {frontMatter.summary}
        </Text>
      </Flex>
    </S.Root>
  );
};

export default LG;
