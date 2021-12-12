import React, { ReactElement } from 'react';
import { styled, theme } from '../../styles/stitches.config';
import { BrandMark } from './BrandMark';
import { Logo } from './Logo';

interface HeaderBarProps {}

export const HeaderBar = ({}: HeaderBarProps): ReactElement => {
  return (
    <Container>
      <BrandMarkContainer>
        <BrandMark />
      </BrandMarkContainer>

      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  height: 64,
  padding: `0 ${theme.space.large}`,
  display: 'flex',
  alignItems: 'center',
});

const BrandMarkContainer = styled('div', {
  marginRight: theme.space.small,
});

const LogoContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
});
