import styled from "styled-components";

interface BackgroundProps {
  bg?: string;
}

export const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex; /* optional: for layout */
  flex-direction: column; /* optional */
  justify-content: center; /* optional */
  align-items: center; /* optional */
`;
