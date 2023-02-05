import { Backdrop, ModalWindow } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  const backdropClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose('');
    }
  };
  return (
    <Backdrop onClick={backdropClose}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
  );
};
