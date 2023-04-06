import Spacer from "../components/utils/Spacer";
import Text from "../components/utils/Text";
import Layout from "../components/Layout";
import Section from "../components/utils/Section";

export default function Lectures() {
  return (
    <Section bB>
      <Spacer size={2} />
      <Layout.Container>
        <Text as="h1" size={7} weight={4}>
          Lectures Notes.
        </Text>
      </Layout.Container>
      <Spacer size={2} />
    </Section>
  );
}
