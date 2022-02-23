import { styled } from '@stitches/react';
import React, { ChangeEvent, ReactElement, useCallback } from 'react';
import SearchIcon from './icons/search.svg';
import { theme } from '../styles/stitches.config';

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
  border: 'none',
  outline: 'none',
  padding: `0 ${HEIGHT / 2}px`,
  paddingLeft: SEARCH_ICON_LEFT + SEARCH_ICON_SIZE + 8,
  fontSize: theme.fontSizes.regular,
  fontWeight: 600,
  color: theme.colors.primaryText,
  caretColor: theme.colors.accent,
  boxShadow:
    '0px 4px 6px 0px rgb(50 50 93 / 11%), 0px 1px 3px 0px rgb(0 0 0 / 8%)',
  transition: 'all 0.2s ease-in-out',

  '&:focus': {
    boxShadow:
      '0px 4px 10px 0px rgb(50 50 93 / 23%), 0px 1px 3px 0px rgb(0 0 0 / 8%);',
  },

  '&::placeholder': {
    fontWeight: 400,
    color: theme.colors.secondaryText,
  },
});
