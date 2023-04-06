import styled from "styled-components";

import { FC } from "react";
import { base } from "../../utils/base";
import { LogoSM } from "../graphics/Logo";

import Box from "../utils/Box";
import theme from "../../styles/Theme";
import Flex from "../utils/Flex";
import Text from "../utils/Text";
import Spacer from "../utils/Spacer";
import { Global } from "../../utils/globals";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../utils/Icon";

type Props = {
  state: "active" | "inactive";
};

const variant = {
  active: {
    color: theme.colors.foreground,
    backgroundColor: theme.colors.accent1,
    border: `1px solid ${theme.colors.accent3}`,
    paddingTop: base(1 / 2),
    paddingBottom: base(1 / 2),
    padding: theme.space[2],
    width: "100%",
  },
  inactive: {
    color: theme.colors.accent6,
    backgroundColor: "none",
    border: "none",
    paddingTop: base(1 / 4),
    paddingBottom: base(1 / 4),
    width: "100%",
  },
};

const S = {
  Container: styled.div`
    height: 100vh;
    width: ${base(14)};
    position: fixed;
    border-right: 1px solid ${(props) => props.theme.colors.accent3};

    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};

    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;
    }
  `,
  Section: styled.section`
    font-size: ${theme.fontSize[2]};
    font-weight: ${theme.fontWeight[4]};
    color: ${theme.colors.accent5};
    margin-bottom: ${theme.space[1]};
  `,

  Item: styled.div<Props>`
    display: flex;
    gap: ${theme.space[1]};
    align-items: center;

    font-size: ${theme.fontSize[3]};
    font-weight: ${theme.fontWeight[1]};
    border-radius: ${theme.borderRadius[1]};
    padding-left: ${theme.space[1]};
    padding-right: ${theme.space[1]};
    padding-top: ${(props) => variant[props.state].paddingTop};
    padding-bottom: ${(props) => variant[props.state].paddingBottom};
    margin-bottom: ${base(1 / 2)};

    width: 100%;

    background-color: ${(props) => variant[props.state].backgroundColor};
    border: ${(props) => variant[props.state].border};
    color: ${(props) => variant[props.state].color};
    width: ${(props) => variant[props.state].width};
  `,
};

const SideBar: FC = () => {
  const router = useRouter();
  return (
    <S.Container>
      <Flex
        style={{ paddingLeft: theme.space[1], paddingTop: theme.space[2] }}
        gap={theme.space[1]}
        alignItems="start"
      >
        <Box>
          <LogoSM />
        </Box>
        <Box>
          <Text size={2}>Milton Montiel</Text>
          <Text color={theme.colors.accent6}>Math Enjoyer</Text>
        </Box>
      </Flex>
      <Spacer size={2} />
      <Flex
        style={{ paddingLeft: theme.space[1] }}
        direction="column"
        alignItems="start"
      >
        <S.Section>Navigation</S.Section>
        {Global.navigation.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <S.Item state={router.route === item.url ? "active" : "inactive"}>
              <Icon
                icon={item.icon}
                color={
                  router.route === item.url
                    ? theme.colors.foreground
                    : theme.colors.accent6
                }
                button
              />
              {item.label}
            </S.Item>
          </Link>
        ))}
        <Spacer size={1} />
        <S.Section>Settings</S.Section>
      </Flex>
    </S.Container>
  );
};

export default SideBar;
