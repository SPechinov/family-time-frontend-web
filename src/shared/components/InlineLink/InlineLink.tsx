import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { NavLink } from 'react-router';

export const InlineLink: FC<Props> = ({
  className,
  containerSize,
  ...props
}) => {
  return (
    <NavLink
      className={cn(styles.inlineLink, styles[containerSize], className)}
      {...props}
    />
  );
};
