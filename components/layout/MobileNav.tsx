import { FC } from "react";
import Flex from "../utils/Flex";
import Box from "../utils/Box";
import { LogoSM } from "../graphics/Logo";
import styled from "styled-components";
import theme from "../../styles/Theme";
import Link from "next/link";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { X, Menu } from "react-feather";
import { Style } from "./css";
import { Inter } from "next/font/google";
import { Global } from "../../utils/globals";
import Spacer from "../utils/Spacer";
import { useRouter } from "next/router";
import Icon from "../utils/Icon";

const Nav = styled.nav`
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const MobileNav: FC = () => {
  const router = useRouter();

  return (
    <AlertDialog.Root>
      <Nav>
        <Flex
          style={{
            padding: theme.space[1],
            borderBottom: `1px solid ${theme.colors.accent3}`,
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href={"/"}>
            <Box>
              <LogoSM />
            </Box>
          </Link>

          <AlertDialog.Trigger asChild>
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
              <Menu style={{ stroke: theme.colors.accent3 }} />
            </Flex>
          </AlertDialog.Trigger>
        </Flex>
      </Nav>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            background: theme.colors.background,
            position: "fixed",
            inset: 0,
          }}
        />
        <AlertDialog.Content
          className={inter.className}
          style={{
            backgroundColor: theme.colors.background,
            position: "fixed",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          <Flex
            style={{
              padding: theme.space[1],
              borderBottom: `1px solid ${theme.colors.accent3}`,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href={"/"}>
              <Box>
                <LogoSM />
              </Box>
            </Link>
            <AlertDialog.Cancel asChild>
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
                <X style={{ stroke: theme.colors.accent3 }} />
              </Flex>
            </AlertDialog.Cancel>
          </Flex>
          <Style.Container>
            <Style.Section>Navigation</Style.Section>
            {Global.navigation.map((item) => (
              <Link
                href={item.url}
                style={{ textDecoration: "none" }}
                key={item.label}
              >
                <AlertDialog.Action asChild>
                  <Style.Item
                    state={router.route === item.url ? "active" : "inactive"}
                  >
                    <Icon
                      icon={item.icon}
                      color={
                        router.route === item.url
                          ? theme.colors.foreground
                          : theme.colors.accent6
                      }
                    />
                    {item.label}
                  </Style.Item>
                </AlertDialog.Action>
              </Link>
            ))}
            <Spacer />
            <Style.Section>Social Media</Style.Section>
            {Global.socialMedia.map((item) => (
              <Link
                href={item.url}
                style={{ textDecoration: "none" }}
                key={item.label}
              >
                <Style.Item state="inactive">
                  <Icon icon={item.icon} color={theme.colors.accent6} />

                  {item.label}
                </Style.Item>
              </Link>
            ))}
            <Spacer />
            <Style.Section>Resources</Style.Section>
            {Global.resources.map((item) => (
              <Link
                href={item.url}
                style={{ textDecoration: "none" }}
                key={item.label}
              >
                <AlertDialog.Action asChild>
                  <Style.Item
                    state={router.route === item.url ? "active" : "inactive"}
                  >
                    <Icon
                      icon={item.icon}
                      color={
                        router.route === item.url
                          ? theme.colors.foreground
                          : theme.colors.accent6
                      }
                    />
                    {item.label}
                  </Style.Item>
                </AlertDialog.Action>
              </Link>
            ))}
          </Style.Container>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default MobileNav;
