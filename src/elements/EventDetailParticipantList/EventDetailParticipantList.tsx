import { EventDetailParticipantListItem } from '@components/index';
import { IBooking } from '@interfaces/bookingInterface';

export interface IEeventDetailParticipantListProps {
  bookings: IBooking[];
}

const EventDetailParticipantList = ({ bookings }: IEeventDetailParticipantListProps) => (
  <>
    <div className="mx-3 hidden rounded-lg bg-grey-300 px-4 py-2 text-sm font-semibold text-grey-500 md:flex">
      <div className="w-12" />
      <div className="text-grey-500 md:w-6/12">Salarié</div>
      <div className="flex justify-end text-grey-500 md:w-6/12">Quantité réservée</div>
    </div>

    {bookings.map((booking) => (
      <EventDetailParticipantListItem booking={booking} key={booking.id} />
    ))}
  </>
);

export default EventDetailParticipantList;
