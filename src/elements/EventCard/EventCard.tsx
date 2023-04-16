import { HTMLAttributes } from 'react';

import { EventCardRemainingTickets, EventCardParticipantList, Card, EventCardImage, EventCardPrice } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';
import { IEvent } from '@interfaces/eventInterface';

import generateBeautifyDate from '@utils/generateBeautifyDate';

export interface IEventCardProps extends HTMLAttributes<HTMLDivElement> {
  event: IEvent;
  bookings: IBooking[];
}

const EventCard = ({ event, bookings, className }: IEventCardProps) => {
  const { image, title, startAt, endAt, remainingTickets, price, state, maxTickets } = event;

  return (
    <Card className={`grid grid-cols-2 items-center gap-4 md:grid-cols-6 ${className || ''}`}>
      <div className="col-span-2 md:col-span-1">
        <EventCardImage image={image.url} title={title} />
      </div>

      <div className="col-span-2 font-semibold md:col-span-2">
        <div className="mb-1 text-xl">{title}</div>
        <div className="text-blue-500">{generateBeautifyDate(startAt, endAt)}</div>
      </div>

      <div className="md:text-center">
        <div className="mb-2 text-sm font-semibold text-grey-600">Participants</div>
        <div className="flex md:justify-center">
          <EventCardParticipantList bookings={bookings} />
        </div>
      </div>

      <div className="md:text-center">
        <div className="mb-2 text-sm font-semibold text-grey-600">Places restantes</div>
        <EventCardRemainingTickets maxTickets={maxTickets} remainingTickets={remainingTickets} state={state} />
      </div>

      <div className="col-span-2 flex md:col-span-1 md:justify-end">
        <EventCardPrice price={price} state={state} />
      </div>
    </Card>
  );
};

export default EventCard;
