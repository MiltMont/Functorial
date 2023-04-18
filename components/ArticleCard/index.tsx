import { FC } from "react";
import theme from "../../styles/Theme";
import Box from "../utils/Box";
import Flex from "../utils/Flex";
import Badge from "../Badge";
import { Card } from "./css";
import Icon from "../utils/Icon";
import { FrontMatter } from "../../lib/mdx";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Link from "next/link";

type Props = {
  frontMatter: FrontMatter;
};

const ArticleCard: FC<Props> = ({ frontMatter }) => {
  return (
    <Card.Container>
      <Link href={`articles/${frontMatter.slug}`}>
        <Card.ImageContainer>
          <AspectRatio.Root asChild ratio={16 / 9}>
            <Card.Image alt={"he"} src={frontMatter.imageUrl} fill={true} />
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
        <Card.Title>{frontMatter.title}</Card.Title>
        <Card.Summary>{frontMatter.summary}</Card.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="column" alignItems="start">
            <Card.Date>{frontMatter.date}</Card.Date>
            <Badge content={frontMatter.tag} />
          </Flex>

          <Icon icon="round-button" href={`articles/${frontMatter.slug}`} />
        </Flex>
      </Box>
    </Card.Container>
  );
};

export default ArticleCard;
