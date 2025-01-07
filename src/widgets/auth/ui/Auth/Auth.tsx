import { FC, useEffect } from 'react';
import cn from 'classnames';
import { Props } from './types.ts';
import { Tabs } from '../../../../shared';

import styles from './styles.module.scss';
import { SignInForm, SignUpForm } from '../../../../entities/auth';
import { useLocation, useNavigate } from 'react-router';
import { authRoutes } from '../../../../pages/auth';
import { useFormsStates } from './hooks.ts';

export const Auth: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const formsStates = useFormsStates();

  const FormComponent = (() => {
    switch (location.pathname) {
      case authRoutes.signIn.abs:
        return (
          <SignInForm
            className={styles.form}
            initialValues={formsStates.signInValues}
            onValuesChange={formsStates.setSignInValues}
          />
        );
      case authRoutes.signUp.abs:
        return (
          <SignUpForm
            className={styles.form}
            initialValues={formsStates.signUpValues}
            onValuesChange={formsStates.setSignUpValues}
          />
        );
      default:
        throw new Error('page not found');
    }
  })();

  useEffect(
    () => () => {
      formsStates.clearSignInValues();
      formsStates.clearSignUpValues();
    },
    []
  );

  const activeValue = location.pathname;

  return (
    <div className={cn(styles.wrapper, className)}>
      <Tabs
        className={styles.tabs}
        activeValue={activeValue}
        onTabClick={navigate}
      >
        <Tabs.Tab className={styles.tab} value={authRoutes.signIn.abs}>
          Войти
        </Tabs.Tab>
        <Tabs.Tab className={styles.tab} value={authRoutes.signUp.abs}>
          Зарегистрироваться
        </Tabs.Tab>
      </Tabs>
      <div>{FormComponent}</div>
    </div>
  );
};
