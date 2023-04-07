import Spacer from "components/utils/Spacer";
import Text from "components/utils/Text";
import Layout from "components/Layout";
import Section from "components/utils/Section";
import SearchBar from "components/SearchBar";
import { allArticles, type Article } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import ArticleCard from "components/ArticleCard";

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = () => {
  return { props: { articles: allArticles } };
};

export default function Articles({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Section bB>
        <Spacer size={2} />
        <Layout.Container>
          <Text as="h1" size={7} weight={4}>
            Articles.
          </Text>
          <Spacer />
          <Text size={2} weight={2}>
            Here you can find all the articles I have written. I write about
            mathematics, programming, and other topics that I find interesting.
            I hope you enjoy reading them as much as I enjoyed writing them.
          </Text>
          <Spacer />
          <SearchBar />
        </Layout.Container>

        <Spacer size={2} />
      </Section>
      <Spacer size={2} />
      <Layout.Container>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </Layout.Container>
    </>
  );
}
