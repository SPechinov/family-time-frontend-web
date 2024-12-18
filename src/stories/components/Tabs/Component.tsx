import React, { useState } from 'react';

import { Tabs } from '../../../shared/components/Tabs';

export const Component: React.FC = () => {
  const [value, setValue] = useState('sign-in');
  return (
    <div style={{ width: '300px' }}>
      <Tabs activeValue={value} onClickTab={setValue}>
        <Tabs.Tab value="sign-in">Войти</Tabs.Tab>
        <Tabs.Tab value="registration">Регистрация</Tabs.Tab>
      </Tabs>
    </div>
  );
};
