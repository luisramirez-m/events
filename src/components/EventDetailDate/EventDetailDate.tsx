import dayjs from 'dayjs';

export interface IEventDetailDateProps {
  date: string;
}

const EventDetailDate = ({ date }: IEventDetailDateProps) => (
  <div>
    <div className="rounded-lg bg-blue-100 px-8 py-4 text-center text-blue-500">
      <div className="mb-2 font-semibold uppercase">{dayjs(date).format('MMM')}</div>
      <div className="text-2xl font-semibold">{dayjs(date).format('D')}</div>
    </div>
  </div>
);

export default EventDetailDate;
