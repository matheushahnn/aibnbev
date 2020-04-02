import React from 'react';
import { ProductTile } from './ProductTile';

export default { 
  title: 'Containers|ProductTile',
  decorators: [
    storyFn2 => <div style={{ maxWidth: '280px' }}>{storyFn2()}</div>
  ]
};

const products = [
  {
    text: "Modelo Negra",
    src: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
    subtitle: "12 Unit - 33oz Bottle",
    unitprice: "RD$32,00/Unit",
    promotion: "Buy 3, get 1 free."
  },
]

export const ProductTileExample = () => <ProductTile products={products}/>;
