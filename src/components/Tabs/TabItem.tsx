import { HTMLAttributes } from 'react';

import classNames from 'classnames';

export interface ITabItemProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const TabItem = ({ children, isActive = false, onClick }: ITabItemProps) => (
  <button
    className={classNames('w-full rounded px-4 py-1', {
      'bg-blue-100 text-blue-500': isActive,
      'text-grey-500': !isActive
    })}
    onClick={onClick}
    type="button">
    {children}
  </button>
);

export default TabItem;
