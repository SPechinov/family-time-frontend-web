import { CHARACTERS_LENGTH } from './constants.ts';
import { MutableRefObject } from 'react';

export const isPastingValue = (value: string) => {
  return value.length === CHARACTERS_LENGTH;
};

export const isCorrectLength = (value: string) => {
  return value.length === 1;
};

export const isJustNowEnteredValue = (value: string) => {
  return value.length === 1;
};

export const fillInputsUsingValue = (
  inputsRefs: MutableRefObject<HTMLInputElement[]>,
  value: string
) => {
  inputsRefs.current.forEach((el, i) => (el.value = value[i] ?? ''));
};

export const getValueFromInputs = (
  inputsRefs: MutableRefObject<HTMLInputElement[]>
) => {
  return inputsRefs.current.reduce((acc, item) => {
    acc += item.value;
    return acc;
  }, '');
};
