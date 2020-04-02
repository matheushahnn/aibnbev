import React from 'react';
import styled from 'styled-components';
import { linkColor } from '../../assets/styles/settings/colors';

const LinkStyled = styled.a`
  color: ${linkColor};
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
`

export function Link({ text }) {
  return (
    <LinkStyled href="#">
      {text}
    </LinkStyled>
  )
}