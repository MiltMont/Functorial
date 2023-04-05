import theme from "../../styles/Theme";

export const RoundButton = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill={theme.colors.accent8} />
    <path
      d="M13 20H27"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 13L27 20L20 27"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
