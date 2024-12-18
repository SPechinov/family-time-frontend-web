import { Dispatch, DOMAttributes, HTMLAttributes, SetStateAction } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  DOMAttributes<HTMLDivElement> & {
    activeValue: string;
    onClickTab: (value: string) => void;
  };

export type Context = {
  childCount: number;
  activeValue: string;
};

export type ContextState = [Context, Dispatch<SetStateAction<Context>>];
