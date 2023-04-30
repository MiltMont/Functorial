import { getAllArticlesFrontMatter, getArticleBySlug } from "../../lib/mdx";
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
import Grid from "../../components/utils/Grid";
import Link from "next/link";

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
    align-items: center;
    padding: 0 ${(p) => p.theme.space[1]};
  `,

  ArticleImage: styled(Image)`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      border-radius: ${(p) => p.theme.borderRadius[2]};
    }
  `,

  ImageContainer: styled(Layout.Container)`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      padding: 100px;
      background-color: ${(p) => p.theme.colors.accent1};
      border: 10px solid ${(p) => p.theme.colors.accent3};
      margin: 0;
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
            <Icon icon="return" color="accent8" />
          </Link>
        </S.Info>
        <Layout.Container>
          <Spacer size={2} />
          <AspectRatio.Root asChild ratio={16 / 9}>
            <S.ArticleImage
              alt={"Article Image"}
              src={post.frontMatter.imageUrl}
              fill={true}
            />
          </AspectRatio.Root>
          <Spacer size={2} />
        </Layout.Container>
        <Grid columns={12}></Grid>
        <Layout.Container>
          <MDXRemote {...post.mdxSource} components={MDXComponents} />
          <Spacer size={2} />
        </Layout.Container>
      </S.Container>
    </S.Root>
  );
}
