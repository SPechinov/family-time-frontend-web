import { FC } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';

export const ErrorMessage: FC<Props> = ({ className, message, ...props }) => {
  return (
    <p className={cn(styles.message, className)} {...props}>
      {message}
    </p>
  );
};
