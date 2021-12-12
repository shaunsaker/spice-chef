import { Card } from '../../components/Card';
import { Head } from '../../components/Head';
import { HeaderBar } from '../../components/HeaderBar';
import { styled, theme } from '../../styles/stitches.config';
import { SearchInput } from './SearchInput';
import ReactCountryFlag from 'react-country-flag';
import { CountryFlag } from '../../components/CountryFlag';

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <HeaderBar />

        <PageContainer>
          <SearchInputContainer>
            <SearchInput />
          </SearchInputContainer>

          <CardsContainer>
            <Card
              title="Dukkah"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="EG" />}
            />

            <Spacer />

            <Card
              title="Bebere"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="US" />}
            />

            <Card
              title="Dukkah"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="CA" />}
            />

            <Spacer />

            <Card
              title="Bebere"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="ZA" />}
            />

            <Card
              title="Dukkah"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="DE" />}
            />

            <Spacer />

            <Card
              title="Bebere"
              backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prue.life%2Fwp-content%2Fuploads%2F2017%2F03%2Fdukkah-1-of-3.jpg&f=1&nofb=1"
              cornerComponent={<CountryFlag countryCode="FR" />}
            />

            <Card title="Dukkah" />

            <Spacer />

            <Card title="Bebere" />
          </CardsContainer>
        </PageContainer>
      </main>
    </div>
  );
}

const PageContainer = styled('div', {
  margin: `0 ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  margin: `${theme.space.large} 0 ${theme.space.extraLarge}`,
});

const Spacer = styled('div', {
  width: theme.space.large,
});

const CardsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});
