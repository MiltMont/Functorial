import { FC } from "react";
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
import { S } from "./css";
import { base } from "../../utils/base";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: ${(p) => p.theme.space[1]};
  padding: ${base(1 / 2)};
  border: 1px solid ${(p) => p.theme.colors.accent3};
  border-radius: ${(p) => p.theme.borderRadius[2]};
  background-color: ${(p) => p.theme.colors.background};

  &:hover {
    background-color: ${(p) => p.theme.colors.accent2};
  }
`;

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
      <Box
        style={{ paddingLeft: theme.space[1], paddingRight: theme.space[1] }}
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
                color={router.route === item.url ? "foreground" : "accent6"}
                size={20}
              />
              {item.label}
            </S.Item>
          </Link>
        ))}
        <Spacer />
        <S.Section>Resources</S.Section>
        {Global.resources.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <S.Item state={router.route === item.url ? "active" : "inactive"}>
              <Icon
                icon={item.icon}
                color={router.route === item.url ? "foreground" : "accent6"}
              />
              {item.label}
            </S.Item>
          </Link>
        ))}
        <Spacer />
        <S.Section>Social Media</S.Section>
        {Global.socialMedia.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <S.Item state={router.route === item.url ? "active" : "inactive"}>
              <Icon
                icon={item.icon}
                color={router.route === item.url ? "foreground" : "accent6"}
              />
              {item.label}
            </S.Item>
          </Link>
        ))}
      </Box>

      <Container>
        <Icon icon="minimize" />
      </Container>
    </S.Container>
  );
};

export default SideBar;
