import { Country } from '../../../../shared';
import { Dispatch, SetStateAction } from 'react';

export type Props = {
  className?: string;
  initialValues: Values;
  onValuesChange: Dispatch<SetStateAction<Values>>;
};

export type Values = {
  email: string;
  password: string;
  country?: Country;
};
