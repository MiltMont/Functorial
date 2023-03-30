import styled from "styled-components";
/*
Since we are not using the babel plugin for styled-components, 
we cannot use the css prop to style this component. Thus, we 
must use Next.js' built-in CSS-in-JS solution, which is

<Box style={{ ... }} > ... </Box>
*/

const Box = styled.div``;

export default Box;
