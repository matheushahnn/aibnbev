import React from 'react';
import { Button } from './Button';
import '../../index.css';

export default { 
  title: 'Elements|Button',
  decorators: [
    storyFn2 => <div style={{ maxWidth: '200px' }}>{storyFn2()}</div>
  ]
};

export const AddButton = () => <Button text="ADD" />;
export const DisabledButton = () => <Button disabled="true" text="ADD" />;
export const SinalPlusButton = () => <Button className="sinal" text="+" />;
export const SinalSubButton = () => <Button className="sinal" text="-" />;