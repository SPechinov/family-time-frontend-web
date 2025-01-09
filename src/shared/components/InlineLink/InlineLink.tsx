import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props, PropsBack } from './types';
import { NavLink, useNavigate } from 'react-router';

const Component: FC<Props> = ({ className, containerSize, ...props }) => {
  return (
    <NavLink
      className={cn(styles.inlineLink, styles[containerSize], className)}
      {...props}
    />
  );
};

export const Back: FC<PropsBack> = (props) => {
  const navigate = useNavigate();
  return (
    <Component
      to=".."
      onClick={(event) => {
        event.preventDefault();
        navigate(-1);
      }}
      {...props}
    />
  );
};

export const InlineLink = Object.assign(Component, { Back });
