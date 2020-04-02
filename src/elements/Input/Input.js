import React from 'react';
import styled from 'styled-components';

export const InputStyled = styled.input`
  border-radius: 2px;
  border: 1px solid #AEAEAE;  
`

export function Input(props) {
  const { quantity, onChange } = props;
  return (
    <InputStyled type="text" onChange={onChange} value={quantity}/>
  )
} 