export interface IEvent {
  createdAt: string;
  daysBeforeClosing: number;
  description: string;
  endAt: string;
  price: string;
  id: number;
  image: IEventImage;
  maxTickets: number;
  maxTicketsPerUser: number;
  startAt: string;
  teamId: number;
  title: string;
  updatedAt: string;
  numberOfParticipants: number;
  remainingTickets: number;
  state: string;
}

export interface IEventImage {
  id: number;
  url: string;
}
