import { useState } from 'react';

import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs
};

const TabsWithHooks = () => {
  const [tabActive, setTabActive] = useState<string>('coming');

  return (
    <div className="md:w-fit w-full">
      <Tabs>
        <Tabs.Item isActive={tabActive === 'coming'} onClick={() => setTabActive('coming')}>
          A venir
        </Tabs.Item>
        <Tabs.Item isActive={tabActive === 'past'} onClick={() => setTabActive('past')}>
          Passés
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export const Primary = {
  render: () => <TabsWithHooks />
};
