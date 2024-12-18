import { FC, useContext } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { TabsContext } from '../Context.ts';

export const Tab: FC<Props> = ({ className, value, style, ...props }) => {
  const [context] = useContext(TabsContext);

  return (
    <button
      className={cn(
        styles.tab,
        context.activeValue === value && styles.active,
        className
      )}
      style={{
        ...style,
        width: `calc(100% / ${context.childCount})`,
      }}
      {...props}
    />
  );
};

Tab.displayName = 'Tabs.Tab';
