import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

export interface IEventPriceProps {
  price: string;
  state: string;
}

const EventPrice = ({ price, state }: IEventPriceProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const generatePrice = (): string => (price === '0.0' ? 'Gratuit' : price);

  return (
    <>
      {isMobile && (
        <div
          className={classNames('flex w-full justify-center rounded-xl py-4 text-xl  font-semibold', {
            'bg-lime-50 text-lime-700': state === 'active',
            'bg-grey-50 text-grey-400': state === 'archived'
          })}>
          {generatePrice()}
        </div>
      )}
      {!isMobile && (
        <div className="relative h-24 w-40 overflow-hidden rounded-lg">
          <div
            className={classNames('absolute left-0 top-0 h-full w-full', {
              'bg-lime-50 ': state === 'active',
              'bg-grey-50': state === 'archived'
            })}
            style={{
              borderRadius: '12px 12px 8px 12px',
              transformOrigin: 'left bottom',
              transform: 'skewX(-22deg)'
            }}
          />
          <div
            className={classNames(
              'absolute bottom-1/2 right-0 top-1/2 flex items-center justify-center pr-6 text-xl font-semibold ',
              {
                'text-lime-700': state === 'active',
                'text-grey-400': state === 'archived'
              }
            )}>
            {generatePrice()}
          </div>
        </div>
      )}
    </>
  );
};

export default EventPrice;
