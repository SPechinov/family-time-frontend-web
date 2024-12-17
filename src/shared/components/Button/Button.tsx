import { FC } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Button: FC<Props> = ({ className, theme, ...props }) => {
  return (
    <button
      className={cn(styles.button, styles[theme], className)}
      {...props}
    />
  );
};
