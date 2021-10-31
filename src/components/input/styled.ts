import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isError?: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #ECF2F7;
  border-radius: 5px;
  border: 1px solid #ECF2F7;
  width: 100%;
  padding: 12px;
  margin:3px 0 10px 0;

  display: flex;
  align-items: center;


  ${(props) => props.isFocus && css`
    fill: #3867EA;
    border-color: #3867EA;
  `}
  ${(props) => props.isError && css`
    fill: #3867EA;
    border-color: #ff0000;
  `}
 input{

   flex: 1;
   background: transparent;
   border: 0;
      &::placeholder{
        color: #9BA1AE;
        font-size: 13px;
        line-height: 22px;

    }



    }
    div.DayPickerInput-OverlayWrapper {
      position: absolute;
      background-color: #9BA1AE;
    }
`;
export const Error = styled(Tooltip)`
  height: 16px;
  svg{
    margin: 0;

  }
`;
