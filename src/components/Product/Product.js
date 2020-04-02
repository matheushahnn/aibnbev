import React from 'react';
import styled from 'styled-components';
import { Image, ImageStyled, Text, Link } from '../../elements'

export const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  > ${ImageStyled} {
    height: 200px;
  }
`
export function Product({ product: {src, text, subtitle, unitprice, promotion}}) {
  return (
    <ProductStyled>
      <Image src={src} />
      <Text text={text}/>
      <Text className="subtitle" text={subtitle}/>
      <Text className="unitprice" text={unitprice}/>
      <Text className="promotion" text={promotion}/>
      <Link text="View details" />
    </ProductStyled>
  );
}