/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal : React.FC<ModalProps> = ({
  isOpen, onClose, children,
}) => {
  const outsideRef = React.useRef(null);
  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container>
      <div
        ref={outsideRef}
        className="modalOverlay"
        onClick={handleCloseOnOverlay}
      />
      <div className="modalBox">
        <div className="modalContent">
          { children }
        </div>
      </div>
    </Container>
  ) : null;
};

export default Modal;
