import { getBookings } from '@services/bookingService';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to retrieve bookings by React Query as key "Bookings"
 *
 * @export
 * @return {*}
 */
export default function useQueryGetBookings() {
  return useQuery(['Bookings'], () => getBookings());
}
