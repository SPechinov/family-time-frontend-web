import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(styles.input, error && styles.error, className)}
        placeholder="_"
        type="text"
        inputMode="decimal"
        {...props}
      />
    );
  }
);
