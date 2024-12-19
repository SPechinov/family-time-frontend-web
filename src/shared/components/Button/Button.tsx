import { FC } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { SvgIcon } from '../SvgIcon';

export const Button: FC<Props> = ({
  className,
  theme,
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[theme],
        loading && styles.loading,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      <div className={styles.content}>{children}</div>
      {loading && (
        <div className={styles.loader}>
          <SvgIcon value="i_24_loading" />
        </div>
      )}
    </button>
  );
};
