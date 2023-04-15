import classNames from 'classnames';

export interface IEventRemainingTicketsProps {
  maxTickets: number;
  remainingTickets: number;
}

const EventRemainingTickets = ({ maxTickets, remainingTickets }: IEventRemainingTicketsProps) => (
  <div
    className={classNames('flex h-10 items-center md:justify-center', {
      'text-red-600': maxTickets === remainingTickets || remainingTickets <= 5,
      'text-blue-500': maxTickets !== remainingTickets
    })}>
    {maxTickets === remainingTickets ? 'Complet' : remainingTickets}
  </div>
);

export default EventRemainingTickets;
