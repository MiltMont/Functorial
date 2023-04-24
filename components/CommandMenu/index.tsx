import { Command } from "cmdk";
import { S } from "./css";
import { Inter } from "next/font/google";
import { Global } from "../../utils/globals";
import { useNavState } from "../../hooks/useNavState";
import Spacer from "../utils/Spacer";
import Router, { useRouter } from "next/router";
import { useState } from "react";

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

  //Search
  const [search, setSearch] = useState("");

  //Pages
  const [pages, setPages] = useState([]);
  const page = pages[pages.length - 1];

  return (
    <S.Container>
      <Command
        label="Command Menu"
        className={inter.className}
        onKeyDown={(e) => {
          // alt + backspace goes to previous page
          if (e.key === "Backspace" && e.altKey) {
            e.preventDefault();
            setPages((pages) => pages.slice(0, -1));
          }
        }}
      >
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          {page === "share-article" && (
            <>
              <Spacer />
              <Command.Separator>Select Social Media</Command.Separator>
              <Command.Item
                onSelect={() =>
                  router.push(
                    `https://twitter.com/share?url=${route}&via=Functorial`
                  )
                }
              >
                Twitter
              </Command.Item>
              <Command.Item>Reddit</Command.Item>
              <Command.Item>Facebook</Command.Item>
            </>
          )}

          {!page && route.includes("/articles") && route !== "/articles" && (
            <>
              <Spacer />
              <Command.Separator>Article</Command.Separator>
              <Command.Item disabled>Like article</Command.Item>
              <Command.Item
                onSelect={() => setPages([...pages, "share-article"])}
              >
                Share article
              </Command.Item>
            </>
          )}

          {!page && (
            <>
              <Spacer />
              <Command.Separator>Commands</Command.Separator>
              <Command.Item onSelect={() => setClosed(closed)}>
                Toggle Sidebar
              </Command.Item>

              <Spacer />
              <Command.Separator>Navigation</Command.Separator>
              {Global.navigation.map((item, i) => (
                <Command.Item
                  key={i}
                  value={item.label}
                  onSelect={() => {
                    router.push(item.url);
                  }}
                >
                  {item.label}
                </Command.Item>
              ))}
            </>
          )}
        </Command.List>
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
      </Command>
    </S.Container>
  );
};

export default CommandMenu;
