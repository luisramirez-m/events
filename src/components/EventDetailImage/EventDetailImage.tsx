export interface IEventDetailImageProps {
  image: string;
}

const EventDetailImage = ({ image }: IEventDetailImageProps) => (
  <div className="h-24 w-full rounded-lg bg-cover bg-center bg-no-repeat md:h-52" style={{ backgroundImage: `url(${image})` }} />
);

export default EventDetailImage;
