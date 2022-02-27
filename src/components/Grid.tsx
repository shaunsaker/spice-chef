import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';

type GridColumns = 1 | 2 | 4;

interface GridProps<T> {
  data: T[];
  columns: GridColumns;
  renderItem: (_item: T) => ReactElement;
}

export const Grid = <T extends { id: string }>({
  data,
  columns,
  renderItem,
}: GridProps<T>): ReactElement => {
  return (
    <Container columns={columns}>
      {data.map(item => {
        return <ItemContainer key={item.id}>{renderItem(item)}</ItemContainer>;
      })}
    </Container>
  );
};

const Container = styled('div', {
  width: '100%',
  display: 'grid',

  columnGap: theme.space.large,
  rowGap: theme.space.large,

  variants: {
    columns: {
      1: {
        gridTemplateColumns: '1fr',

        '@tablet': {
          gridTemplateColumns: '1fr 1fr',
        },
      },
      2: {
        gridTemplateColumns: '1fr 1fr',

        '@tablet': {
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
      },
      4: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',

        '@tablet': {
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
      },
    },
  },
});

const ItemContainer = styled('div', {});
