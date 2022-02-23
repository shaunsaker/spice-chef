import React, { ReactElement, ReactNode } from 'react';
import { styled, theme } from '../../styles/stitches.config';
import { BrandMark } from './BrandMark';
import Link from 'next/link';
import { ContentContainer } from '../ContentContainer';

interface HeaderBarProps {
  children?: ReactNode;
}

export const HeaderBar = ({ children }: HeaderBarProps): ReactElement => {
  return (
    <Wrapper>
      <Container>
        <StyledContentContainer>
          <LogoContainer>
            <Link href="/" passHref>
              <BrandMarkContainer>
                <BrandMark />
              </BrandMarkContainer>
            </Link>

            <LogoText>Spice Chef</LogoText>
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
  backgroundColor: theme.colors.white,
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 15px',
});

const StyledContentContainer = styled(ContentContainer, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${theme.space.large}`,
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
});

const BrandMarkContainer = styled('div', {
  marginRight: theme.space.small,
});

const RightContainer = styled('div', {
  marginLeft: theme.space.large,
});
