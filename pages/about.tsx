import Spacer from "../components/utils/Spacer";
import Text from "../components/utils/Text";
import Layout from "../components/Layout";
import Section from "../components/utils/Section";
import { GetStaticProps } from "next";
import getArticles from "./api/articles";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getArticles();

    return {
      props: {
        totalDocs: posts.totalDocs,
        articles: posts.articles,
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

export default function About({ articles }) {
  console.log(articles);
  return (
    <>
      <Section bB>
        <Spacer size={2} />
        <Layout.Container>
          <Text as="h1" size={7} weight={4}>
            About Me.
          </Text>
        </Layout.Container>
        <Spacer size={2} />
      </Section>
      <Layout.Container>
        <Spacer size={2} />
        Here is some test:
        <Spacer size={2} />
        {articles &&
          articles.map((article) => (
            <Text as="h1" size={7} weight={4} key={article.id}>
              {article.title}
            </Text>
          ))}
      </Layout.Container>
    </>
  );
}
