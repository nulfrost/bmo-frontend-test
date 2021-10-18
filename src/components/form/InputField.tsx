import React, { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components/macro";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
  srOnly?: boolean;
};

type Ref = HTMLInputElement;

export const InputField = forwardRef<Ref, Props>((props, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={props.name} srOnly={props.srOnly}>
        {props.label}
      </Label>
      <Input type={props.type} placeholder={props.placeholder} ref={ref} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
`;

const Label = styled.label<{ srOnly: boolean }>`
  ${(props) =>
    props.srOnly &&
    `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  `}
`;
