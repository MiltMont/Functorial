import { allArticles, type Article } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Layout from "components/Layout";
import Spacer from "components/utils/Spacer";
import Text from "components/utils/Text";

export const getStaticPaths = () => {
  return {
    paths: allArticles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = ({ params }) => {
  const article = allArticles.find((article) => article.slug === params?.slug);

  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
};

export default function Article({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(article.body.code);
  return (
    <Layout.Container>
      <Spacer size={2} />
      <Text size={7} as="h1" weight={4}>
        {article.title}
      </Text>
      <MDXContent />
    </Layout.Container>
  );
}
