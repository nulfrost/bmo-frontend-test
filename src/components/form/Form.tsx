import { ReactNode, FunctionComponent, FormEvent } from "react";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode[];
  onSubmit: (event: FormEvent) => void;
};

export const Form: FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;
};

const Wrapper = styled.form``;
