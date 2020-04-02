import React from 'react';
import styled from 'styled-components';
import { titleColor, subtitleColor, promotionColor } from '../../assets/styles/settings/colors';

const TextStyled = styled.span`
  color: ${titleColor};
  font-weight: bold;
  font-size: 18px;

  &.unitprice { 
    margin-top: 5px;
    color: ${titleColor};
    font-weight: normal;
    font-size: 14px;
  }

  &.subtitle { 
    color: ${subtitleColor};
    font-weight: normal;
    font-size: 12px;
  }

  &.promotion {
    margin-top: 10px;
    color: ${promotionColor};
    font-weight: normal;
    font-size: 12px;
  }
`

export function Text({ text, className }) {
  return (
    <TextStyled className={className}>
      {text}
    </TextStyled>
  )
}