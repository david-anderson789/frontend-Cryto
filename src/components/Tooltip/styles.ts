import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span{
    background: #ff0000;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);

    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff0000 transparent;
      border-width: 0px 6px 0 6px;
      top: 100%auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

`;
