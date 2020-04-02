import React from 'react';
import { Image } from './Image';

export default { 
  title: 'Elements|Image',
  decorators: [
    storyFn2 => <div style={{ maxWidth: '200px' }}>{storyFn2()}</div>
  ]
};

const src = "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png";

export const ImageExample = () => <Image src={src} />;