import { DOMAttributes, LinkHTMLAttributes } from 'react';

export enum Size {
  label = 'label',
  defaultM = 'defaultM',
}

export type Props = LinkHTMLAttributes<HTMLAnchorElement> &
  DOMAttributes<HTMLAnchorElement> & {
    containerSize?: keyof typeof Size;
  };
