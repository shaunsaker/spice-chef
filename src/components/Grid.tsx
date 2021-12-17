import React, { ReactElement } from 'react';
import { styled, theme } from '../styles/stitches.config';

interface GridProps<T> {
  data: T[];
  renderItem: (_item: T) => ReactElement;
  containerMargin: number; // we use this to calculate our negative margin for spacing to work
}

export const Grid = <T extends { id: string }>({
  data,
  renderItem,
  containerMargin,
}: GridProps<T>): ReactElement => {
  return (
    <Container style={{ margin: `0 -${containerMargin}px` }}>
      {data.map(item => {
        return <ItemContainer key={item.id}>{renderItem(item)}</ItemContainer>;
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  padding: `0 ${theme.space.small}`, // FIXME: how to use token and create a relationship between the 2
});

const ItemContainer = styled('div', {
  width: '50%',
  padding: `0 ${theme.space.small} ${theme.space.large}`,

  '@media (min-width: 1024px)': {
    width: '25%',
  },
});
