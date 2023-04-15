import { ParticipantAvatar, ParticipantCount } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';

export interface IParticipantListProps {
  bookings: IBooking[];
  showOnly?: number;
}

const ParticipantList = ({ bookings, showOnly = 3 }: IParticipantListProps) => (
  <div className="flex -space-x-4 overflow-hidden">
    {bookings.slice(0, showOnly).map((booking) => (
      <ParticipantAvatar key={booking.id} user={booking.user} />
    ))}
    {bookings.length > showOnly && <ParticipantCount count={bookings.length} />}
  </div>
);

export default ParticipantList;
