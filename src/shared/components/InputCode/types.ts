import { Dispatch, SetStateAction } from 'react';

export type Props = {
  className?: string;
  classNameInput?: string;
  error?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  loading?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
