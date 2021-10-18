import React, { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components/macro";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
};

type Ref = HTMLInputElement;

export const InputField = forwardRef<Ref, Props>((props, ref) => {
  return (
    <Wrapper>
      <label htmlFor={props.name}>{props.label}</label>
      <Input type={props.type} placeholder={props.placeholder} ref={ref} />
    </Wrapper>
  );
});

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
