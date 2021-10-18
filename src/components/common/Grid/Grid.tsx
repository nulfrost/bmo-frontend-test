import styled from "styled-components";

export const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1130px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
