import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { Logo, Text } from '../../../../shared';

export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(styles.layout, className)}>
      <div className={styles.top}>
        <Logo containerSize={180} />
        <Text className={styles.title} tag="h2" containerSize="brand-m">
          Family Time
        </Text>
      </div>
      <div className={styles.bottom}>{children}</div>
    </div>
  );
};
