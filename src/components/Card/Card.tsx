import { HTMLAttributes } from 'react';

export type ICardPrps = HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className }: ICardPrps) => (
  <div className={`rounded-xl bg-white p-4 shadow ${className || ''}`}>{children}</div>
);

export default Card;
