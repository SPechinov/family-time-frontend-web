import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { Button, InlineLink, Input, InputPassword } from '../../../../shared';

export const SignInForm: FC<Props> = ({ className }) => {
  return (
    <form className={cn(styles.form, className)}>
      <Input
        className={styles.input}
        placeholder="Email"
        autoComplete="email"
        inputMode="email"
      />
      <InputPassword className={styles.input} placeholder="Password" />
      <InlineLink className={styles.linkForgotPassword} containerSize="m">
        Забыли пароль?
      </InlineLink>
      <Button className={styles.buttonSubmit} theme="primary" type="submit">
        Войти
      </Button>
    </form>
  );
};
