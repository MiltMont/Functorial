import { FC } from "react";
import Style from "./css";
import Box from "../utils/Box";
import theme from "../../styles/Theme";
import Flex from "../utils/Flex";
import Badge from "../Badge/index";
import { base } from "../../utils/base";
import { RoundButton } from "../graphics/RoundButton";
import Link from "next/link";
import Icon from "../utils/Icon";

type Props = {
  title: string;
  slug: string;
  image?: string;
  docType: string[];
};

const LectureCard: FC<Props> = ({ title, slug, image, docType }) => {
  return (
    <Style.Container>
      <Style.Image />
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          padding: theme.space[1],
          borderRadius: `0 0 ${theme.borderRadius[2]} ${theme.borderRadius[2]}`,
          borderTop: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Style.Title>{title}</Style.Title>
        <Flex justifyContent="space-between" alignItems="end">
          <Flex gap={base(1 / 2)}>
            {docType.map((type, i) => (
              <Badge content={type} variant="warning" key={i} />
            ))}
          </Flex>

          <Icon icon="round-button" href={`lectures/${slug}`} />
        </Flex>
      </Box>
    </Style.Container>
  );
};

export default LectureCard;
