import { getEvent } from '@services/eventService';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to retrieve one event by React Query as key "Event"
 *
 * @export
 * @return {*}
 */

export default function useQueryGetEvent(eventId: number) {
  return useQuery(['Events', eventId], () => getEvent(eventId), {
    enabled: !!eventId
  });
}
