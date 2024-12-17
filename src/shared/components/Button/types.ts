import { DOMAttributes, HTMLAttributes } from 'react';

export enum Theme {
  primary = 'primary',
  transparent = 'transparent',
}

export type Props = HTMLAttributes<HTMLButtonElement> &
  DOMAttributes<HTMLButtonElement> & {
    theme: keyof typeof Theme;
  };
