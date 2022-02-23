import React, { ReactElement, useCallback } from 'react';
import { styled, theme } from '../../styles/stitches.config';
import { BrandMark } from './BrandMark';
import CloseIcon from '../icons/close.svg';
import Link from 'next/link';
import { Button } from '../Button';
import { SUPPORT_EMAIL } from '../../config';

const BACK_ICON_SIZE = 20;

interface HeaderBarProps {
  showBack?: boolean;
}

export const HeaderBar = ({ showBack }: HeaderBarProps): ReactElement => {
  return (
    <Wrapper>
      <Container>
        <ContentContainer>
          <LogoContainer>
            <BrandMarkContainer>
              <BrandMark />
            </BrandMarkContainer>

            <LogoText>Spice Chef</LogoText>
          </LogoContainer>

          <RightContainer>
            <Button href={`mailto:${SUPPORT_EMAIL}`}>Contact</Button>

            {showBack && (
              <CloseButtonContainer>
                <Link href="/" passHref>
                  <CloseIconContainer>
                    <CloseIcon
                      width={BACK_ICON_SIZE}
                      height={BACK_ICON_SIZE}
                      fill={theme.colors.primaryText.toString()}
                    />
                  </CloseIconContainer>
                </Link>
              </CloseButtonContainer>
            )}
          </RightContainer>
        </ContentContainer>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContentContainer = styled('div', {
  maxWidth: theme.sizes.maxContentWidth,
  width: '100%',
  padding: `0 ${theme.space.large}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
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
  display: 'flex',
  alignItems: 'center',
});

const CloseButtonContainer = styled('div', {
  marginLeft: theme.space.large,
});

const CloseIconContainer = styled('div', {
  cursor: 'pointer',
  display: 'flex',
});
