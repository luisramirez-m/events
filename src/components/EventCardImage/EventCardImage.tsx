import { SyntheticEvent, useState } from 'react';

import { IconCalendarToday } from '@icons/index';

export interface IEventCardImageProps {
  title: string;
  image: string;
}

const EventCardImage = ({ title, image }: IEventCardImageProps) => {
  const [errorOnImage, setErrorOnImage] = useState<boolean>(false);

  const errorLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
    if (event.type === 'error') {
      setErrorOnImage(true);
    }
  };

  return (
    <>
      {errorOnImage && (
        <div className="flex h-24 w-full items-center justify-center rounded-lg bg-slate-50 text-grey-500 md:h-24 md:w-full lg:w-full">
          <IconCalendarToday />
        </div>
      )}

      {!errorOnImage && (
        <img
          alt={title}
          className="col-span-2 mr-4 h-24 w-full rounded-lg md:col-span-1 md:h-24 md:w-44 lg:w-full"
          data-testid="event-image"
          onError={(e) => errorLoadImage(e)}
          src={image}
        />
      )}
    </>
  );
};

export default EventCardImage;
