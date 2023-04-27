import Spacer from "../components/utils/Spacer";
import Text from "../components/utils/Text";
import Layout from "../components/Layout";
import Section from "../components/utils/Section";
import { GetStaticProps } from "next";
import getPosts from "./api/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      totalDocs: posts.totalDocs,
      posts: posts.docs,
    },
  };
};

export default function About({ posts, totalDocs }) {
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
        {posts.map((post) => (
          <Text as="h1" size={7} weight={4} key={post.id}>
            {post.title}
          </Text>
        ))}
      </Layout.Container>
    </>
  );
}
