export interface IBooking {
  id: number;
  user: IBookingUser;
  numberOfTickets: number;
  userId: number;
}

export interface IBookingUser {
  id: number;
  firstName: string;
  lastName: string;
  color: string;
  avatar: IBookingUserAvatar | object;
}

export interface IBookingUserAvatar {
  url?: string;
}
