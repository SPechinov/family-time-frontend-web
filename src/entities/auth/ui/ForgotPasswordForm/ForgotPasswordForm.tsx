import { FC, useCallback } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props, Values } from './types';
import { useForm } from 'react-hook-form';
import { Button, Input, validationGroups } from '../../../../shared';

export const ForgotPasswordForm: FC<Props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  const onSubmit = useCallback((values: Values) => {
    console.log(values);
  }, []);

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={styles.input}
        placeholder="Email"
        autoComplete="email"
        inputMode="email"
        error={errors.email?.message}
        {...register('email', {
          ...validationGroups.required,
          ...validationGroups.email,
        })}
      />
      <Button className={styles.buttonSubmit} theme="primary" type="submit">
        Отправить код
      </Button>
    </form>
  );
};
