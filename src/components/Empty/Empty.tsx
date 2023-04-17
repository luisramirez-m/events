import IconCalendarToday from '@icons/IconCalendarToday';

export interface IEmptyProps {
  title: string;
  message: string;
  height?: number;
}

const Empty = ({ title, message, height = 250 }: IEmptyProps) => (
  <div className="flex flex-col items-center justify-center gap-4" style={{ height }}>
    <div className="text-grey-600">
      <IconCalendarToday height={50} width={50} />
    </div>
    <div className="text-xl font-semibold">{title}</div>
    <div className="text-gray-500">{message}</div>
  </div>
);

export default Empty;
