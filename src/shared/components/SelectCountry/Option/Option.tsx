import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { Flag } from '../../Flag';
import { useSelectCountryContext } from '../ContextValue.tsx';

export const Option: FC<Props> = ({ className, value, ...props }) => {
  const { setValue, setIsOpen } = useSelectCountryContext();

  const handleItemClick = () => {
    setValue(value.value);
    setIsOpen(false);
  };

  return (
    <li
      className={cn(styles.wrapper, className)}
      onClick={handleItemClick}
      {...props}
    >
      <span>{value.label}</span>
      <Flag value={value.flagIcon} />
    </li>
  );
};
