import { Command } from "cmdk";
import { S } from "./css";
import { Inter } from "next/font/google";
import { Global } from "../../utils/globals";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const CommandMenu = () => {
  return (
    <S.Container>
      <Command label="Command Menu" className={inter.className}>
        <Command.Input autoFocus placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {Global.navigation.map((item, i) => (
            <Command.Item
              key={i}
              value={item.label}
              onSelect={(value) => console.log("Selected:", value)}
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </S.Container>
  );
};

export default CommandMenu;
