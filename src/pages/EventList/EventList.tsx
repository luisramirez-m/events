import { useEffect, useState } from 'react';

import { Tabs } from '@components/index';
import { EventCard } from '@elements/index';
import { useQueryGetEvents } from '@hooks/index';
import { IEvent } from '@interfaces/eventInterface';
import { BodyLayout, HeaderLayout } from '@layouts/index';
import { bookingsMock } from '@mocks/bookingMock';
import { NavLink } from 'react-router-dom';

const EventList = () => {
  const [tabActive, setTabActive] = useState<string>('active');
  const [eventsFiltered, setEventsFilteres] = useState<IEvent[]>();

  const { data: events } = useQueryGetEvents();

  const filterEvents = (state: string) => {
    if (events) {
      const newEvents = events.filter((event) => event.state === state);
      setEventsFilteres(newEvents);
    }
  };

  useEffect(() => {
    filterEvents(tabActive);
  }, [events, tabActive]);

  return (
    <div className="mx-auto w-full md:container">
      <HeaderLayout title="Événements" />
      <BodyLayout>
        <div className="mb-3 flex w-full">
          <Tabs>
            <Tabs.Item isActive={tabActive === 'active'} onClick={() => setTabActive('active')}>
              A venir
            </Tabs.Item>
            <Tabs.Item isActive={tabActive === 'archived'} onClick={() => setTabActive('archived')}>
              Passés
            </Tabs.Item>
          </Tabs>
        </div>
        {eventsFiltered && (
          <div className="flex flex-col gap-4">
            {eventsFiltered.map((event) => (
              <>
                {event.state === 'active' && (
                  <NavLink key={event.id} to={`/events/${event.id}`}>
                    <EventCard bookings={bookingsMock} event={event} />
                  </NavLink>
                )}

                {event.state === 'archived' && <EventCard bookings={bookingsMock} className="cursor-not-allowed" event={event} />}
              </>
            ))}
          </div>
        )}
      </BodyLayout>
    </div>
  );
};

export default EventList;
