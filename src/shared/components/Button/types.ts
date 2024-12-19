import { DOMAttributes, ButtonHTMLAttributes } from 'react';

export enum Theme {
  primary = 'primary',
  transparent = 'transparent',
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  DOMAttributes<HTMLButtonElement> & {
    theme: keyof typeof Theme;
    loading?: boolean;
  };
