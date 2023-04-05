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

export default function Design() {
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
        <Text as="h1" size={7} weight={4}>
          Design system
        </Text>
        <Spacer size={1} />
      </Box>
      <Spacer size={2} />
    </>
  );
}
