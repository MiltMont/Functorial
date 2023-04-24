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

const S = {
  Container: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      border: 1px solid ${(p) => p.theme.colors.accent3};
      border-radius: ${(p) => p.theme.borderRadius[2]};

      background-color: ${(p) => p.theme.colors.background};
    }
  `,

  Root: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      background-color: ${(p) => p.theme.colors.accent1};
      padding: ${base(1 / 2)};
    }
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
        <Layout.Container>
          <MDXRemote {...post.mdxSource} components={MDXComponents} />
          <Spacer size={2} />
        </Layout.Container>
      </S.Container>
    </S.Root>
  );
}
