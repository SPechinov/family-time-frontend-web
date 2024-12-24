import { forwardRef, useId, useLayoutEffect, useRef } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ErrorMessage } from '../ErrorMessage';
import { mergeRefs } from '../../hooks';

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      error,
      placeholder,
      endAdornment,
      classNameEndAdornment,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const id = useId();
    const endAdornmentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const placeholderRef = useRef<HTMLLabelElement>(null);

    useLayoutEffect(() => {
      if (
        inputRef.current &&
        placeholderRef.current &&
        endAdornmentRef.current
      ) {
        const endAdornmentWidth =
          endAdornmentRef.current.getBoundingClientRect().width;
        const offset = `${endAdornmentWidth + 8}px`;

        inputRef.current.style.paddingRight = offset;
        placeholderRef.current.style.right = offset;
      }
    }, []);

    return (
      <div className={cn(styles.wrapper, className)}>
        <div className={styles.inputWrapper}>
          <input
            id={id}
            ref={mergeRefs([ref, inputRef])}
            className={cn(styles.input, error && styles.error)}
            placeholder={' '}
            type={type}
            {...props}
          />
          <label
            className={styles.placeholder}
            htmlFor={id}
            ref={placeholderRef}
          >
            {placeholder}
          </label>

          {endAdornment && (
            <div
              className={cn(styles.endAdornment, classNameEndAdornment)}
              ref={endAdornmentRef}
            >
              {endAdornment}
            </div>
          )}
        </div>
        {error && (
          <ErrorMessage className={styles.errorMessage} message={error} />
        )}
      </div>
    );
  }
);
