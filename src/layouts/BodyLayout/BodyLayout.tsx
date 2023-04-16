import { HTMLAttributes } from 'react';

export type IBodyLayoutProps = HTMLAttributes<HTMLDivElement>;

const BodyLayout = ({ children }: IBodyLayoutProps) => (
  <div className="min-h-screen bg-grey-100 px-6 py-4 md:rounded-t-xl md:p-6">{children}</div>
);

export default BodyLayout;
