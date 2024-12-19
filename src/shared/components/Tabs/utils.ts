import { Children, isValidElement, ReactNode } from 'react';
import { TabProps } from './Tab';

export const getActiveElement = (
  children: ReactNode,
  activeValue: string
): ReactNode => {
  let activeElement: ReactNode = undefined;
  Children.forEach(children, (child) => {
    if (!isValidElement<TabProps>(child)) return;
    if (child.props.value === activeValue) {
      activeElement = child;
    }
  });
  return activeElement;
};
