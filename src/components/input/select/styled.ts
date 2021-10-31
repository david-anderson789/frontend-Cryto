import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ECF2F7;
  border-radius: 5px;
  border: 1px solid #ECF2F7;
  width: 100%;
  padding: 3px 0 3px 0px;
  margin:3px 0 10px 0;

  display: flex;
  align-items: center;


  ${(props) => props.isFocus && css`
    fill: #3867EA;
    border-color: #3867EA;
  `}

  img{
    width: 20px;
    width: 20px;
  }

  .css-1pahdxg-control{
    background-color: transparent;
    border-color: transparent;
    border: none;
    box-shadow: none;
    &:hover{
      border: none;
      border-color: transparent;
    }

  }
  .css-1s2u09g-control{
    background: transparent;
    border: 0;
  }

  .css-14el2xx-placeholder{
    color: #9BA1AE;
        font-size: 13px;
        line-height: 22px;
  }

  .css-b62m3t-container{
    flex: 1;

  }

`;
