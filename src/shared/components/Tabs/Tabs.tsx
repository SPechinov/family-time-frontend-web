import { FC, useCallback, MouseEventHandler } from 'react';
import { Props } from './types.ts';
import { Tab } from './Tab';
import cn from 'classnames';
import styles from './styles.module.scss';
import { TabsContext, useContextState } from './context.ts';

const Component: FC<Props> = ({
  className,
  activeValue,
  onClickTab,
  children,
  onClick,
  ...props
}) => {
  const contextState = useContextState(children, activeValue);

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      onClick?.(event);
      if (!(event.target instanceof HTMLButtonElement)) return;

      const dataValue = event.target.getAttribute('data-value');
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
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const Tabs = Object.assign(Component, { Tab });
