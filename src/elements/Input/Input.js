import React from 'react';
import styled from 'styled-components';
import { inputColor } from '../../assets/styles/settings/colors';

export const InputStyled = styled.input`
  border-radius: 2px;
  border: 1px solid ${inputColor};  
`

export function Input(props) {
  const { quantity, onChange } = props;
  return (
    <InputStyled type="text" onChange={onChange} value={quantity}/>
  )
} 