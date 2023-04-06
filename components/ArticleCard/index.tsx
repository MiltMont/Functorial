import { FC } from "react";
import theme from "../../styles/Theme";
import Box from "../utils/Box";
import { RoundButton } from "../graphics/RoundButton";
import Flex from "../utils/Flex";
import Badge from "../Badge";
import { Card } from "./css";
import Link from "next/link";
import Icon from "../utils/Icon";

type Props = {
  title: string;
  summary: string;
  date: string;
  image?: string;
  slug: string;
  tag: string;
};

const ArticleCard: FC<Props> = ({ title, summary, date, slug, tag }) => {
  return (
    <Card.Container>
      <Card.Image />
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          padding: theme.space[1],
          borderRadius: `0 0 ${theme.borderRadius[2]} ${theme.borderRadius[2]}`,
          borderTop: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Summary>{summary}</Card.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="column" alignItems="start">
            <Card.Date>{date}</Card.Date>
            <Badge content={tag} />
          </Flex>

          <Icon icon="round-button" href={`articles/${slug}`} />
        </Flex>
      </Box>
    </Card.Container>
  );
};

export default ArticleCard;
