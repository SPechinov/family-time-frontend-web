import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { ForgotPasswordForm } from '../../../../entities/auth';
import { InlineLink } from '../../../../shared';

export const ForgotPassword: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <ForgotPasswordForm />
      <InlineLink.Back containerSize="m">Назад</InlineLink.Back>
    </div>
  );
};
