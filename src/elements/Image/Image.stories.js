import React from 'react';
import { Image } from './Image';
import '../../index.css';

export default { 
  title: 'Elements|Image',
  decorators: [
    storyFn2 => <div style={{ width: '200px', height: '200px', display: 'flex' }}>{storyFn2()}</div>
  ]
};

const src = "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png";

export const ImageExample = () => <Image src={src} />;