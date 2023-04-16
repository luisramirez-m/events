import classNames from 'classnames';

export interface IEventCardRemainingTicketsProps {
  maxTickets: number;
  remainingTickets: number;
}

const EventCardRemainingTickets = ({ maxTickets, remainingTickets }: IEventCardRemainingTicketsProps) => (
  <div
    className={classNames('flex h-10 items-center md:justify-center', {
      'text-red-600': maxTickets === remainingTickets || remainingTickets <= 5,
      'text-blue-500': maxTickets !== remainingTickets
    })}
    data-testid="event-remaining-tickets">
    {maxTickets === remainingTickets ? 'Complet' : remainingTickets}
  </div>
);

export default EventCardRemainingTickets;
