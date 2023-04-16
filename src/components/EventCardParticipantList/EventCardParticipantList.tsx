import { Avatar, EventCardParticipantCount } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';

export interface IEventCardParticipantListProps {
  bookings: IBooking[];
  showOnly?: number;
}

const EventCardParticipantList = ({ bookings, showOnly = 3 }: IEventCardParticipantListProps) => (
  <div className="flex -space-x-4 overflow-hidden">
    {bookings.slice(0, showOnly).map((booking) => (
      <Avatar key={booking.id} user={booking.user} />
    ))}
    {bookings.length > showOnly && <EventCardParticipantCount count={bookings.length} />}
  </div>
);

export default EventCardParticipantList;
