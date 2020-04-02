import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonStyled } from '../../elements'
import { Input } from '../../elements/Input';

export const RangeInputStyled = styled.div``
export const ProductFormStyled = styled.form`
  display: flex;
  height: 25px;

  & > ${RangeInputStyled} {
    display: flex;  
    flex: 1 0 0;
  
    > input { 
      flex: 1 0 0;
      max-width: 30px;
      margin: 0 5px;    
      text-align: center;
    }
  }

  & > ${ButtonStyled} {
    flex: 1 0 0
  }
`
export function ProductForm({ product: { quantity } }) {
  const [productQuantity, setQuantity] = useState(quantity)

  const checkDisabled = () => !(productQuantity > 0);
  const checkValue = (event) => {
    const value = event.target.value;
    const isnum = /^\d+$/.test(value);
    if (!isnum) {
      setQuantity(0);
    } else {
      setQuantity(event.target.value);
    }
  }

  return (
    <ProductFormStyled>     
      <RangeInputStyled>
        <Button 
          className="sinal" text="-" 
          onClick={() => setQuantity(productQuantity - 1) }
          type="button"
          disabled={ productQuantity === 0 }
          />
        <Input 
          quantity={productQuantity} 
          onChange={checkValue}
        />
        <Button 
          className="sinal" 
          onClick={() => setQuantity(productQuantity + 1) } 
          text="+" 
          type="button"
          />
      </RangeInputStyled>
      <Button text="ADD" disabled={checkDisabled()} type="button"/>
    </ProductFormStyled>
  );
}