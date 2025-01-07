import { createContext, useContext } from 'react';
import { Value } from './types.ts';
import { Country } from '../../types';

export type ContextValue = {
  value?: Value;
  setValue: (value?: Country) => void;
  values: Value[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SelectCountryContext = createContext<ContextValue | undefined>(
  undefined
);

export const useSelectCountryContext = () => {
  const context = useContext(SelectCountryContext);
  if (context === undefined) {
    throw new Error('SelectCountryContext should be provided');
  }

  return context;
};
