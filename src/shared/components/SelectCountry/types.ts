import { DOMAttributes, SelectHTMLAttributes } from 'react';
import { Country } from '../../types';
import { FlagIcon } from '../Flag';

export type Props = SelectHTMLAttributes<HTMLSelectElement> &
  DOMAttributes<HTMLSelectElement> & {
    error?: string;
    placeholder: string;
    disabled?: boolean;
    readOnly?: boolean;
  };

export type Value = {
  value: Country;
  label: string;
  flagIcon: keyof typeof FlagIcon;
};
