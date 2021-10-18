import styled from "styled-components/macro";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "submit" | "button" | "reset";
};

export const Button: FunctionComponent<Props> = ({ children, type }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
