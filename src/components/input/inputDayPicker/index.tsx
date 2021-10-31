import React, {
  InputHTMLAttributes, useEffect, useRef,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { endOfMonth, add } from 'date-fns';
import MomentLocaleUtils from 'react-day-picker/moment';
import { Container, Error } from './styled';
import 'moment/locale/pt-br';
import 'react-day-picker/lib/style.css';

interface DayPickerProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icon: React.ComponentType;
}

const DayPicker: React.FC<DayPickerProps> = ({
  icon: Icon, name, placeholder,
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'state.month',
    });
  }, [fieldName, registerField]);

  const highlighted = {
    from: add(new Date(), {
      days: 1,
    }),
    to: endOfMonth(new Date()),
  };

  return (
    <Container>
      <Icon />
      <DayPickerInput
        ref={inputRef}
        placeholder={`${MomentLocaleUtils.formatDate(new Date(), 'LL', 'it')}`}
        parseDate={MomentLocaleUtils.parseDate}
        formatDate={MomentLocaleUtils.formatDate}
        format="LL"
        inputProps={{ readOnly: true }}
        dayPickerProps={{
          weekdaysShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
          toMonth: new Date(),
          disabledDays: highlighted,
          months: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
          ],
          locale: 'pt-br',
          localeUtils: MomentLocaleUtils,
        }}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#ff0000" size={16} />
        </Error>
      )}
    </Container>

  );
};

export default DayPicker;
