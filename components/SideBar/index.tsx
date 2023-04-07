import { FC, useState } from "react";
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
import Tooltip from "../Tooltip";

const Container = styled.button`
  all: unset;
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

const handleDisplay = (closed: boolean) => {
  if (closed) {
    return "closed";
  } else {
    return "open";
  }
};

const SideBar: FC = () => {
  const router = useRouter();
  const [closed, setClosed] = useState(false);
  console.log(closed);
  console.log(handleDisplay(closed));

  return (
    <S.Container display={handleDisplay(closed)}>
      <S.Presentation.Container display={handleDisplay(closed)}>
        <Box>
          <LogoSM />
        </Box>
        <S.Presentation.Items display={handleDisplay(closed)}>
          <Text size={2}>Milton Montiel</Text>
          <Text color={"accent6"}>Math Enjoyer</Text>
        </S.Presentation.Items>
      </S.Presentation.Container>

      <Spacer size={2} />
      <Box
        style={{ paddingLeft: theme.space[1], paddingRight: theme.space[1] }}
      >
        <S.Section display={handleDisplay(closed)}>Navigation</S.Section>
        {Global.navigation.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <Tooltip content={item.label}>
              <S.Item
                state={router.route === item.url ? "active" : "inactive"}
                display={handleDisplay(closed)}
              >
                <Icon
                  icon={item.icon}
                  color={router.route === item.url ? "foreground" : "accent6"}
                  size={20}
                />
                <S.ItemLabel
                  state={router.route === item.url ? "active" : "inactive"}
                  display={handleDisplay(closed)}
                >
                  {item.label}
                </S.ItemLabel>
              </S.Item>
            </Tooltip>
          </Link>
        ))}
        <Spacer />
        <S.Section display={handleDisplay(closed)}>Resources</S.Section>
        {Global.resources.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <Tooltip content={item.label}>
              <S.Item
                state={router.route === item.url ? "active" : "inactive"}
                display={handleDisplay(closed)}
              >
                <Icon
                  icon={item.icon}
                  color={router.route === item.url ? "foreground" : "accent6"}
                />
                <S.ItemLabel
                  state={router.route === item.url ? "active" : "inactive"}
                  display={handleDisplay(closed)}
                >
                  {item.label}
                </S.ItemLabel>
              </S.Item>
            </Tooltip>
          </Link>
        ))}
        <Spacer />

        <S.Section display={handleDisplay(closed)}>Social Media</S.Section>
        {Global.socialMedia.map((item) => (
          <Link
            href={item.url}
            style={{ textDecoration: "none" }}
            key={item.label}
          >
            <Tooltip content={item.label}>
              <S.Item state={"inactive"} display={handleDisplay(closed)}>
                <Icon icon={item.icon} color={"accent6"} />

                <S.ItemLabel
                  state={router.route === item.url ? "active" : "inactive"}
                  display={handleDisplay(closed)}
                >
                  {item.label}
                </S.ItemLabel>
              </S.Item>
            </Tooltip>
          </Link>
        ))}
      </Box>
      <Tooltip content="Minimize Sidebar">
        <S.Minimize
          onClick={() => setClosed(!closed)}
          display={handleDisplay(closed)}
        >
          <Icon icon="minimize" />
        </S.Minimize>
      </Tooltip>
    </S.Container>
  );
};

export default SideBar;
