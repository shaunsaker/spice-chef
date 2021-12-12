import { Head } from '../../components/Head';
import { HeaderBar } from '../../components/HeaderBar';
import { styled, theme } from '../../styles/stitches.config';
import { SearchInput } from './SearchInput';

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
        </PageContainer>
      </main>
    </div>
  );
}

const PageContainer = styled('div', {
  margin: `0 ${theme.space.large}`,
});

const SearchInputContainer = styled('div', {
  margin: `${theme.space.large} 0`,
});
