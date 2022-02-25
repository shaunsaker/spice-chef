import React, { ChangeEvent, ReactElement, useCallback } from 'react';
import SearchIcon from './icons/search.svg';
import { styled, theme } from '../styles/stitches.config';

const SEARCH_ICON_SIZE = 16;

interface SearchInputProps {
  value: string;
  onChangeText: (_text: string) => void;
}

export const SearchInput = ({
  value,
  onChangeText,
}: SearchInputProps): ReactElement => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeText(event.target.value);
    },
    [onChangeText],
  );

  return (
    <Container>
      <SearchIconContainer>
        <SearchIcon
          width={SEARCH_ICON_SIZE}
          height={SEARCH_ICON_SIZE}
          fill={theme.colors.primaryText.toString()}
        />
      </SearchIconContainer>

      <Input
        placeholder="Search for recipes..."
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  maxWidth: 360,
  margin: '0 auto',
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

const HEIGHT = 40;

const Input = styled('input', {
  width: '100%',
  height: HEIGHT,
  borderRadius: theme.borderRadius.small,
  outline: 'none',
  padding: `0 ${HEIGHT / 2}px`,
  paddingLeft: SEARCH_ICON_LEFT + SEARCH_ICON_SIZE + 8,
  fontSize: theme.fontSizes.small,
  fontWeight: 600,
  color: theme.colors.primaryText,
  caretColor: theme.colors.accent,
  backgroundColor: theme.colors.background,
  transition: theme.transitions.default,
  boxShadow:
    '0px 4px 6px 0px rgb(50 50 93 / 11%), 0px 1px 3px 0px rgb(0 0 0 / 8%)',
  border: `${theme.borderWidths.small} solid transparent`,

  '&:focus': {
    boxShadow: theme.boxShadows.large,
    borderColor: theme.colors.accent,
  },

  '&::placeholder': {
    color: theme.colors.secondaryText,
  },
});
