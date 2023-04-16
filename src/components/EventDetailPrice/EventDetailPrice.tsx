import classNames from 'classnames';

import generatePrice from '@utils/generatePrice';

export interface IEventDetailPriceProps {
  isReserved: boolean;
  price: string;
}

const EventDetailPrice = ({ isReserved, price }: IEventDetailPriceProps) => (
  <div
    className={classNames('flex w-full justify-center rounded-xl py-4 ', {
      'bg-lime-50 text-lime-700': !isReserved,
      'bg-lime-100 text-lime-950': isReserved
    })}
    data-testid="event-price">
    {isReserved ? (
      <>
        🎉 J’y vais ! <span className="font-semibold">(1 place réservée)</span>
      </>
    ) : (
      <span className="text-xl font-semibold">{generatePrice(price)}</span>
    )}
  </div>
);

export default EventDetailPrice;
