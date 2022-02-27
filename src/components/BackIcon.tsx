import Link from 'next/link';
import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';
import Icon from './icons/chevron-left.svg';

interface BackIconProps {}

export const BackIcon = ({}: BackIconProps): ReactElement => {
  return (
    <Link href="/" passHref>
      <BackIconContainer>
        <StyledIcon />
      </BackIconContainer>
    </Link>
  );
};

const BackIconContainer = styled('div', {
  cursor: 'pointer',
  display: 'flex',

  '&:hover > svg': {
    color: theme.colors.accent,
  },
});

const BACK_ICON_SIZE = 24;

const StyledIcon = styled(Icon, {
  width: BACK_ICON_SIZE,
  height: BACK_ICON_SIZE,
  color: theme.colors.primaryText,
  transition: theme.transitions.default,
});
