import { Avatar } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';

export interface IEventDetailParticipantListItemProps {
  booking: IBooking;
}

const EventDetailParticipantListItem = ({ booking }: IEventDetailParticipantListItemProps) => (
  <div className="flex items-center gap-4 py-4 md:px-4 md:py-5" data-testid="participant-list-item">
    <Avatar user={booking.user} />
    <div className="w-11/12 text-sm text-grey-800 md:w-6/12">
      {booking.user.firstName} {booking.user.lastName}
    </div>
    <div className="flex w-1/12 justify-end text-sm font-semibold text-cyan-800 md:w-6/12">{booking.numberOfTickets}</div>
  </div>
);

export default EventDetailParticipantListItem;
