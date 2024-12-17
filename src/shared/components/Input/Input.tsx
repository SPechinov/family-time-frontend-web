import { forwardRef, useId } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ErrorMessage } from '../ErrorMessage';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, placeholder, ...props }, ref) => {
    const id = useId();

    return (
      <div className={cn(styles.wrapper, className)}>
        <div className={styles.inner}>
          <input
            id={id}
            ref={ref}
            className={styles.input}
            placeholder={' '}
            {...props}
          />
          <label className={styles.placeholder} htmlFor={id}>
            {placeholder}
          </label>
        </div>
        {error && (
          <ErrorMessage className={styles.errorMessage} message={error} />
        )}
      </div>
    );
  }
);
