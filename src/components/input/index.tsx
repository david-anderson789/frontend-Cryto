import React, {
  InputHTMLAttributes, useRef, useEffect, useState, useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type?: string;
  name: string;
  icon: React.ComponentType;
  buttonPassword?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({

  name, icon: Icon, buttonPassword: ButtonPassword, ...rest
}) => {
  const inputRef = useRef(null);
  const {
    fieldName, error, registerField,
  } = useField(name);

  const [isFocus, setIsFocus] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFocus={isFocus}>
        <Icon />
        <input
          onFocus={handleInputFocus}
          onBlur={() => setIsFocus(false)}
          ref={inputRef}
          type={
            (ButtonPassword) ? 'password' : ''
          }
          {...rest}
        />
        {ButtonPassword && <ButtonPassword />}
        {error && (
        <Error title={error}>
          <FiAlertCircle color="#ff0000" size={16} />
        </Error>
        )}
      </Container>

    </>
  );
};

export default Input;
