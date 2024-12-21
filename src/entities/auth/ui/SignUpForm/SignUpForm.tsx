import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props } from './types';
import { Button, Input, InputPassword } from '../../../../shared';

export const SignUpForm: FC<Props> = ({ className }) => {
  return (
    <form className={cn(styles.form, className)}>
      <Input
        className={styles.input}
        placeholder="Email"
        autoComplete="email"
        inputMode="email"
      />
      <InputPassword className={styles.input} placeholder="Password" />
      <Input className={styles.input} placeholder="Откуда Вы?" />
      <Button className={styles.buttonSubmit} theme="primary" type="submit">
        Отправить код
      </Button>
    </form>
  );
};
