import { FC, forwardRef, SVGProps, useMemo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { SvgIconProps } from '.';
import Icons from './data';

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ className, value, manualContainerSize, style, ...props }, ref) => {
    const size = useMemo(() => {
      if (manualContainerSize) {
        return manualContainerSize;
      }

      return Number(value.split('_')[1]);
    }, [value, manualContainerSize]);

    const Component = Icons[value] as unknown as FC<SVGProps<SVGSVGElement>>;

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          minHeight: size,
          maxHeight: size,
          minWidth: size,
          maxWidth: size,
          ...style,
        }}
        className={cn('icon', `icon-${value}`, styles.icon, className)}
        width={size}
        height={size}
      />
    );
  }
);

SvgIcon.displayName = 'SvgIcon';
