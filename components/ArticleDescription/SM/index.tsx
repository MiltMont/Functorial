import Text from "../../utils/Text";
import Flex from "../../utils/Flex";
import Badge from "../../Badge";
import { FrontMatter } from "../../../lib/mdx";
import { FC } from "react";
import { base } from "../../../utils/base";
import { S } from "./css";

type Props = {
  frontMatter: FrontMatter;
};

const SM: FC<Props> = ({ frontMatter }) => {
  return (
    <S.Root>
      <Flex direction="row" gap={base(1)} alignItems="center">
        <Badge content={frontMatter.tag} />
        <Text size={2} weight={1} color={"accent5"}>
          {frontMatter.date}
        </Text>
      </Flex>
      <Text size={7} weight={1} mt={1}>
        {frontMatter.title}
      </Text>
      <Text size={3} weight={1} color="accent6" mt={1} mb={1}>
        {frontMatter.summary}
      </Text>

      <S.HR />
    </S.Root>
  );
};

export default SM;
