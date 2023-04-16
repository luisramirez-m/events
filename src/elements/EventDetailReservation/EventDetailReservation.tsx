import { useState } from 'react';

import { EventDetailPrice, Modal } from '@components/index';
import classNames from 'classnames';

export interface IEventDetailReservationProps {
  isReserved: boolean;
  price: string;
  setIsReserved: (isReserved: boolean) => void;
}

const EventDetailReservation = ({ isReserved, price, setIsReserved }: IEventDetailReservationProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onBooking = () => {
    setIsReserved(!isReserved);
    setOpenModal(false);
  };
  return (
    <div className="flex flex-col gap-4">
      <EventDetailPrice isReserved={isReserved} price={price} />
      <button
        className={classNames('w-full rounded-lg py-2', {
          'bg-lime-800 text-white hover:bg-lime-900': !isReserved,
          'border border-red-500 text-red-600': isReserved
        })}
        onClick={() => setOpenModal(!openModal)}
        type="button">
        {isReserved ? 'Modifier ma réservation' : 'Réserver'}
      </button>

      {isReserved && (
        <Modal
          message="Êtes vous sûr de vouloir modifier votre réservation ?"
          onOk={() => onBooking()}
          open={openModal}
          setOpen={(isOpen) => setOpenModal(isOpen)}
          title="Modifier la réservation"
          type="danger"
        />
      )}

      {!isReserved && (
        <Modal
          message="Êtes vous sûr de vouloir réserver une place pour cet événement ?"
          onOk={() => onBooking()}
          open={openModal}
          setOpen={(isOpen) => setOpenModal(isOpen)}
          title="Confirmer la réservation"
          type="info"
        />
      )}
    </div>
  );
};

export default EventDetailReservation;
