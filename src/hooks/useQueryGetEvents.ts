import { getEvents } from '@services/eventService';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to retrieve events by React Query as key "PhaseTypes"
 *
 * @export
 * @return {*}
 */

export default function useQueryGetEvents() {
  return useQuery(['Events'], () => getEvents());
}
