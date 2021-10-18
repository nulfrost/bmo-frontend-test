import styled from "styled-components/macro";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  margin-top: 1rem;
  padding: 0 1rem;
  @media (min-width: 1200px) {
    padding: 0;
  }
`;
