import { FC, useState } from "react";
import { LogoSM } from "../graphics/Logo";
import Box from "../utils/Box";
import theme from "../../styles/Theme";
import Text from "../utils/Text";
import Spacer from "../utils/Spacer";
import { Global } from "../../utils/globals";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../utils/Icon";
import { S } from "./css";
import Tooltip from "../Tooltip";
import { useNavState } from "../../hooks/useNavState";
import Flex from "../utils/Flex";

const handleDisplay = (closed: boolean) => {
  if (closed) {
    return "closed";
  } else {
    return "open";
  }
};

const SideBar: FC = () => {
  const router = useRouter();

  const closed = useNavState((state) => state.closed);
  const setClosed = useNavState((state) => state.setClosed);

  return (
    <S.Container display={handleDisplay(closed)}>
      <Flex
        direction="column"
        alignItems={handleDisplay(closed) === "closed" ? "center" : "start"}
      >
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
          style={{
            paddingLeft: theme.space[1],
            paddingRight: theme.space[1],
            width: "100%",
          }}
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
      </Flex>
      <Flex justifyContent="end">
        <Tooltip content="Minimize Sidebar">
          <S.Minimize
            onClick={() => setClosed(closed)}
            display={handleDisplay(closed)}
          >
            <Icon icon="minimize" />
          </S.Minimize>
        </Tooltip>
      </Flex>
    </S.Container>
  );
};

export default SideBar;
