import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 680px;
  margin-top: 50px;

  .logotype{
    height: 40px;
    width: 40px;
    background: #3867EA;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      color: #3867EA;
      font-size: 28px;
      line-height: 28px;
    }

    p{
      color: #9BA1AE;
      font-size: 12px;
      line-height: 27px;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;

    width: 350px;
    margin: 25px 0;

    strong{
      font-size: 13px;
    }


    .checkPassword{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 5px;

      a{
        font-size: 12px;
        color: #3867EA;
        font-weight: 700;
        text-decoration: none;
      }

      > div{
        width: 150px;
        align-items: center;

        display: flex;
        flex:1;

        input{
          height: 15px;
          width: 15px;
          border-radius: 8px;
          border: 0;
          margin-right: 5px;
        }
        label{
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          color: #9BA1AE;
        }

      }

    }

    >button{
      margin: 15px 0;
      background: #3867EA;
      height: 40px;
      border-radius: 35px;
      border: 0;
      color: #fff;
      transition: background-color 0.2s;

      &:hover{
        background: ${shade(0.2, '#3867EA')};
      }
    }

    >a{
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      font-size: 15px;

      margin: 5px 0 20px 0;
      small{
        margin-left: 5px;
        color: #AFB5C3;
          & + small{
          color: #3867EA;

        }
      }
    }
    .copy{
      margin-top: 20px;
      text-align: center;
      color: #9BA1AE;
    }

  }

`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimetedContainer = styled.div`
  animation: ${apperFromLeft} 1s;
`;

export const Background = styled.div`
  flex: 1;
  background-color: #3867EA;

`;
