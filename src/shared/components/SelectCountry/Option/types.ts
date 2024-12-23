import { DOMAttributes, HTMLAttributes } from 'react';
import { Value } from '../types.ts';

export type Props = HTMLAttributes<HTMLLIElement> &
  DOMAttributes<HTMLLIElement> & {
    value: Value;
  };
