import { createElement, FC } from 'react';
import { Props } from './types.ts';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Text: FC<Props> = ({
  className,
  containerSize,
  tag = 'p',
  ...props
}) => {
  return createElement(tag, {
    className: cn(styles[containerSize], className),
    ...props,
  });
};
