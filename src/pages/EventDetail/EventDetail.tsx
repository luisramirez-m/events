import { useState } from 'react';

import { Card, EventDetailDate, EventDetailHour, EventDetailImage } from '@components/index';
import { EventDetailParticipantList, EventDetailReservation } from '@elements/index';
import { useQueryGetEvent, useQueryGetBookings } from '@hooks/index';
import IconArrowBackIos from '@icons/IconArrowBackIos';
import { HeaderLayout, BodyLayout } from '@layouts/index';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams();

  const { data: event } = useQueryGetEvent(Number(eventId));
  const { data: bookings } = useQueryGetBookings();

  const [isReserved, setIsReserved] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="relative mx-auto w-full md:container">
      <div className="hidden md:block">
        <HeaderLayout title="Événements" />
      </div>
      <BodyLayout>
        <NavLink className="mb-6 flex w-fit items-center text-sm text-grey-500" to="/events">
          <IconArrowBackIos height={14} width={14} />
          Événements
        </NavLink>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="grid-row-1 col-span-2 grid gap-6">
            <Card>
              {event && (
                <>
                  <EventDetailImage image={event.image.url} />
                  <div className="-mt-12 grid gap-4 md:grid-cols-6">
                    <div className="flex justify-center pl-4">
                      <EventDetailDate date={event.startAt} />
                    </div>
                    <div className="col-span-5 flex flex-col gap-4 md:pt-16">
                      <h1 className="text-xl font-semibold">{event.title}</h1>
                      <EventDetailHour endAt={event.endAt} startAt={event.startAt} />

                      <div className="flex w-fit flex-col gap-6 md:flex-row">
                        <div className="">
                          <div className="mb-2 text-sm font-semibold text-grey-600">Place Restantes</div>
                          <div className="text-blue-500">{event.remainingTickets}</div>
                        </div>
                        <div>
                          <div className="mb-2 text-sm font-semibold text-grey-600">Date de clôture</div>
                          <div className="text-blue-500">{dayjs(event.endAt).format('D MMMM YYYY')}</div>
                        </div>
                      </div>

                      <p className="text-sm text-grey-600">{event.description}</p>
                    </div>
                  </div>
                </>
              )}
            </Card>

            {isMobile && (
              <Card className="w-full">
                <div className="mb-2 text-sm font-semibold text-grey-600">Politique d’annulation et de remboursement</div>
                <p className="text-sm text-grey-600">
                  Les annulations et remboursements peuvent s’effectuer jusqu’à la date de clôture des inscriptions soit{' '}
                  <span className="font-semibold">jusqu’au 2 janvier 2021.</span>
                </p>
              </Card>
            )}

            <div>
              {bookings && (
                <>
                  <h3 className="mb-4 font-semibold">Liste des participants ({bookings.length})</h3>
                  <Card>
                    <EventDetailParticipantList bookings={bookings} />
                  </Card>
                </>
              )}
            </div>
          </div>
          <div
            className={classNames('col-span-1 flex flex-col gap-4', {
              'mb-36': isMobile
            })}>
            {!isMobile && (
              <>
                <Card className="h-fit">
                  {event && <EventDetailReservation isReserved={isReserved} price={event.price} setIsReserved={setIsReserved} />}
                </Card>

                <Card className="w-full">
                  <div className="mb-2 text-sm font-semibold text-grey-600">Politique d’annulation et de remboursement</div>
                  <p className="text-sm text-grey-600">
                    Les annulations et remboursements peuvent s’effectuer jusqu’à la date de clôture des inscriptions soit{' '}
                    <span className="font-semibold">jusqu’au 2 janvier 2021.</span>
                  </p>
                </Card>
              </>
            )}
          </div>
        </div>
      </BodyLayout>
      {isMobile && (
        <div className="fixed bottom-0 w-full bg-white p-4 shadow-lg">
          {event && <EventDetailReservation isReserved={isReserved} price={event.price} setIsReserved={setIsReserved} />}
        </div>
      )}
    </div>
  );
};

export default EventDetail;
