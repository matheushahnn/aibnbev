import React from 'react';
import styled from 'styled-components';

export const ImageStyled = styled.img`  
  width: 100%;
  object-fit: contain;
`

export function Image(props) {
  const { src, className } = props;

  return (
    <ImageStyled className={className} href="#" src={src}/>
  )
}