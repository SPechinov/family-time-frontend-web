import { FC } from 'react';
import cn from 'classnames';
import { Props } from './types.ts';
import { Tabs } from '../../../../shared';

import styles from './styles.module.scss';
import { SignInForm, SignUpForm } from '../../../../entities/auth';
import { useLocation, useNavigate } from 'react-router';
import { authRoutes } from '../../../../pages/auth';

export const Auth: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const FormComponent = (() => {
    switch (location.pathname) {
      case authRoutes.signIn.abs:
        return <SignInForm className={styles.form} />;
      case authRoutes.signUp.abs:
        return <SignUpForm className={styles.form} />;
      default:
        throw new Error('page not found');
    }
  })();

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
