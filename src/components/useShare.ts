import { useCallback, useLayoutEffect } from 'react';

export const useShare = () => {
  useLayoutEffect(() => {
    // navigator is undefined on the server so we only load the polyfill once mounted
    require('share-api-polyfill');
  });

  const share = useCallback(
    async ({
      title,
      text,
      url,
    }: {
      title: string;
      text: string;
      url: string;
    }) => {
      await navigator.share({
        title,
        text,
        url,
      });
    },
    [],
  );

  return { share };
};
