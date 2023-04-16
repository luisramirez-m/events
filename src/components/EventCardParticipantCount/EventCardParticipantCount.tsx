export interface IEventCardParticipantCountProps {
  count: number;
}
const EventCardParticipantCount = ({ count }: IEventCardParticipantCountProps) => (
  <div
    className="flex h-10 w-10 items-center justify-center rounded-full border border-grey-200 bg-white"
    data-testid="participant-count">
    {count}
  </div>
);

export default EventCardParticipantCount;
