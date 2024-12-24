import React, { useState } from 'react';

import { Tabs } from '../../../shared';

export const Component: React.FC = () => {
  const [value, setValue] = useState('item-1');
  return (
    <Tabs activeValue={value} onClickTab={setValue}>
      <Tabs.Tab value="item-1">Item 1</Tabs.Tab>
      <Tabs.Tab value="long-item-2">Long item 2</Tabs.Tab>
      <Tabs.Tab value="item-3">Item 3</Tabs.Tab>
      <Tabs.Tab value="one-more-item-4">One more long item 4</Tabs.Tab>
    </Tabs>
  );
};
