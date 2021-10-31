import styled from 'styled-components';
import Tooltip from '../../Tooltip';

export const Container = styled.div`
  background: #ECF2F7;
  border-radius: 5px;
  border: 1px solid #ECF2F7;
  width: 100%;
  padding: 12px;
  margin:3px 0 10px 0;

  display: flex;
  align-items: center;


  input{

  flex:1;
   background: transparent;
   border: 0;
      &::placeholder{
        color: #9BA1AE;
        font-size: 13px;
        line-height: 22px;

      }

    }
`;
export const Error = styled(Tooltip)`
  height: 16px;
  svg{
    margin: 0;

  }
`;
