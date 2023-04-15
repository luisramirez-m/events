import { HTMLAttributes } from 'react';

import TabItem from './TabItem';

export type ITabsProps = HTMLAttributes<HTMLDivElement>;

const Tabs = ({ children }: ITabsProps) => <div className="flex bg-white shadow rounded-lg p-1">{children}</div>;

Tabs.Item = TabItem;

export default Tabs;
