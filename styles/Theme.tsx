import { DefaultTheme } from "styled-components";
import { base } from "../utils/base";

export type Color =
  | "background"
  | "foreground"
  | "accent1"
  | "accent2"
  | "accent3"
  | "accent4"
  | "accent5"
  | "accent6"
  | "accent7"
  | "accent8"
  | "error"
  | "errorLight"
  | "errorLighter"
  | "errorDark"
  | "success"
  | "successLight"
  | "successLighter"
  | "successDark"
  | "warning"
  | "warningLight"
  | "warningLighter"
  | "warningDark"
  | "highglight"
  | "brand";

const theme: DefaultTheme = {
  colors: {
    background: "#000",
    foreground: "#fff",

    accent1: "#111",
    accent2: "#333",
    accent3: "#444",
    accent4: "#666",
    accent5: "#888",
    accent6: "#999",
    accent7: "#eaeaea",
    accent8: "#fafafa",

    error: "red",
    errorLight: "#f33",
    errorLighter: "#f7d4d6",
    errorDark: "#e60000",

    success: "#0070f3",
    successLight: "#3291ff",
    successLighter: "#d3e5ff",
    successDark: "#0761d1",

    warning: "#f5a623",
    warningLight: "#f7b955",
    warningLighter: "#ffefcf",
    warningDark: "#ab570a",

    highglight: "#fff500",
    brand: "#D7FF38",
  },
  fontSize: {
    1: "14px",
    2: "0.875rem" /* 16px */,
    3: "1rem",
    4: "1.125rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "2rem",
  },
  fontWeight: {
    1: "300",
    2: "400",
    3: "500",
    4: "600",
  },
  borderRadius: {
    1: "4px",
    2: "8px",
  },
  breakpoints: {
    xs: "400px",
    sm: "768px",
    md: "1024px",
    lg: "1600px",
    xl: "1920px",
  },
  breakpointsAsInt: {
    xs: 400,
    sm: 768,
    md: 1024,
    lg: 1600,
    xl: 1920,
  },
  space: {
    1: base(),
    2: base(2),
    3: base(3),
    4: base(4),
    5: base(5),
    6: base(6),
    7: base(7),
    8: base(8),
    9: base(9),
    10: base(10),
    11: base(11),
    12: base(12),
  },
  zIndex: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
  },
};

export default theme;
