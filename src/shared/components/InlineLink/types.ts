import { DOMAttributes, LinkHTMLAttributes } from 'react';
import { LinkProps } from 'react-router';

export enum Size {
  s = 's',
  m = 'm',
}

export type Props = LinkHTMLAttributes<HTMLAnchorElement> &
  DOMAttributes<HTMLAnchorElement> &
  LinkProps & {
    containerSize: keyof typeof Size;
  };

export type PropsBack = Omit<Props, 'to'>;
