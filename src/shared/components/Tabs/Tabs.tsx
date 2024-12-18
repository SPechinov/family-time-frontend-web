import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import { Context, Props } from './types.ts';
import { Tab, TabProps } from './Tab';
import cn from 'classnames';
import styles from './styles.module.scss';
import { TabsContext } from './Context.ts';

const Component: FC<Props> = ({
  className,
  activeValue,
  onClickTab,
  children: childrenProps,
  ...props
}) => {
  const contextState = useState<Context>({
    childCount: Children.count(childrenProps),
    activeValue: activeValue,
  });

  useEffect(() => {
    contextState[1]((prevState) => ({
      ...prevState,
      activeValue,
    }));
  }, [activeValue]);

  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement<TabProps>(child)) return null;

    return cloneElement<TabProps>(child, {
      ...child.props,
      onClick: (event) => {
        child.props.onClick?.(event);
        onClickTab(child.props.value);
      },
    });
  });

  return (
    <TabsContext.Provider value={contextState}>
      <div className={cn(styles.tabs, className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const Tabs = Object.assign(Component, { Tab });
