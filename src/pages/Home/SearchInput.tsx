import { styled } from '@stitches/react';
import React, { ReactElement } from 'react';
import { SearchIcon } from '../../components/icons/SearchIcon';
import { theme } from '../../styles/stitches.config';

const SEARCH_ICON_SIZE = 24;

interface SearchInputProps {}

export const SearchInput = ({}: SearchInputProps): ReactElement => {
  return (
    <Container>
      <SearchIconContainer>
        <SearchIcon
          size={SEARCH_ICON_SIZE}
          color={theme.colors.primary.toString()}
        />
      </SearchIconContainer>

      <Input placeholder="Search for recipes..." />
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
});

const SEARCH_ICON_LEFT = 16;

const SearchIconContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: SEARCH_ICON_LEFT,
  display: 'flex',
  alignItems: 'center',
});

const HEIGHT = 50;

const Input = styled('input', {
  width: '100%',
  height: HEIGHT,
  borderRadius: HEIGHT / 2,
  borderWidth: 2,
  borderColor: theme.colors.border,
  transition: `border-color ${theme.transitions.fast} ease`,
  borderStyle: 'solid',
  outline: 'none',
  padding: `0 ${HEIGHT / 2}px`,
  paddingLeft: SEARCH_ICON_LEFT + SEARCH_ICON_SIZE + 8,
  fontSize: theme.fontSizes.regular,
  fontWeight: 600,
  color: theme.colors.primaryText,
  caretColor: theme.colors.accent,

  '&:focus': {
    borderColor: theme.colors.accent,
  },

  '&::placeholder': {
    fontWeight: 400,
    color: theme.colors.secondaryText,
  },
});
