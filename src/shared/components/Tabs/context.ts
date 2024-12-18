import { Children, createContext, ReactNode, useContext, useMemo } from 'react';

export type Context = {
  childCount: number;
  activeValue: string;
};

const defaultContextValue: Context = {
  childCount: 0,
  activeValue: '',
};

export const TabsContext = createContext<Context>({ ...defaultContextValue });

export const useTabsContext = () => useContext(TabsContext);

export const useContextState = (
  children: ReactNode,
  activeValue: string
): Context => {
  return useMemo<Context>(
    () => ({
      childCount: Children.count(children),
      activeValue: activeValue,
    }),
    [children, activeValue]
  );
};
