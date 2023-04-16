import { Fragment, HTMLAttributes, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { IconInfo, IconWarning } from '@icons/index';
import classNames from 'classnames';

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title: string;
  message: string;
  setOpen: (isOpen: boolean) => void;
  onOk: () => void;
  type: string;
}

const Modal = ({ open, setOpen, onOk, type, title, message }: IModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root as={Fragment} show={open}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-grey-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div
                      className={classNames(
                        'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10',
                        {
                          'bg-red-100 text-red-400': type === 'danger',
                          'bg-blue-100 text-blue-400': type === 'info'
                        }
                      )}>
                      {type === 'info' && <IconInfo height={24} width={24} />}
                      {type === 'danger' && <IconWarning height={24} width={24} />}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-gray-900 text-base font-semibold leading-6">
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-grey-500">{message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 px-4 py-3 sm:flex sm:w-full sm:flex-row-reverse sm:px-6 md:justify-start">
                  <button
                    className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onOk()}
                    type="button">
                    Confirmer
                  </button>
                  <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-grey-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-grey-500 focus-visible:ring-offset-2"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    type="button">
                    Annuler
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
