import { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  repeat: number;
  gap: number;
};

export const Grid: FunctionComponent<Props> = ({ children, repeat, gap }) => {
  return (
    <Wrapper repeat={repeat} gap={gap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ repeat: number; gap: number }>`
  display: grid;
  gap: ${(props) => props.gap}px;
  grid-template-columns: repeat(${(props) => props.repeat}, 1fr);
`;
