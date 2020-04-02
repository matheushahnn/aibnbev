import React from 'react';
import styled from 'styled-components';
import { Product } from '../../components/Product/Product';
import { ProductForm } from '../../components/ProductForm/ProductForm';
import { borderColor } from '../../assets/styles/settings/colors';

const ProductItemStyled = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  max-width: 300px;
  min-width: 200px;
  height: 380px;
  margin: 10px 0 0 10px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  box-shadow: 0 8px 6px -6px rgba(0,0,0,0.5);
`

const ProductTileStyled = styled.div`
  display: flex;
  margin: -10px 0 0 -10px;;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
  }
`

export function ProductTile({products}) {
  return (
    <ProductTileStyled>
      {
        products.map((product, index) =>
          <ProductItemStyled>
            <Product key={`product_${index}`} product={product}/>
            <ProductForm key={`form_${index}`} product={product}/>
          </ProductItemStyled>
        )
      }
    </ProductTileStyled>
  )
}