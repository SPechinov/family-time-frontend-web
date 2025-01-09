import { FC, useCallback, useEffect } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props, Values } from './types';
import {
  Button,
  InlineLink,
  Input,
  InputPassword,
  validationGroups,
} from '../../../../shared';
import { useForm } from 'react-hook-form';
import { authRoutes } from '../../settings';

export const SignInForm: FC<Props> = ({
  className,
  initialValues,
  onValuesChange,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Values>({
    values: initialValues,
  });

  const onSubmit = useCallback((values: Values) => {
    console.log(values);
  }, []);

  useEffect(
    () => () => {
      onValuesChange(watch());
    },
    []
  );

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
      <InputPassword
        className={styles.input}
        placeholder="Password"
        error={errors.password?.message}
        autoComplete="current-password"
        {...register('password', {
          ...validationGroups.required,
          ...validationGroups.password,
        })}
      />
      <InlineLink
        to={authRoutes.forgotPassword.abs}
        className={styles.linkForgotPassword}
        containerSize="m"
      >
        Забыли пароль?
      </InlineLink>
      <Button theme="primary" type="submit">
        Войти
      </Button>
    </form>
  );
};
