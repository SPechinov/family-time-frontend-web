import { DOMAttributes, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<SVGElement> &
  DOMAttributes<SVGElement> & {
    containerSize?: number;
  };
