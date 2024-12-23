import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';

export const List = forwardRef<HTMLUListElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn(styles.list, className)} {...props}>
        {children}
      </ul>
    );
  }
);
