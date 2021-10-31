import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 28px 45px 0 45px;

`;
export const Header = styled.div`

  display: flex;
  justify-content: space-between;

  @media(max-width: 701px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .WellComeHeader{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    .buttonHeader{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 18px;

    }
  }

  .WellComeHeader{
    display: flex;
    flex-direction: column;
    strong {
      font-size: 28px;
      color: #3867EA;
      font-weight: bold;
    }
    span{
      font-size: 17px;
      color: #5F6574;
      line-height: 15px;
      opacity: 0.6;
    }
  }

  .buttonHeader{
    display: flex;
    align-items: center;

    button{
      display: flex;
      align-items: center;
      justify-content: center;


      border-radius: 19px;
      padding: 9px 15px;
      border: none;
      margin-right: 8px;
      outline: 0;

      p{
        font-size: 13px;
        margin-left: 5px;
      }

       &:hover{
        background-color: ${shade(0.02, '#EFEFEF')};
      }
    }

    .addButtonTrades{
      background-color: #3867EA;
      color: #fff;

      &:hover{
        background-color: ${shade(0.05, '#3867EA')};
      }
    }
  }

`;
export const ContainerModel = styled.div`
padding: 10px 20px;
  >p{
    font-weight: bold;
    font-size: 17px;
    padding: 10px 0px 5px;
  }
  .activeInputTrade{
    input {
      margin: 0 10px;
    }
  }
  .desableInputTrade{
    display: none;
  }
  button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      border-radius: 19px;
      padding: 11px 15px;
      border: none;

      outline: 0;


      p{
        font-size: 13px;
        margin-left: 5px;
      }

    }

    .addButtonTrades{

      background-color: #3867EA;
      color: #fff;

      &:hover{
        background-color: ${shade(0.05, '#3867EA')};
      }
    }
    .GanhoPerdaTrade{
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 3px;

      background-color: #EFF2F5;
      border-radius: 8px;
      margin: 12px 0;

      p{
        font-size: 12px;
        font-weight: 400;
      }

      >button{
        background-color: #EFF2F5;
        border-radius: 12px;
        font-size: 13px;


        &.active{
          background-color: #fff;

        }
      }
    }
  .DayPicker-wrapper {

  }
  .DayPickerInput-OverlayWrapper{

  }
  .DayPickerInput-Overlay {
    top: -5.2em;
    left: 8.5em;

    @media(max-width: 701px){
      top: -7.5em;
      left: -1.8em;
    }
  }
`;
export const TopSide = styled.div`
  display: flex;
  padding: 25px 0;

  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BoxSide = styled.div`
  border: 1px solid #DADFE2;
  border-radius: 8px;
;
  display: flex;
  flex-direction: column;
  padding: 20px 35px 20px 15px;
  margin-right: 20px;

  p{
    margin-bottom: 6px;
  }
  strong{
    margin-bottom: 6px;
  }
  small{

  }


`;
export const Logo = styled.div`

  background-color: #3867EA;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const ContainerSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px){
    display: grid;
    margin: 0px;
    padding: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`;
export const ContainerSideInfo = styled.div`
  border: 1px solid #DADFE2;
  border-radius: 8px;
  flex: 1;
  padding: 12px 15px 0 15px;

  strong{
    margin-bottom: 6px;
  }

  .infoTrade{
    display: flex;
    margin-top: 6px;

    strong {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }
  }

`;
export const BotSideOne = styled.div`

  padding-top: 8px;
  width: 100%;
  height: 300px;
  padding-bottom: 40px;

  @media(min-width: 850px){
    width: 80%;
  }
  @media(max-width: 501px){
   margin-bottom: 60px;
  }
  @media(min-width: 501px){
      width: 60%;
      .recharts-responsive-container{
        display: flex;
        width: min(50%, 350px);
      }
  }

  .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis{
    font-size: 13px;
    color: #000;
  }
  .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis{
    font-size: 13px;
    color: #000;
  }




  /* @media(max-width: 1100px){
    width: 100%;
  } */
`;
