import { FC } from "react";
import theme from "../../styles/Theme";
import {
  Home,
  Archive,
  Book,
  BookOpen,
  Terminal,
  User,
  Twitter,
  GitHub,
  Music,
  PenTool,
  Package,
} from "react-feather";

type Props = {
  icon: string;
  size?: number;
  color?: string;
};

const Icon: FC<Props> = ({
  icon,
  size = 20,
  color = theme.colors.foreground,
}) => {
  switch (icon) {
    case "home":
      return <Home size={size} color={color} />;
    case "archive":
      return <Archive size={size} color={color} />;
    case "book":
      return <Book size={size} color={color} />;
    case "book-open":
      return <BookOpen size={size} color={color} />;
    case "terminal":
      return <Terminal size={size} color={color} />;
    case "user":
      return <User size={size} color={color} />;
    case "twitter":
      return <Twitter size={size} color={color} />;
    case "github":
      return <GitHub size={size} color={color} />;
    case "music":
      return <Music size={size} color={color} />;
    case "pen-tool":
      return <PenTool size={size} color={color} />;
    case "package":
      return <Package size={size} color={color} />;
  }
};

export default Icon;
