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

export default function Home() {
  return (
    <>
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          paddingLeft: theme.space[1],
          paddingRight: theme.space[1],
          paddingTop: theme.space[2],
          paddingBottom: theme.space[2],
          borderBottom: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Box
          style={{
            fontSize: theme.fontSize[7],
            fontWeight: theme.fontWeight[4],
            marginBottom: theme.space[1],
            color: "transparent !important",
            WebkitTextStrokeColor: theme.colors.foreground,
            WebkitTextStrokeWidth: "2px",
          }}
        >
          Write about mathematics in an easier manner.
        </Box>
        <Box
          style={{
            fontSize: theme.fontSize[2],
            marginBottom: theme.space[1],
            color: theme.colors.accent7,
          }}
        >
          This blog template is designed to give you the necessary tools to
          write about technical matters without making it more difficult than in
          has to be.
        </Box>
        <Flex gap={theme.space[1]}>
          <Button>About</Button>
          <Button fill="outline">Contact</Button>
        </Flex>
      </Box>
      <Spacer size={4} />
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
      <Link href={"/articles"} style={{ textDecoration: "none" }}>
        <Flex
          justifyContent="center"
          alignContent="stretch"
          style={{
            marginLeft: theme.space[1],
            marginRight: theme.space[1],
          }}
        >
          <Button width="full">Read all articles</Button>
        </Flex>
      </Link>
      <Spacer size={4} />
      {Lectures.map((lecture) => (
        <LectureCard
          title={lecture.title}
          slug={lecture.slug}
          docType={lecture.docType}
        />
      ))}

      <Link href={"/articles"} style={{ textDecoration: "none" }}>
        <Flex
          justifyContent="center"
          alignContent="stretch"
          style={{
            marginLeft: theme.space[1],
            marginRight: theme.space[1],
          }}
        >
          <Button width="full">Read all articles</Button>
        </Flex>
      </Link>
      <Spacer size={4} />
    </>
  );
}
