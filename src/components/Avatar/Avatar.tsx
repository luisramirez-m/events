import { IBookingUser } from '@interfaces/bookingInterface';

export interface IAvatarProps {
  user: IBookingUser;
}

const Avatar = ({ user }: IAvatarProps) => {
  const { avatar, firstName, lastName, color } = user;

  return (
    <div data-testid="participant-avatar">
      {'url' in avatar && (
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${avatar.url})` }}
        />
      )}

      {!('url' in avatar) && (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm text-white"
          style={{ backgroundColor: color }}>
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
