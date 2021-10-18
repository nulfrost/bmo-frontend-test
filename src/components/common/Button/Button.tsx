import styled from "styled-components/macro";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Button: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.button`
  padding: 1rem;
  font-size: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;
