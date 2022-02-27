import React, {
  ChangeEvent,
  createRef,
  ReactElement,
  useCallback,
} from 'react';
import SearchIcon from './icons/search.svg';
import CloseIcon from './icons/close.svg';
import { styled, theme } from '../styles/stitches.config';

interface SearchInputProps {
  value: string;
  onChangeText: (_text: string) => void;
  onSubmit: () => void;
}

export const SearchInput = ({
  value,
  onChangeText,
  onSubmit: onSubmitCb,
}: SearchInputProps): ReactElement => {
  const ref = createRef<HTMLInputElement>();

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeText(event.target.value);
    },
    [onChangeText],
  );

  const onClearClick = useCallback(() => {
    onChangeText('');
  }, [onChangeText]);

  const onSubmit = useCallback(
    event => {
      // prevent default page reload
      event.preventDefault();

      // dismiss the keyboard on mobile
      ref.current.blur();

      onSubmitCb();
    },
    [ref, onSubmitCb],
  );

  return (
    <Container onSubmit={onSubmit}>
      <SearchIconContainer>
        <StyledSearchIcon />
      </SearchIconContainer>

      <Input
        ref={ref}
        placeholder="Search for Spice Recipes..."
        value={value}
        onChange={onChange}
      />

      {value.length ? (
        <CloseIconContainer onClick={onClearClick}>
          <StyledCloseIcon />
        </CloseIconContainer>
      ) : null}
    </Container>
  );
};

const Container = styled('form', {
  position: 'relative',
  maxWidth: 360,
  margin: '0 auto',
});

const ICON_MARGIN = 16;

const SearchIconContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: ICON_MARGIN,
  display: 'flex',
  alignItems: 'center',
});

const ICON_SIZE = 16;

const StyledSearchIcon = styled(SearchIcon, {
  width: ICON_SIZE,
  height: ICON_SIZE,
  color: theme.colors.primaryText,
});

const HEIGHT = 40;

const Input = styled('input', {
  width: '100%',
  height: HEIGHT,
  borderRadius: theme.borderRadius.small,
  outline: 'none',
  padding: 0,
  paddingLeft: ICON_MARGIN + ICON_SIZE + 8,
  paddingRight: ICON_MARGIN + ICON_SIZE + 8,
  fontSize: theme.fontSizes.small,
  fontWeight: 600,
  color: theme.colors.primaryText,
  caretColor: theme.colors.accent,
  backgroundColor: theme.colors.white,
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

const CloseIconContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: ICON_MARGIN,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover > svg': {
    color: theme.colors.accent,
  },
});

const StyledCloseIcon = styled(CloseIcon, {
  width: ICON_SIZE,
  height: ICON_SIZE,
  color: theme.colors.primaryText,
  transition: theme.transitions.default,
});
