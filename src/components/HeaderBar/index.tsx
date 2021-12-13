import React, { ReactElement } from 'react';
import { styled, theme } from '../../styles/stitches.config';
import { BrandMark } from './BrandMark';
import { Logo } from './Logo';
import CloseIcon from '../icons/close.svg';
import Link from 'next/link';

const BACK_ICON_SIZE = 20;

interface HeaderBarProps {
  showBack?: boolean;
}

export const HeaderBar = ({ showBack }: HeaderBarProps): ReactElement => {
  return (
    <Container>
      <BrandMarkContainer>
        <BrandMark />
      </BrandMarkContainer>

      <LogoContainer>
        <Logo />
      </LogoContainer>

      {showBack && (
        <Link href="/" passHref>
          <div>
            <CloseIcon
              width={BACK_ICON_SIZE}
              height={BACK_ICON_SIZE}
              fill={theme.colors.primaryText.toString()}
            />
          </div>
        </Link>
      )}
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  height: 64,
  padding: `0 ${theme.space.large}`,
  display: 'flex',
  justifyContent: 'space-between',
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
