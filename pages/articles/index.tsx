import Spacer from "../../components/utils/Spacer";
import Text from "../../components/utils/Text";
import Layout from "../../components/Layout";
import Section from "../../components/utils/Section";
import SearchBar from "../../components/SearchBar";
import { FrontMatter, getAllArticlesFrontMatter } from "../../lib/mdx";
import { GetStaticProps } from "next";
import ArticleCard from "../../components/ArticleCard";

export const getStaticProps: GetStaticProps = async () => {
  const allArticles = await getAllArticlesFrontMatter();

  return {
    props: {
      articlesFrontMatter: allArticles,
    },
  };
};

export default function Articles({ articlesFrontMatter }) {
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
        {articlesFrontMatter.map((frontMatter, i) => (
          <div key={i}>
            <ArticleCard frontMatter={frontMatter} />
            <Spacer size={1} />
          </div>
        ))}
      </Layout.Container>
    </>
  );
}
