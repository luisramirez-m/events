import { EventPrice, EventRemainingTickets, ParticipantsList } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';
import { IEvent } from '@interfaces/eventInterface';

import generateBeautifyDate from '@utils/generateBeautifyDate';

export interface IEventCardProps {
  event: IEvent;
  bookings: IBooking[];
}

const EventCard = ({ event, bookings }: IEventCardProps) => {
  const { image, title, startAt, endAt, remainingTickets, price, state, maxTickets } = event;

  return (
    <div className="grid grid-cols-2 items-center gap-4 rounded-xl bg-white p-4 shadow md:grid-cols-6">
      <img
        alt={title}
        className="col-span-2 mr-4 h-24 w-full rounded-lg md:col-span-1 md:h-24 md:w-44"
        data-testid="event-image"
        src={image.url}
      />

      <div className="col-span-2 font-semibold md:col-span-2">
        <div className="mb-1 text-xl">{title}</div>
        <div className="text-blue-500">{generateBeautifyDate(startAt, endAt)}</div>
      </div>

      <div className="md:text-center">
        <div className="mb-2 text-sm font-semibold text-grey-600">Participants</div>
        <div className="flex md:justify-center">
          <ParticipantsList bookings={bookings} />
        </div>
      </div>

      <div className="md:text-center">
        <div className="mb-2 text-sm font-semibold text-grey-600">Places restantes</div>
        <EventRemainingTickets maxTickets={maxTickets} remainingTickets={remainingTickets} />
      </div>

      <div className="col-span-2 flex md:col-span-1 md:justify-end">
        <EventPrice price={price} state={state} />
      </div>
    </div>
  );
};

export default EventCard;
