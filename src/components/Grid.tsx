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
      {data.map(item => {
        return <ItemContainer key={item.id}>{renderItem(item)}</ItemContainer>;
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: theme.space.large,
  rowGap: theme.space.large,

  '@tablet': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const ItemContainer = styled('div', {});
