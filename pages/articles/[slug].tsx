import { allArticles, type Article } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Layout from "components/Layout";
import Spacer from "components/utils/Spacer";
import Text from "components/utils/Text";
import Box from "components/utils/Box";
import theme from "styles/Theme";

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
    <Layout.Container article>
      <Spacer size={2} />
      <Box
        style={{
          height: "400px",
          border: `1px solid ${theme.colors.accent3}`,
          borderRadius: theme.borderRadius[2],
          marginBottom: theme.space[1],
          backgroundColor: theme.colors.accent3,
        }}
      />
      <Text size={7} as="h1" weight={4}>
        {article.title}
      </Text>
      <MDXContent />
      <Spacer size={2} />
    </Layout.Container>
  );
}
