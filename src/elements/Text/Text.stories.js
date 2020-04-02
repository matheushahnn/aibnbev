import React from 'react';
import { Text } from './Text';
import '../../index.css';

export default { 
  title: 'Elements|Text',
  decorators: [
    storyFn1 => <div style={{ maxWidth: '200px' }}>{storyFn1()}</div>
  ]
};

export const Title = () => <Text text="Modelo Negra" />;
export const SubTitle = () => <Text className="subtitle" text="12 Unit - 33oz Bottle" />;
export const UnitPriceText = () => <Text className="unitprice" text="RD$32,00/Unit" />;
export const PromotionText = () => <Text className="promotion" text="RD$32,00/Unit" />;