import { FC, useCallback, MouseEventHandler, useMemo } from 'react';
import { Props } from './types.ts';
import { Tab } from './Tab';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Context, TabsContext } from './context.ts';
import { DATA_VALUE } from './constants.ts';

const Component: FC<Props> = ({
  className,
  activeValue,
  onClickTab,
  children,
  onClick,
  ...props
}) => {
  const contextState = useMemo<Context>(
    () => ({ activeValue }),
    [children, activeValue]
  );

  const handleTabsClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      onClick?.(event);
      if (!(event.target instanceof HTMLButtonElement)) return;

      const dataValue = event.target.getAttribute(DATA_VALUE);
      if (!dataValue) return;

      onClickTab(dataValue);
    },
    []
  );

  return (
    <TabsContext.Provider value={contextState}>
      <div
        className={cn(styles.tabs, className)}
        role="tablist"
        onClick={handleTabsClick}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const Tabs = Object.assign(Component, { Tab });
