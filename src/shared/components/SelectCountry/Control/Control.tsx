import { forwardRef } from 'react';
import { Props } from './types.ts';
import { useSelectCountryContext } from '../ContextValue.tsx';
import cn from 'classnames';
import styles from './styles.module.scss';
import { SvgIcon } from '../../SvgIcon';
import { Flag } from '../../Flag';

export const Control = forwardRef<HTMLButtonElement, Props>(
  ({ className, placeholder }, ref) => {
    const { setIsOpen, isOpen, value } = useSelectCountryContext();

    const handleToggleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          styles.control,
          value && styles.selected,
          isOpen && styles.open,
          className
        )}
        onClick={handleToggleClick}
      >
        <span className={styles.placeholder}>{placeholder}</span>
        <span className={styles.value}>{value?.label}&nbsp;</span>
        {value && <Flag className={styles.flag} value={value.flagIcon} />}
        <SvgIcon className={styles.iconChevron} value="i_24_chevron_down" />
      </button>
    );
  }
);
