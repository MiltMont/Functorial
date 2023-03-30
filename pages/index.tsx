import Flex from "../components/utils/Flex";
import Box from "../components/utils/Box";
import theme from "../styles/Theme";
import styled from "styled-components";
import { base } from "../utils/base";

const Button = styled.button`
  background-color: ${theme.colors.accent7};
  border: none;
  border-radius: ${theme.borderRadius[2]};
  color: ${theme.colors.background};
  padding-left: ${theme.space[1]};
  padding-right: ${theme.space[1]};
  padding-top: ${base(1 / 3)};
  padding-bottom: ${base(1 / 3)};
  font-weight: ${theme.fontWeight[2]};
`;

const ButtonOutline = styled.button`
  border: 1px solid ${theme.colors.accent7};
  background-color: transparent;
  border-radius: ${theme.borderRadius[2]};
  color: ${theme.colors.accent7};
  padding-left: ${theme.space[1]};
  padding-right: ${theme.space[1]};
  padding-top: ${base(1 / 3)};
  padding-bottom: ${base(1 / 3)};
  font-weight: ${theme.fontWeight[2]};
`;

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
          <ButtonOutline>Contact</ButtonOutline>
        </Flex>
      </Box>
    </>
  );
}
