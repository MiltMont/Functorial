import {
  getAllArticlesFrontMatter,
  getArticleBySlug,
  FrontMatter,
} from "../../lib/mdx";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../MDX/MDXComponents";
import Spacer from "../../components/utils/Spacer";
import styled from "styled-components";
import { base } from "../../utils/base";
import Image from "next/image";
import Layout from "../../components/Layout";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Icon from "../../components/utils/Icon";
import Link from "next/link";
import Text from "../../components/utils/Text";
import Badge from "../../components/Badge";
import Flex from "../../components/utils/Flex";

const S = {
  Container: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      border: 1px solid ${(p) => p.theme.colors.accent3};
      border-radius: ${(p) => p.theme.borderRadius[2]};
      overflow: hidden;
      background-color: ${(p) => p.theme.colors.background};
    }
  `,

  Root: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      background-color: ${(p) => p.theme.colors.accent1};
      padding: ${base(1 / 2)};
    }
  `,

  Info: styled.div`
    height: ${(p) => p.theme.space[2]};
    widht: 100%;
    background-color: ${(p) => p.theme.colors.accent1};
    border-bottom: 1px solid ${(p) => p.theme.colors.accent3};
    display: flex;

    gap: ${(p) => p.theme.space[1]};

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      gap: ${(p) => p.theme.space[2]};
    }
    align-items: center;
    padding: 0 ${(p) => p.theme.space[1]};
  `,

  ArticleImage: styled(Image)`
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      border-radius: ${(p) => p.theme.borderRadius[1]};
    }
  `,

  ImageContainer: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      margin-bottom: ${(p) => p.theme.space[2]};
    }

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      margin-top: ${(p) => p.theme.space[2]};
      padding: 0 ${(p) => p.theme.space[4]};
    }
  `,

  ArticleDescriptionSM: styled.div`
    margin-top: ${(p) => p.theme.space[2]};
    margin-bottom: ${(p) => p.theme.space[2]};
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      display: none;
    }
  `,

  ArticleDescriptionLG: styled.div`
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      display: block;
    }
  `,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllArticlesFrontMatter();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const post = await getArticleBySlug(params.slug);

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default function Article({ post }) {
  if (!post) return null;

  return (
    <S.Root>
      <S.Container>
        <S.Info>
          <Link href="/">
            <Icon icon="close" color="accent8" />
          </Link>
        </S.Info>
        <Layout.Container>
          <S.ArticleDescriptionLG>
            <Spacer size={2} />
            <Badge content={post.frontMatter.tag} />
            <Text size={7} weight={1}>
              {post.frontMatter.title}
            </Text>
            <Flex direction="row" gap={base(1)} alignItems="center">
              <Text size={2} weight={1} color={"accent5"}>
                {post.frontMatter.date}
              </Text>
              <Text size={3} weight={1} color="accent6">
                {post.frontMatter.summary}
              </Text>
            </Flex>
          </S.ArticleDescriptionLG>
        </Layout.Container>
        <S.ImageContainer>
          <AspectRatio.Root ratio={16 / 9}>
            <S.ArticleImage
              alt={"Article Image"}
              src={post.frontMatter.imageUrl}
              fill={true}
            />
          </AspectRatio.Root>
        </S.ImageContainer>
        <Layout.Container>
          <S.ArticleDescriptionSM>
            <Text size={7} weight={1}>
              {post.frontMatter.title}
            </Text>

            <Flex direction="row" gap={base(1)} alignItems="center">
              <Badge content={post.frontMatter.tag} />
              <Text size={2} weight={1} color={"accent5"}>
                {post.frontMatter.date}
              </Text>
            </Flex>
            <Spacer />
            <Text size={3} weight={1} color="accent6">
              {post.frontMatter.summary}
            </Text>
            <Spacer />
            <hr />
          </S.ArticleDescriptionSM>
          <MDXRemote {...post.mdxSource} components={MDXComponents} />
          <Spacer size={2} />
        </Layout.Container>
      </S.Container>
    </S.Root>
  );
}
