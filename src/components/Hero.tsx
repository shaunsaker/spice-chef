import { styled } from '@stitches/react';
import React, { ReactElement } from 'react';
import { theme } from '../styles/stitches.config';
import { ContentContainer } from './ContentContainer';
import Image from 'next/image';

interface HeroProps {}

export const Hero = ({}: HeroProps): ReactElement => {
  return (
    <Container>
      <StyledContentContainer>
        <Column>
          <TitleText>
            Say Hello to your very own Spice{' '}
            <span style={{ color: theme.colors.primary.toString() }}>
              Chef{' '}
            </span>
          </TitleText>

          <DescriptionText>
            From <i>Dukkah</i> to <i>Berbere</i> to <i>Chimichurri</i>,
            we&apos;ve created a curated collection of classic spice recipes
            from all corners of the globe. <br />
            <b>Happy cooking, good looking!</b>
          </DescriptionText>
        </Column>

        <Spacer />

        <Column style={{ alignItems: 'flex-end' }}>
          <Image
            src={require('../../public/images/chef.png')}
            alt="Spice Chef"
          />
        </Column>
      </StyledContentContainer>
    </Container>
  );
};

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

const StyledContentContainer = styled(ContentContainer, {
  display: 'flex',
  padding: theme.space.large,
});

const Column = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Spacer = styled('div', {
  width: theme.space.large,
});

const TitleText = styled('div', {
  fontFamily: theme.fonts.logo,
  fontSize: '36px',
  lineHeight: '48px',
  fontWeight: 700,
  color: theme.colors.primaryText,
  marginBottom: theme.space.large,

  '& > span': {
    fontFamily: theme.fonts.logo,
  },
});

const DescriptionText = styled('div', {
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.regular,
  lineHeight: theme.lineHeights.heading,
  color: theme.colors.secondaryText,
});
