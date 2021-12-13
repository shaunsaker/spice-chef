import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface GridProps<T> {
  data: T[];
  renderItem: (_item: T) => ReactElement;
}

export const Grid = <T extends { id: string }>({
  data,
  renderItem,
}: GridProps<T>): ReactElement => {
  return (
    <Container>
      {data.map((item, index) => {
        // we need to render a Spacer after every odd item for our column gap to work
        const isOddItem = index % 2 === 0;

        return (
          <>
            <ItemContainer key={item.id}>{renderItem(item)}</ItemContainer>

            {isOddItem && <Spacer />}
          </>
        );
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});

const ItemContainer = styled('div', {
  width: 'calc(50% - 8px)',
  marginBottom: theme.space.large,
});

const Spacer = styled('div', {
  width: theme.space.large,
});
