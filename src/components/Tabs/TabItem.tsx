import { HTMLAttributes } from 'react';

import classNames from 'classnames';

export interface ITabItemProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const TabItem = ({ children, isActive = false, onClick }: ITabItemProps) => (
  <button
    className={classNames('w-full py-1 px-4 rounded', {
      'bg-blue-100 text-blue-500': isActive,
      'text-grey-400': !isActive
    })}
    onClick={onClick}
    type="button">
    {children}
  </button>
);

export default TabItem;
