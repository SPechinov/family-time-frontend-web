import { FC, useState } from 'react';
import cn from 'classnames';
import { Props } from './types.ts';
import { Tabs } from '../../../../shared';
import { AUTH_WAYS_TABS } from './constants.ts';

import styles from './styles.module.scss';
import { SignInForm } from '../../../../entities/auth';

export const Auth: FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(AUTH_WAYS_TABS[0].value);

  return (
    <div className={cn(styles.wrapper, className)}>
      <Tabs
        className={styles.tabs}
        activeValue={activeTab}
        onClickTab={setActiveTab}
      >
        {AUTH_WAYS_TABS.map((authWayTab) => (
          <Tabs.Tab className={styles.tab} value={authWayTab.value}>
            {authWayTab.label}
          </Tabs.Tab>
        ))}
      </Tabs>
      <div>
        <SignInForm className={styles.form} />
      </div>
    </div>
  );
};
