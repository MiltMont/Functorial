import { FC } from "react";
import theme from "../../styles/Theme";
import Box from "../utils/Box";
import Flex from "../utils/Flex";
import Badge from "../Badge";
import { Card } from "./css";
import Icon from "../utils/Icon";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import { Article } from "../../types/payload";

type Props = {
  article: Article;
};

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <Card.Container>
      <Link href={`articles/change-this!`}>
        <Card.ImageContainer>
          <AspectRatio.Root asChild ratio={16 / 9}>
            <Card.Image alt={"he"} src={"/change-this!"} fill={true} />
          </AspectRatio.Root>
        </Card.ImageContainer>
      </Link>
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          padding: theme.space[1],
          borderRadius: `0 0 ${theme.borderRadius[2]} ${theme.borderRadius[2]}`,
          borderTop: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Card.Title>{article.title}</Card.Title>
        <Card.Summary>Add a summary to this!</Card.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="column" alignItems="start">
            <Card.Date>{article.publishedDate}</Card.Date>
            <Badge content={article.category.name} />
          </Flex>

          <Icon icon="round-button" href={`articles/change-this!`} />
        </Flex>
      </Box>
    </Card.Container>
  );
};

export default ArticleCard;
