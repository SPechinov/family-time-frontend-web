import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { InputCodeProps } from '.';
import { Input } from './Input';
import { ErrorMessage } from '../ErrorMessage';
import { ALLOWED_SYMBOLS, CHARACTERS_LENGTH } from './constants.ts';
import {
  fillInputsUsingValue,
  getValueFromInputs,
  isCorrectLength,
  isJustNowEnteredValue,
  isPastingValue,
} from './utils.ts';
import { KeyboardControlKey } from '../../constants';

export const InputCode: FC<InputCodeProps> = ({
  className,
  classNameInput,
  error,
  autoFocus,
  disabled,
  loading,
  value,
  setValue,
}) => {
  const inputsRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    fillInputsUsingValue(inputsRefs, value);
  }, [value]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.target.value = event.target.value.trim();

      if (!event.target.value.match(ALLOWED_SYMBOLS)) {
        event.target.value = '';
        return;
      }

      if (isPastingValue(event.target.value)) {
        handleInputChangePasting(event);
        return;
      }

      handleInputChangeKeyDown(event);
    },
    []
  );

  const handleInputChangePasting = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      fillInputsUsingValue(inputsRefs, event.target.value);
      setValue(getValueFromInputs(inputsRefs));
      inputsRefs.current[inputsRefs.current.length - 1].focus();
    },
    []
  );

  const handleInputChangeKeyDown = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!isCorrectLength(event.target.value)) {
        event.target.value = event.target.value[event.target.value.length - 1];
      }

      if (isJustNowEnteredValue(event.target.value)) {
        if (event.target.nextElementSibling instanceof HTMLInputElement) {
          event.target.nextElementSibling.focus();
        }
      }

      setValue(getValueFromInputs(inputsRefs));
    },
    []
  );

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      const { key, target } = event;

      if (
        key === KeyboardControlKey.backspace &&
        target instanceof HTMLInputElement
      ) {
        event.preventDefault();

        if (target.value === '') {
          if (target.previousElementSibling instanceof HTMLInputElement) {
            target.previousElementSibling.focus();
          }
          return;
        }

        target.value = '';
        setValue(getValueFromInputs(inputsRefs));
      }
    }, []);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(styles.inputs, (disabled || loading) && styles.disabled)}
      >
        {new Array(CHARACTERS_LENGTH).fill(0).map((_, index) => (
          <Input
            key={index}
            ref={(el) => (inputsRefs.current[index] = el!)}
            className={cn(styles.input, classNameInput)}
            disabled={disabled || loading}
            error={error}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            autoFocus={autoFocus && index === 0}
          />
        ))}
      </div>
      {error && (
        <ErrorMessage className={styles.errorMessage} message={error} />
      )}
    </div>
  );
};
