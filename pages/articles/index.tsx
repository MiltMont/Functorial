import Spacer from "../../components/utils/Spacer";
import Text from "../../components/utils/Text";
import Layout from "../../components/Layout";
import Section from "../../components/utils/Section";
import SearchBar from "../../components/SearchBar";
import { GetStaticProps } from "next";
import ArticleCard from "../../components/ArticleCard";
import getArticles from "../api/articles";
import { Article } from "../../types/payload";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articles = await getArticles();

    return {
      props: {
        totalDocs: articles.totalDocs as number,
        articles: articles.articles as Article[],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function Articles({ totalDocs, articles }) {
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
        {articles &&
          articles.map((article: Article) => (
            <div key={article.id}>
              <ArticleCard article={article} />
              <Spacer size={1} />
            </div>
          ))}
      </Layout.Container>
    </>
  );
}
