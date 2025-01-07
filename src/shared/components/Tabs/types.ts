import { DOMAttributes, HTMLAttributes } from 'react';

export type Props<T extends string> = HTMLAttributes<HTMLDivElement> &
  DOMAttributes<HTMLDivElement> & {
    activeValue: T;
    onTabClick: (value: T) => void;
  };
