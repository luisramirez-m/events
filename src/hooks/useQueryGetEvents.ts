import { getEvents } from '@services/eventService';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to retrieve events by React Query as key "Events"
 *
 * @export
 * @return {*}
 */
export default function useQueryGetEvents() {
  return useQuery(['Events'], () => getEvents());
}
