import React, { ReactElement } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { styled, theme } from '../styles/stitches.config';

const CONTAINER_SIZE = 32;

const FLAG_SIZE = CONTAINER_SIZE * 1.5;

interface CountryFlagProps {
  countryCode: string;
}

export const CountryFlag = ({
  countryCode,
}: CountryFlagProps): ReactElement => {
  return (
    <Container>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{ width: FLAG_SIZE, height: FLAG_SIZE }}
      />
    </Container>
  );
};

const Container = styled('div', {
  width: CONTAINER_SIZE,
  height: CONTAINER_SIZE,
  borderRadius: CONTAINER_SIZE / 2,
  backgroundColor: theme.colors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: `2px solid ${theme.colors.transWhite}`,
});
