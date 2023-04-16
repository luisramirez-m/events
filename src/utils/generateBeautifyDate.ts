import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr';

dayjs.locale(fr);

const generateBeautifyDate = (dateStart: string, dateEnd: string): string => {
  const start = dayjs(dateStart);
  const end = dayjs(dateEnd);

  const startFormat = start.format('DD MMMM HH:mm');
  const endFormat = end.format('DD MMMM HH:mm');

  return start.isSame(end, 'day') ? `${startFormat} - ${end.format('HH:mm')}` : `${startFormat} - ${endFormat}`;
};

export default generateBeautifyDate;
