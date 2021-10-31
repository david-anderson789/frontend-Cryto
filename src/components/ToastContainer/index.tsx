/* eslint-disable import/order */
import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styled';
import Toast from './Toast';
import { ToastMessages } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
      keys: (message) => message.id,

    },
  );
  return (

    <Container>

      {
      // eslint-disable-next-line no-shadow
      messagesWithTransitions((style, messages) => (
        <Toast
          key={messages.id}
          style={style}
          message={messages}
        />
      ))
      }

    </Container>
  );
};

export default ToastContainer;
