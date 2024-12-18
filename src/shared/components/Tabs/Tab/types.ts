import { DOMAttributes, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> &
  DOMAttributes<HTMLButtonElement> & {
    value: string;
  };
