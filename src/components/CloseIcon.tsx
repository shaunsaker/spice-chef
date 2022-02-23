import Link from 'next/link';
import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';
import Icon from './icons/close.svg';

const BACK_ICON_SIZE = 20;

interface CloseIconProps {}

export const CloseIcon = ({}: CloseIconProps): ReactElement => {
  return (
    <Link href="/" passHref>
      <CloseIconContainer>
        <Icon
          width={BACK_ICON_SIZE}
          height={BACK_ICON_SIZE}
          fill={theme.colors.primaryText.toString()}
        />
      </CloseIconContainer>
    </Link>
  );
};

const CloseIconContainer = styled('div', {
  cursor: 'pointer',
  display: 'flex',
});
