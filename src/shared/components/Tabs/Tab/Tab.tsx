import { memo } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTabsContext } from '../context.ts';

export const Tab = memo<Props>(({ className, value, style, ...props }) => {
  const context = useTabsContext();

  const isActive = context.activeValue === value;

  return (
    <button
      className={cn(styles.tab, isActive && styles.active, className)}
      style={{
        ...style,
        width: `calc(100% / ${context.childCount})`,
      }}
      disabled={isActive}
      data-value={value}
      aria-selected={isActive}
      role="tab"
      {...props}
    />
  );
});

Tab.displayName = 'Tabs.Tab';