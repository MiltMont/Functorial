import { getAllArticlesFrontMatter, getArticleBySlug } from "../../lib/mdx";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../MDX/MDXComponents";
import Layout from "../../components/Layout";
import Spacer from "../../components/utils/Spacer";

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
    <Layout.Container>
      <Spacer size={2} />
      <MDXRemote {...post.mdxSource} components={MDXComponents} />
    </Layout.Container>
  );
}
