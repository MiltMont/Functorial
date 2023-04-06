import Flex from "../components/utils/Flex";
import Box from "../components/utils/Box";
import theme from "../styles/Theme";
import ArticleCard from "../components/ArticleCard";
import Button from "../components/Button";
import LectureCard from "../components/LectureCard";
import Link from "next/link";
import Spacer from "../components/utils/Spacer";
import { Articles } from "../utils/dummyArticle";
import { Lectures } from "../utils/dummyLecture";
import Text from "../components/utils/Text";
import Toast from "../components/Toast";
import Icon from "../components/utils/Icon";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          paddingTop: theme.space[2],
          paddingBottom: theme.space[2],
          borderBottom: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Layout.Container>
          <Text as="h1" size={7} weight={4}>
            Write about mathematics in an easier manner.
          </Text>
          <Spacer size={1} />
          <Text size={2} weight={1} color="accent7">
            This blog template is designed to give you the necessary tools to
            write about technical matters without making it more difficult than
            in has to be.
          </Text>
          <Spacer size={1} />
          <Flex gap={theme.space[1]}>
            <Button href="/about">About</Button>

            <Toast
              title={"Copied!"}
              fill="outline"
              onClick={() => navigator.clipboard.writeText("miltgonmont@pm.me")}
              description="My e-mail address has been copied to your clipboard."
              altText="Copy my e-mail address to your clipboard."
            >
              <Icon icon="copy" />
              E-Mail
            </Toast>
          </Flex>
        </Layout.Container>
      </Box>
      <Spacer size={2} />
      <Layout.Container>
        <Text as="h1" size={7} weight={1}>
          Latest Articles
        </Text>
        <Spacer />
        <Flex gap={theme.space[1]} direction="column" alignItems="stretch">
          {Articles.map((article) => (
            <ArticleCard
              title={article.title}
              summary={article.summary}
              date={article.date}
              slug={article.slug}
              tag={article.tag}
              key={article.slug}
            />
          ))}
        </Flex>
        <Spacer />
        <Button width="full" href={"/articles"}>
          Read all articles
        </Button>

        <Spacer size={2} />

        <Text as="h1" size={7} weight={1}>
          Lecture Notes
        </Text>
        <Spacer />
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
        <Spacer />
        <Button width="full" href={"/lectures"}>
          Read all lectures
        </Button>

        <Spacer size={4} />
      </Layout.Container>
    </>
  );
}
