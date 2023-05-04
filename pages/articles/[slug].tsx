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
import Link from "next/link";
import ArticleDescription from "../../components/ArticleDescription";
import TOC from "../../components/TOC";
import { useRouter } from "next/router";

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
    widht: 100%;
    background-color: ${(p) => p.theme.colors.background};
    border-bottom: 1px solid ${(p) => p.theme.colors.accent3};
    display: flex;

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    }
    align-items: center;
  `,

  IconBox: styled.button`
    all: unset;

    overflow: hidden;
    padding: ${base(1 / 2)};
    border-right: 1px solid ${(p) => p.theme.colors.accent3};
    background-color: ${(p) => p.theme.colors.accent1};
  `,

  ArticleImage: styled(Image)`
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      border-radius: ${(p) => p.theme.borderRadius[1]};
    }
  `,

  ImageContainer: styled.div`
    z-index: 1;
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      margin-bottom: ${(p) => p.theme.space[2]};
    }

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      margin-top: ${(p) => p.theme.space[2]};
      padding: 0 ${(p) => p.theme.space[4]};
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

const dummyToc = [
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4",
  "Heading 5",
];

export default function Article({ post }) {
  if (!post) return null;
  const router = useRouter();

  return (
    <S.Root>
      <S.Container>
        <S.Info>
          <S.IconBox>
            <Icon icon="close" color="accent4" onClick={() => router.back()} />
          </S.IconBox>
          <S.IconBox>
            <Icon
              icon="minimize"
              color="accent4"
              onClick={() => console.log("minimize")}
            />
          </S.IconBox>
        </S.Info>
        <Layout.Container>
          <ArticleDescription.LG frontMatter={post.frontMatter} />
        </Layout.Container>
        <S.ImageContainer>
          <AspectRatio.Root ratio={16 / 9} style={{ zIndex: "1" }}>
            <S.ArticleImage
              alt={"Article Image"}
              src={post.frontMatter.imageUrl}
              fill={true}
            />
          </AspectRatio.Root>
        </S.ImageContainer>
        <Layout.Container>
          <ArticleDescription.SM frontMatter={post.frontMatter} />
          <TOC headings={dummyToc} />
          <Spacer />
          <MDXRemote {...post.mdxSource} components={MDXComponents} />
          <Spacer size={2} />
        </Layout.Container>
      </S.Container>
    </S.Root>
  );
}
