import { DOMAttributes, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  DOMAttributes<HTMLDivElement> & {
    activeValue: string;
    onClickTab: (value: string) => void;
  };
