import Box from "../components/utils/Box";
import theme from "../styles/Theme";
import Spacer from "../components/utils/Spacer";
import Text from "../components/utils/Text";
import Layout from "../components/Layout";
import Section from "../components/utils/Section";

export default function Articles() {
  return (
    <Section bB>
      <Spacer size={2} />
      <Layout.Container>
        <Text as="h1" size={7} weight={4}>
          Articles.
        </Text>
        <Spacer />
        <Text size={2} weight={2}>
          Here you can find all the articles I have written. I write about
          mathematics, programming, and other topics that I find interesting. I
          hope you enjoy reading them as much as I enjoyed writing them.
        </Text>
      </Layout.Container>
      <Spacer size={2} />
    </Section>
  );
}
