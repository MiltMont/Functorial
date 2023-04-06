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
  X,
  Copy,
  Search,
} from "react-feather";
import { RoundButton } from "../graphics/RoundButton";
import Link from "next/link";

type Props = {
  icon: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  button?: boolean;
  href?: string;
};

const iconSelector: FC<Props> = (props) => {
  switch (props.icon) {
    case "home":
      return <Home {...props} />;
    case "archive":
      return <Archive {...props} />;
    case "book":
      return <Book {...props} />;
    case "book-open":
      return <BookOpen {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "user":
      return <User {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "music":
      return <Music {...props} />;
    case "pen-tool":
      return <PenTool {...props} />;
    case "package":
      return <Package {...props} />;
    case "close":
      return <X {...props} />;
    case "copy":
      return <Copy {...props} />;
    case "round-button":
      return <RoundButton />;
    case "search":
      return <Search {...props} />;
  }
};

const Icon: FC<Props> = ({
  icon,
  size = 20,
  color = theme.colors.foreground,
  strokeWidth = 2,
  button = false,
  href,
}) => {
  const props = { icon, size, color, strokeWidth, href };
  if (button) {
    return <button style={{ all: "unset" }}>{iconSelector(props)}</button>;
  } else if (href) {
    return <Link href={href}>{iconSelector(props)}</Link>;
  } else {
    return iconSelector(props);
  }
};

export default Icon;
