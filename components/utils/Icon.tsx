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
  const props = { icon, size, color };

  switch (icon) {
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
  }
};

export default Icon;
