import Flex from "../components/utils/Flex";
import Box from "../components/utils/Box";
import theme from "../styles/Theme";

export default function Home() {
  return (
    <>
      <Flex
        gap={theme.space[1]}
        style={{
          height: "100px",
        }}
        alignContent="center"
        justifyContent="center"
        className="flex1"
      >
        <Box>Box 1</Box>

        <Box style={{ backgroundColor: "blue" }}>Box 1</Box>
        <Box style={{ backgroundColor: "blue" }}>Box 1</Box>
        <Box style={{ backgroundColor: "blue" }}>Box 1</Box>
      </Flex>
    </>
  );
}
