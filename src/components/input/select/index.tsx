/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  SelectHTMLAttributes, useCallback, useState, useEffect, useRef,
} from 'react';
import AsyncSelect from 'react-select';
import { useField } from '@unform/core';
import { Container } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  icon?: React.ComponentType;
  options: any;
}

const SelectCurrency:React.FC<SelectProps> = ({ options, placeholder, name /* icon: Icon */ }) => {
  const [isFocus, setIsFocus] = useState(false);
  const selectRef = useRef(null);
  const {
    fieldName, error, registerField,
  } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'props.value.value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocus={isFocus}>
      <AsyncSelect
        options={options}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={() => setIsFocus(false)}
        ref={selectRef}
      />
    </Container>
  );
};

export default SelectCurrency;
