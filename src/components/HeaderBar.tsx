import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { styled, theme } from '../styles/stitches.config';
import Link from 'next/link';
import { ContentContainer } from './ContentContainer';
import { BackIcon } from './BackIcon';

interface HeaderBarProps {
  showBack?: boolean;
  children?: ReactNode;
}

export const HeaderBar = ({
  showBack,
  children,
}: HeaderBarProps): ReactElement => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onBodyScroll = useCallback(() => {
    const scrollOffset = window.pageYOffset;

    if (scrollOffset === 0) {
      setHasScrolled(false);
    } else {
      setHasScrolled(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onBodyScroll);

    return () => window.removeEventListener('scroll', onBodyScroll);
  });

  return (
    <Wrapper>
      <Container hasScrolled={hasScrolled}>
        <StyledContentContainer>
          <LogoContainer>
            {showBack && (
              <BackIconContainer>
                <BackIcon />
              </BackIconContainer>
            )}

            <Link href="/" passHref>
              <LogoText>
                Spice{' '}
                <span style={{ color: theme.colors.primary.toString() }}>
                  Chef
                </span>
              </LogoText>
            </Link>
          </LogoContainer>

          <RightContainer>{children}</RightContainer>
        </StyledContentContainer>
      </Container>

      <Spacer />
    </Wrapper>
  );
};

const Wrapper = styled('div', {});

const HEADER_HEIGHT = 64;

// used to push page content down since the Container is fixed
const Spacer = styled('div', {
  height: HEADER_HEIGHT,
});

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  height: HEADER_HEIGHT,
  transition: theme.transitions.default,

  variants: {
    hasScrolled: {
      true: {
        backgroundColor: theme.colors.background,
        boxShadow: theme.boxShadows.large,
      },
    },
  },
});

const StyledContentContainer = styled(ContentContainer, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${theme.space.large}`,
});

const BackIconContainer = styled('div', {
  marginRight: theme.space.large,
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const LogoText = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: theme.fontSizes.heading,
  color: theme.colors.primaryText,
  marginBottom: 4, // vertical alignment

  '& > span': {
    fontFamily: theme.fonts.logo,
  },
});

const RightContainer = styled('div', {
  marginLeft: theme.space.large,
});
