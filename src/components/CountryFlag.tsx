import React, { ReactElement } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { SmallIconContainer } from './SmallIconContainer';

const FLAG_SIZE = 48;

interface CountryFlagProps {
  countryCode: string;
}

export const CountryFlag = ({
  countryCode,
}: CountryFlagProps): ReactElement => {
  return (
    <SmallIconContainer>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{ width: FLAG_SIZE, height: FLAG_SIZE }}
        alt={`Flag for Country Code ${countryCode}`}
      />
    </SmallIconContainer>
  );
};
