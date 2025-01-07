import { FC } from 'react';
import cn from 'classnames';
import { Props } from './types.ts';
import { Tabs } from '../../../../shared';

import styles from './styles.module.scss';
import { SignInForm, SignUpForm } from '../../../../entities/auth';
import { useLocation, useNavigate } from 'react-router';

export const Auth: FC<Props> = ({
  className,
  signInAbsPath,
  signUpAbsPath,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const FormComponent = (() => {
    switch (location.pathname) {
      case signInAbsPath:
        return <SignInForm className={styles.form} />;
      case signUpAbsPath:
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
        <Tabs.Tab className={styles.tab} value={signInAbsPath}>
          Войти
        </Tabs.Tab>
        <Tabs.Tab className={styles.tab} value={signUpAbsPath}>
          Зарегистрироваться
        </Tabs.Tab>
      </Tabs>
      <div>{FormComponent}</div>
    </div>
  );
};
