import { FC } from "react";
import theme from "../../styles/Theme";
import Flex from "../utils/Flex";
import Badge from "../Badge";
import { S } from "./css";
import Icon from "../utils/Icon";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import { Article } from "../../types/payload";

type Props = {
  article: Article;
};

const ArticleCard: FC<Props> = ({ article }) => {
  const publishedDate = new Date(article.publishedDate).toDateString();
  return (
    <S.Root>
      <Link href={`articles/${article.slug}`}>
        <S.ImageContainer>
          <AspectRatio.Root asChild ratio={16 / 9}>
            <S.Image alt={"he"} src={article.imageUrl} fill={true} />
          </AspectRatio.Root>
        </S.ImageContainer>
      </Link>
      <S.Container>
        <S.Title>{article.title}</S.Title>
        <S.Summary>{article.summary}</S.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="row" alignItems="start" gap={1}>
            <Badge content={article.category.name} />
            <S.Date>{publishedDate}</S.Date>
          </Flex>

          <Icon icon="round-button" href={`articles/${article.slug}`} />
        </Flex>
      </S.Container>
    </S.Root>
  );
};

export default ArticleCard;
