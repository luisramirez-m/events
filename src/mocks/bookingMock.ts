import { IBooking } from '@interfaces/bookingInterface';

export const bookingsMock: IBooking[] = [
  {
    id: 23,
    user: {
      id: 1,
      firstName: 'Alan',
      lastName: 'Turing',
      color: '#a8071a',
      avatar: {
        url: 'https://i.pinimg.com/originals/21/79/df/2179df963390cab90c3306b956089ff4.jpg'
      }
    },
    numberOfTickets: 4,
    userId: 1
  },
  {
    id: 12,
    user: {
      id: 2,
      firstName: 'Christine',
      lastName: 'Anselmo',
      color: '#ff7875',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 2
  },
  {
    id: 34,
    user: {
      id: 3,
      firstName: 'Steven',
      lastName: 'Hawk',
      color: '#ad6800',
      avatar: {
        url: 'https://img-4.linternaute.com/obvCoHMxF5_9M-oD3iweO1JsPOM=/1240x/smart/5401c6a33c1544b394ad0b07bacb1f40/ccmcms-linternaute/15977875.jpg'
      }
    },
    numberOfTickets: 1,
    userId: 3
  },
  {
    id: 98,
    user: {
      id: 4,
      firstName: 'Braylen',
      lastName: 'Leone',
      color: '#ff7875',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 4
  },
  {
    id: 53,
    user: {
      id: 5,
      firstName: 'Jinny',
      lastName: 'Kaleigh',
      color: '#5b8c00',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 5
  },
  {
    id: 33,
    user: {
      id: 6,
      firstName: 'Hanne',
      lastName: 'Sieglinde',
      color: '#006d75',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 6
  },
  {
    id: 78,
    user: {
      id: 7,
      firstName: 'Émeline',
      lastName: 'Dianne',
      color: '#0050b3',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 7
  },
  {
    id: 55,
    user: {
      id: 8,
      firstName: 'Marie',
      lastName: 'Lambert',
      color: '#9e1068',
      avatar: {}
    },
    numberOfTickets: 1,
    userId: 8
  }
];
