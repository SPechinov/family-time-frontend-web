import { DOMAttributes, HTMLAttributes } from 'react';

export enum Size {
  label = 'label',
  defaultM = 'defaultM',
  brand = 'brand',
}

export enum Tag {
  p = 'p',
  span = 'span',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  label = 'label',
}

export type Props = HTMLAttributes<HTMLElement> &
  DOMAttributes<HTMLElement> & {
    containerSize: keyof typeof Size;
    tag?: keyof typeof Tag;
  };
