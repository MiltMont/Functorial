import { getAllArticlesFrontMatter, getArticleBySlug } from "../../lib/mdx";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../MDX/MDXComponents";
import Layout from "../../components/Layout";
import Spacer from "../../components/utils/Spacer";
import theme from "../../styles/Theme";
import { useWindowSize } from "../../hooks/useWindowSize";

import { S } from "./css";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";

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
