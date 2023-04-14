import Text from "../components/utils/Text";

const MDXComponents = {
  h1: (props) => <Text as="h1" size={7} weight={4} {...props} />,
  h2: (props) => <Text as="h2" size={6} weight={3} {...props} />,
  h3: (props) => <Text as="h3" size={5} weight={2} {...props} />,
  h4: (props) => <Text as="h4" size={5} weight={1} {...props} />,
  h5: (props) => <Text as="h5" size={5} weight={1} {...props} />,
};

export default MDXComponents;
