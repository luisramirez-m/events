import { IBooking } from '@interfaces/bookingInterface';
import axios from 'axios';

export const getBookings = async (): Promise<IBooking[]> => {
  const event = await axios.get<IBooking[]>(`http://localhost:3000/bookings`);
  return event.data;
};
