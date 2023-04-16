import { IEvent } from '@interfaces/eventInterface';
import axios from 'axios';

export const getEvents = async (): Promise<IEvent[]> => {
  const events = await axios.get<IEvent[]>('http://localhost:3000/events');
  return events.data;
};

export const getEvent = async (eventId: number): Promise<IEvent> => {
  const event = await axios.get<IEvent>(`http://localhost:3000/events/${eventId}`);
  return event.data;
};
