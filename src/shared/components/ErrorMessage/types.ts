import { DOMAttributes, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> &
  DOMAttributes<HTMLElement> & {
    message: string;
  };
