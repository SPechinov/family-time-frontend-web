import { MutableRefObject, useLayoutEffect } from 'react';

export const useCloseList = (
  refs: {
    control: MutableRefObject<HTMLElement | null>;
    list: MutableRefObject<HTMLElement | null>;
  },
  setIsOpen: (isOpen: boolean) => void
) => {
  useLayoutEffect(() => {
    const cbScroll = (event: Event) => {
      if (refs.control.current?.contains(event.target as Element)) {
        return;
      }

      if (refs.list.current?.contains(event.target as Element)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener('wheel', cbScroll, true);
    document.addEventListener('pointerdown', cbScroll, true);

    return () => {
      document.removeEventListener('wheel', cbScroll, true);
      document.removeEventListener('pointerdown', cbScroll, true);
    };
  }, [refs]);
};
