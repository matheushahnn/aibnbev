import React from 'react';
import { Input } from './Input';
import '../../index.css';

export default { 
  title: 'Elements|Input',
  decorators: [
    storyFn2 => <div style={{ maxWidth: '200px' }}>{storyFn2()}</div>
  ]
};

export const InputExample = () => <Input />;