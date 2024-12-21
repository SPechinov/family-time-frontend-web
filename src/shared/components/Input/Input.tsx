import { forwardRef, useId, useLayoutEffect, useRef } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ErrorMessage } from '../ErrorMessage';
import { mergeRefs } from '../../hooks';

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { className, error, placeholder, endAdornment, type = 'text', ...props },
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
        inputRef.current.style.paddingRight = '48px';
        placeholderRef.current.style.right = '48px';
      }
    }, []);

    return (
      <div
        className={cn(
          styles.wrapper,
          error && styles.error,
          props.disabled && styles.disabled,
          props.readOnly && styles.readOnly,
          className
        )}
      >
        <div className={styles.inner}>
          <input
            id={id}
            ref={mergeRefs([ref, inputRef])}
            className={styles.input}
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
            <div className={styles.endAdornment} ref={endAdornmentRef}>
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
