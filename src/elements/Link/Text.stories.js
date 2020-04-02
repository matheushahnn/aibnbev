import React from 'react';
import { Link } from './Link';

export default { 
  title: 'Elements|Link',
  decorators: [
    storyFn2 => <div style={{ maxWidth: '200px' }}>{storyFn2()}</div>
  ]
};

export const LinkExample = () => <Link text="View Details" />;