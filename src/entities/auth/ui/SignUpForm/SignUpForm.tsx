import { FC, useCallback, useEffect } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Props, Values } from './types';
import {
  Button,
  Input,
  InputPassword,
  SelectCountry,
  validationGroups,
} from '../../../../shared';
import { Controller, useForm } from 'react-hook-form';

export const SignUpForm: FC<Props> = ({
  className,
  initialValues,
  onValuesChange,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
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
      <Controller
        name="country"
        control={control}
        rules={validationGroups.required}
        render={({ field }) => (
          <SelectCountry
            className={styles.input}
            placeholder="Откуда Вы?"
            error={errors.country?.message}
            country={field.value}
            onSelectCountry={(country) => {
              field.onChange(country);
            }}
            onCloseMenu={field.onBlur}
          />
        )}
      />

      <Button className={styles.buttonSubmit} theme="primary" type="submit">
        Отправить код
      </Button>
    </form>
  );
};
