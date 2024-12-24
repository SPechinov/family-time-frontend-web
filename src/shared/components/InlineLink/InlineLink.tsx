import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';

export const InlineLink: FC<Props> = ({
  className,
  containerSize = 'm',
  ...props
}) => {
  return (
    <a
      className={cn(styles.inlineLink, styles[containerSize], className)}
      {...props}
    />
  );
};
