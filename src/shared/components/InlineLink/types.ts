import { DOMAttributes, LinkHTMLAttributes } from 'react';

export enum Size {
  s = 's',
  m = 'm',
}

export type Props = LinkHTMLAttributes<HTMLAnchorElement> &
  DOMAttributes<HTMLAnchorElement> & {
    containerSize: keyof typeof Size;
  };
