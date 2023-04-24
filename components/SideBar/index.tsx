import { FC } from "react";
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
import * as Separator from "@radix-ui/react-separator";
import { useToggleMenu } from "../../hooks/useToggleMenu";
import CommandMenu from "../CommandMenu";
import { Command } from "cmdk";

const handleDisplay = (closed: boolean) => {
  if (closed) {
    return "closed";
  } else {
    return "open";
  }
};

type Item = {
  label: string;
  url: string;
  icon: string;
};

const Item = (state: boolean, item: Item, route: string) => {
  if (state) {
    return (
      <Tooltip content={item.label}>
        <S.Item
          state={route === item.url ? "active" : "inactive"}
          display={handleDisplay(state)}
        >
          <Icon
            icon={item.icon}
            color={route === item.url ? "foreground" : "accent6"}
            size={20}
          />
          <S.ItemLabel
            state={route === item.url ? "active" : "inactive"}
            display={handleDisplay(state)}
          >
            {item.label}
          </S.ItemLabel>
        </S.Item>
      </Tooltip>
    );
  } else {
    return (
      <S.Item
        state={route === item.url ? "active" : "inactive"}
        display={handleDisplay(state)}
      >
        <Icon
          icon={item.icon}
          color={route === item.url ? "foreground" : "accent6"}
          size={20}
        />
        <S.ItemLabel
          state={route === item.url ? "active" : "inactive"}
          display={handleDisplay(state)}
        >
          {item.label}
        </S.ItemLabel>
      </S.Item>
    );
  }
};

const Divisor = (state: boolean, label: string) => {
  if (state) {
    return (
      <Separator.Root
        style={{
          margin: `${theme.space[2]} 0 `,
          width: "100%",
          backgroundColor: theme.colors.accent3,
          height: "1px",
        }}
      />
    );
  } else {
    return (
      <>
        <Spacer />
        <S.Section display={handleDisplay(state)}>{label}</S.Section>
      </>
    );
  }
};

const SideBar: FC = () => {
  const router = useRouter();

  const closed = useNavState((state) => state.closed);
  const setClosed = useNavState((state) => state.setClosed);

  const { open, setOpen } = useToggleMenu();
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
              {Item(closed, item, router.route)}
            </Link>
          ))}

          {Divisor(closed, "Resources")}

          {Global.resources.map((item) => (
            <Link
              href={item.url}
              style={{ textDecoration: "none" }}
              key={item.label}
            >
              {Item(closed, item, router.route)}
            </Link>
          ))}
          {Divisor(closed, "Social Media")}
          {Global.socialMedia.map((item) => (
            <Link
              href={item.url}
              style={{ textDecoration: "none" }}
              key={item.label}
            >
              {Item(closed, item, router.route)}
            </Link>
          ))}
        </Box>
      </Flex>
      <Flex justifyContent="end">
        {closed ? (
          <Tooltip content="Maximize Sidebar">
            <S.Minimize
              onClick={() => setClosed(closed)}
              display={handleDisplay(closed)}
            >
              <Icon icon="maximize" />
            </S.Minimize>
          </Tooltip>
        ) : (
          <Tooltip content="Minimize Sidebar">
            <S.Minimize
              onClick={() => setClosed(closed)}
              display={handleDisplay(closed)}
            >
              <Icon icon="minimize" />
            </S.Minimize>
          </Tooltip>
        )}
      </Flex>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <CommandMenu />
      </Command.Dialog>
    </S.Container>
  );
};

export default SideBar;
