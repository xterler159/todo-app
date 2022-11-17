import React, { FC } from "react"
import { UseFormRegister } from "react-hook-form"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid crimson;

  .error-msg {
    margin-left: 5px;
  }
`

const ErrorMessage = styled.span`
  font-size: 0.9em;
  color: #e91e63;
  margin-left: 5px;
`

// export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   props?: InputHTMLAttributes<HTMLInputElement>;
// }

export type InputError = {
  inputName: string
  message: string
}

export interface InputProps {
  register: UseFormRegister<any>
  name: string
  placeholder?: string
  required?: boolean
  error?: any
}

// props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, { test }: InputProps
const Input: FC<InputProps> = ({ register, name, placeholder, required, error }) => {
  return (
    <>
      <Wrapper>
        <input placeholder={placeholder} {...register(name)} required={required} />
      </Wrapper>
      {error[name] && <ErrorMessage>{error[name].message}</ErrorMessage>}
    </>
  )
}

export default Input
