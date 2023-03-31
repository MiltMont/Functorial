import Flex from "../components/utils/Flex";
import Box from "../components/utils/Box";
import theme from "../styles/Theme";
import ArticleCard from "../components/ArticleCard";
import Button from "../components/Button";
import LectureCard from "../components/LectureCard";

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
          <Button variant="gray">About</Button>
          <Button variant="grayOutline">Contact</Button>
        </Flex>
      </Box>
      <ArticleCard
        title="Formalizing Topology in Lean"
        summary="In this post we explore the distinction between formalization and implementation. As our main tool, we use Lean 3."
        date="May 23, 2023"
        slug="formalizing-topology-in-lean"
        tag="Topology"
      />

      <LectureCard
        title="Functional Analysis I"
        slug="functional-analysis"
        docType={["PDF", "LaTex"]}
      />
    </>
  );
}
