import { DOMAttributes, InputHTMLAttributes, ReactNode } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> &
  DOMAttributes<HTMLInputElement> & {
    error?: string;
    endAdornment?: ReactNode;
  };
