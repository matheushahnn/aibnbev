import React from 'react';
import styled from 'styled-components';
import { primaryColor, disableButtonColor, buttonHoverColor, buttonPressedColor } from '../../assets/styles/settings/colors';

export const ButtonStyled = styled.button`
  padding: 5px 0;
  text-align: center;
  border: 1px solid ${props => props.disabled ? disableButtonColor : primaryColor};
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  background: none;
  color: ${props => props.disabled ? disableButtonColor : primaryColor};
  box-shadow: 2px 4px 4px 0px rgba(0,0,0,0.1);

  &:not(:disabled):hover {
    background: ${buttonHoverColor};
  }  

  &:not(:disabled):active {
    background: ${buttonPressedColor};
  }  

  &:not(:disabled):active, 
  &:not(:disabled):focus {
    outline: 0;
  }

  &.sinal {
    padding: 0;
    width: 24px;
    height: 24px;
    border-radius: 12px;  
  }
`

export function Button({ disabled, text, type, className, onClick }) {
  return (
    <ButtonStyled type={type} className={className} disabled={disabled} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}