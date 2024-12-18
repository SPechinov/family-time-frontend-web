import { createContext, useContext } from 'react';
import { Context, ContextState } from './types.ts';

const defaultContextValue: Context = {
  childCount: 0,
  activeValue: '',
};

export const TabsContext = createContext<ContextState>([
  { ...defaultContextValue },
  () => {},
]);

export const useTabsContext = () => useContext(TabsContext);
