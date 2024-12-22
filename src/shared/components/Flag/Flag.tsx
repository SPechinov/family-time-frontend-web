import { FC, forwardRef, SVGProps, useMemo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import Icons from './data';

const DEFAULT_WIDTH = 32;
const DEFAULT_HEIGHT = 21;
const DELIMITER = DEFAULT_HEIGHT / DEFAULT_WIDTH;

export const Flag = forwardRef<SVGSVGElement, Props>(
  ({ className, value, manualContainerSize, style, ...props }, ref) => {
    const sizes = useMemo(() => {
      if (manualContainerSize) {
        return {
          width: manualContainerSize,
          height: manualContainerSize * DELIMITER,
        };
      }

      return { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT };
    }, [value, manualContainerSize]);

    const Component = Icons[value] as unknown as FC<SVGProps<SVGSVGElement>>;

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          minHeight: sizes.height,
          maxHeight: sizes.height,
          minWidth: sizes.width,
          maxWidth: sizes.width,
          ...style,
        }}
        className={cn(styles.icon, className)}
        width={sizes.width}
        height={sizes.height}
      />
    );
  }
);
