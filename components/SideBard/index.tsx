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
                color={
                  router.route === item.url
                    ? theme.colors.foreground
                    : theme.colors.accent6
                }
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
                color={
                  router.route === item.url
                    ? theme.colors.foreground
                    : theme.colors.accent6
                }
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
                color={
                  router.route === item.url
                    ? theme.colors.foreground
                    : theme.colors.accent6
                }
              />
              {item.label}
            </S.Item>
          </Link>
        ))}
      </Box>
    </S.Container>
  );
};

export default SideBar;
