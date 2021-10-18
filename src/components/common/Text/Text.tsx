import styled from "styled-components/macro";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as: keyof HTMLElementTagNameMap;
  fontSize: string;
};

export const Text: FunctionComponent<Props> = ({ children, as, fontSize }) => {
  return (
    <Wrapper as={as} fontSize={fontSize}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`;
