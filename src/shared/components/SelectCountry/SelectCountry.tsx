import { FC, useMemo, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import {
  useFloating,
  autoUpdate,
  flip,
  offset,
  size,
} from '@floating-ui/react-dom';
import { ContextValue, SelectCountryContext } from './ContextValue.tsx';
import { OPTIONS } from './constants.tsx';
import { Control } from './Control';
import { List } from './List';
import { Option } from './Option';
import { useCloseList } from './hooks.ts';
import { mergeRefs } from '../../hooks';
import { ErrorMessage } from '../ErrorMessage';

export const SelectCountry: FC<Props> = ({
  className,
  placeholder,
  disabled,
  readOnly,
  error,
  country,
  onSelectCountry,
  onCloseMenu,
}) => {
  const refControl = useRef<HTMLElement>(null);
  const listControl = useRef<HTMLElement>(null);

  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = (isOpen: boolean) => {
    setIsOpenState(isOpen);
    if (isOpen) return;
    onCloseMenu?.();
  };

  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ padding: 10 }),
      offset(4),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  useCloseList(
    {
      control: refControl,
      list: listControl,
    },
    setIsOpen
  );

  const contextValue = useMemo<ContextValue>(
    () => ({
      isOpen,
      setIsOpen,
      value: OPTIONS.find((optionCountry) => optionCountry.value === country),
      setValue: onSelectCountry,
      values: OPTIONS,
    }),
    [isOpen, country]
  );

  return (
    <SelectCountryContext.Provider value={contextValue}>
      <div className={cn(styles.wrapper, className)}>
        <Control
          ref={mergeRefs([refs.setReference, refControl])}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          error={error ? error.length > 0 : false}
        />
        {isOpen && (
          <List
            ref={mergeRefs([refs.setFloating, listControl])}
            style={floatingStyles}
          >
            {OPTIONS.map((value) => (
              <Option key={value.value} value={value} />
            ))}
          </List>
        )}
        {error && (
          <ErrorMessage className={styles.errorMessage} message={error} />
        )}
      </div>
    </SelectCountryContext.Provider>
  );
};
