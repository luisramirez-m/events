import { IEvent } from '@interfaces/eventInterface';
import axios from 'axios';

export const getEvents = async (): Promise<IEvent[]> => {
  const events = await axios.get<IEvent[]>('http://localhost:3000/events');
  return events.data;
};
