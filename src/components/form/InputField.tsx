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
      <Input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 0.3rem;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
`;
