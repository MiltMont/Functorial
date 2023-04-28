import Flex from "../components/utils/Flex";
import theme from "../styles/Theme";
import ArticleCard from "../components/ArticleCard";
import Button from "../components/Button";
import LectureCard from "../components/LectureCard";
import Spacer from "../components/utils/Spacer";
import { Lectures } from "../utils/dummyLecture";
import Text from "../components/utils/Text";
import Icon from "../components/utils/Icon";
import Layout from "../components/Layout";
import Section from "../components/utils/Section";
import { GetStaticProps } from "next";
import Grid from "../components/utils/Grid";
import { useWindowSize } from "../hooks/useWindowSize";
import { toast } from "sonner";
import getArticles from "./api/articles";
import { Article } from "../types/payload";

export default function Home({ articles, totalDocs }) {
  const size = useWindowSize();

  return (
    <>
      <Section bB color="accent1">
        <Layout.Container>
          <Spacer size={2} />
          <Text as="h1" size={7} weight={4}>
            Write about mathematics in an easier manner.
          </Text>
          <Spacer size={1} />
          <Text size={2} weight={2} color="accent7">
            This blog template is designed to give you the necessary tools to
            write about technical matters without making it more difficult than
            in has to be.
          </Text>
          <Spacer size={1} />
          <Flex gap={theme.space[1]}>
            <Button href="/about">About</Button>
            <Button
              fill="outline"
              onClick={() => {
                toast.success("My e-mail has been copied to your clipboard");
                navigator.clipboard.writeText("miltgonmont@pm.me");
              }}
            >
              <Icon icon="copy" />
              E-Mail
            </Button>
          </Flex>
        </Layout.Container>
        <Spacer size={2} />
      </Section>
      <Spacer size={2} />
      <Layout.Container>
        <Text as="h1" size={7} weight={2}>
          Latest Articles
        </Text>
        <Spacer />
        <Flex gap={theme.space[1]} direction="column" alignItems="stretch">
          {articles &&
            articles.map((article: Article) => (
              <div key={article.id}>
                <ArticleCard article={article} />
              </div>
            ))}
        </Flex>
        <Spacer />
        <Button width="full" href={"/articles"}>
          Read all articles
        </Button>
        <Spacer size={2} />
        <Text as="h1" size={7} weight={2}>
          Lecture Notes
        </Text>
        <Spacer />
        {size.width >= theme.breakpointsAsInt.md && (
          <Grid columns={2} gapX={1} gapY={1}>
            {Lectures.map((lecture) => (
              <LectureCard
                title={lecture.title}
                slug={lecture.slug}
                docType={lecture.docType}
                key={lecture.slug}
              />
            ))}
          </Grid>
        )}
        {size.width < theme.breakpointsAsInt.md && (
          <Flex gap={theme.space[1]} direction="column" alignItems="stretch">
            {Lectures.map((lecture) => (
              <LectureCard
                title={lecture.title}
                slug={lecture.slug}
                docType={lecture.docType}
                key={lecture.slug}
              />
            ))}
          </Flex>
        )}
        <Spacer />
        <Button width="full" href={"/lectures"}>
          Read all lectures
        </Button>
        <Spacer size={4} />
      </Layout.Container>
    </>
  );
}

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
