import { createContext, useContext } from 'react';

export type Context = {
  activeValue: string;
};

export const TabsContext = createContext<Context | undefined>(undefined);

export const useTabsContext = (): Context => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error('useTabsContext must be defined');
  }

  return context;
};
