import React from "react";
import theme from "../../styles/Theme";

export const LogoSM: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="130" width="30" height="10" fill={theme.colors.brand} />
    <rect
      x="120"
      y="30"
      width="20"
      height="10"
      fill={theme.colors.foreground}
    />
    <rect
      x="130"
      y="10"
      width="10"
      height="10"
      fill={theme.colors.foreground}
    />
    <rect x="40" y="30" width="20" height="10" fill={theme.colors.foreground} />
    <rect x="40" y="10" width="10" height="10" fill={theme.colors.foreground} />
    <rect
      x="170"
      y="80"
      width="10"
      height="100"
      fill={theme.colors.foreground}
    />
    <rect
      x="40"
      y="50"
      width="100"
      height="10"
      fill={theme.colors.foreground}
    />
    <rect width="10" height="100" fill={theme.colors.foreground} />
    <rect x="20" width="10" height="100" fill={theme.colors.foreground} />
    <rect y="110" width="30" height="10" fill={theme.colors.brand} />
    <rect x="150" y="60" width="30" height="10" fill={theme.colors.brand} />
    <rect x="150" y="40" width="30" height="10" fill={theme.colors.brand} />
    <rect
      x="150"
      y="80"
      width="10"
      height="100"
      fill={theme.colors.foreground}
    />
    <rect x="150" width="10" height="30" fill={theme.colors.foreground} />
    <rect x="170" width="10" height="30" fill={theme.colors.foreground} />
    <rect x="80" y="90" width="20" height="10" fill={theme.colors.foreground} />
    <rect x="60" y="70" width="60" height="10" fill={theme.colors.foreground} />
    <rect
      x="20"
      y="150"
      width="10"
      height="30"
      fill={theme.colors.foreground}
    />
    <rect y="150" width="10" height="30" fill={theme.colors.foreground} />
  </svg>
);
