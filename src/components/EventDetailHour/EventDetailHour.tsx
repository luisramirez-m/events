import dayjs from 'dayjs';

export interface IEventDetailHourProps {
  startAt: string;
  endAt: string;
}

const EventDetailHour = ({ startAt, endAt }: IEventDetailHourProps) => (
  <div className="w-fit rounded-lg bg-blue-100 px-4 py-2 text-blue-500">
    {dayjs(startAt).format('HH:MM')} - {dayjs(endAt).format('HH:MM')}
  </div>
);

export default EventDetailHour;
