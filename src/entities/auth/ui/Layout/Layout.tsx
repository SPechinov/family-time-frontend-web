import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';

export const Layout: FC<Props> = ({ className }) => {
  return <div className={cn(styles.wrapper, className)}>Layout</div>;
};
