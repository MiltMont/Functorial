import { FC } from "react";
import theme from "../../styles/Theme";
import Box from "../utils/Box";
import Flex from "../utils/Flex";
import Badge from "../Badge";
import { Card } from "./css";
import Icon from "../utils/Icon";
import { type Article } from "contentlayer/generated";

type Props = {
  article: Article;
};

const ArticleCard: FC<Props> = ({ article }) => {
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
        <Card.Title>{article.title}</Card.Title>
        <Card.Summary>{article.summary}</Card.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="column" alignItems="start">
            <Card.Date>{article.date}</Card.Date>
            <Badge content={article.tag} />
          </Flex>

          <Icon icon="round-button" href={`articles/${article.slug}`} />
        </Flex>
      </Box>
    </Card.Container>
  );
};

export default ArticleCard;
