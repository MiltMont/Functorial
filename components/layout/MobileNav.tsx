import { FC } from "react";
import Flex from "../utils/Flex";
import Box from "../utils/Box";
import { LogoSM } from "../graphics/Logo";
import { Menu } from "../graphics/Menu";
import styled from "styled-components";
import theme from "../../styles/Theme";

const Nav = styled.nav`
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNav: FC = () => (
  <Nav>
    <Flex
      style={{
        padding: theme.space[1],
        borderBottom: `1px solid ${theme.colors.accent3}`,
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <LogoSM />
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{
          height: "40px",
          width: "40px",
          border: `1px solid ${theme.colors.accent3}`,
          borderRadius: theme.borderRadius[2],
          backgroundColor: theme.colors.accent1,
        }}
        as="button"
      >
        <Menu />
      </Flex>
    </Flex>
  </Nav>
);

export default MobileNav;
