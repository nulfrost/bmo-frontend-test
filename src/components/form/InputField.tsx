import { FunctionComponent, InputHTMLAttributes } from "react";
import styled from "styled-components/macro";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
};

export const InputField: FunctionComponent<Props> = ({
  type,
  name,
  label,
  placeholder,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
