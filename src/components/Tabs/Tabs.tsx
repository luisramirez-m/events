import { HTMLAttributes } from 'react';

import TabItem from './TabItem';

export type ITabsProps = HTMLAttributes<HTMLDivElement>;

const Tabs = ({ children }: ITabsProps) => <div className="flex w-full rounded-lg bg-white p-1 shadow md:w-fit">{children}</div>;

Tabs.Item = TabItem;

export default Tabs;
