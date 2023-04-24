import { Command } from "cmdk";
import { S } from "./css";
import { Inter } from "next/font/google";
import { Global } from "../../utils/globals";
import { useNavState } from "../../hooks/useNavState";
import Spacer from "../utils/Spacer";
import Router, { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const CommandMenu = () => {
  const closed = useNavState((state) => state.closed);
  const setClosed = useNavState((state) => state.setClosed);

  // Routing
  const route = Router.route;
  const router = useRouter();

  return (
    <S.Container>
      <Command label="Command Menu" className={inter.className}>
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          {route.includes("/articles") && route !== "/articles" && (
            <>
              <Spacer />
              <Command.Separator>Article</Command.Separator>
              <Command.Item>Like article</Command.Item>
              <Command.Item>Share article</Command.Item>
            </>
          )}

          <Spacer />
          <Command.Separator>Commands</Command.Separator>
          <Command.Item onSelect={() => setClosed(closed)}>
            Toggle Sidebar
          </Command.Item>

          <Spacer />
          <Command.Separator>Suggested</Command.Separator>
          {Global.navigation.map((item, i) => (
            <Command.Item
              key={i}
              value={item.label}
              onSelect={(value) => {
                router.push(item.url);
                console.log("Selected:", value);
              }}
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
        <Command.Input autoFocus placeholder="Type a command or search..." />
      </Command>
    </S.Container>
  );
};

export default CommandMenu;
