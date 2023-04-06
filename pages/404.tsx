import Link from "next/link";
import Button from "../components/Button";
import Box from "../components/utils/Box";
import Spacer from "../components/utils/Spacer";
import Text from "../components/utils/Text";
import theme from "../styles/Theme";
import * as Separator from "@radix-ui/react-separator";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Box
      style={{
        backgroundColor: theme.colors.accent1,
        height: "100vh",
      }}
    >
      <Layout.Container>
        <Spacer size={2} />
        <Text size={7} weight={4}>
          404
        </Text>

        <Text size={5} weight={1}>
          This page does not exist
        </Text>
        <Spacer size={2} />

        <Button href={"/"} width="auto">
          Go back home
        </Button>

        <Separator.Root
          style={{
            margin: `${theme.space[2]} 0 `,
            width: "100%",
            backgroundColor: theme.colors.accent3,
            height: "1px",
          }}
        />
      </Layout.Container>
    </Box>
  );
}
