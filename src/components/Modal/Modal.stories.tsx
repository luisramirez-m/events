import { useState } from 'react';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal
};

const ModalWithHooks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-fit">
      <button onClick={() => setOpen(true)} type="button">
        Open Modal
      </button>
      <Modal
        message="Êtes vous sûr de vouloir modifier votre réservation ?"
        onOk={() => setOpen(false)}
        open={open}
        setOpen={(isOpen) => setOpen(isOpen)}
        title="Modifier la réservation"
        type="danger"
      />
    </div>
  );
};

export const Primary = {
  render: () => <ModalWithHooks />
};
