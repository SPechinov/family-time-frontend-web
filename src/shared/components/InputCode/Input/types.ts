import { DOMAttributes, InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> &
  DOMAttributes<HTMLInputElement> & {
    error?: string;
  };
