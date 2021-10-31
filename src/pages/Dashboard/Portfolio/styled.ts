import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 28px 45px 0 45px;
`;
export const Logo = styled.div`

  background-color: #3867EA;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 12px;
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
    .SelectWallet{

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
      font-size: 13px;
      color: #000;
      line-height: 15px;
      font-weight: bold;
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
export const TopSide = styled.div`
  display: flex;
  padding: 25px 0;

  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
export const GraficsBox = styled.div`

  padding: 30px 30px 10px 0;
  width: 100%;
  height: 280px;

  border: 1px solid #DADFE2;
  border-radius: 6px;

  @media(min-width: 850px){
    width: 80%;
  }
  @media(max-width: 501px){
   margin-bottom: 10px;
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

`;
export const ContainerSideInfo = styled.div`
  border: 1px solid #DADFE2;
  border-radius: 6px;
  flex:1;
  margin-left: 20px;
  padding: 18px;
  height: auto;

  @media(max-width: 1200px){
    margin-top: 20px ;
    margin-left:0;
  }



  .lucroPerdas{
    margin-top: 12px;
  }

  .CircleProgressFlex{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
  }
  .circleProgress{
      height: 80px;
      width: 80px;

    }

  .infoTrade{
    display: flex;
    margin-top: 10px;
    strong{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

  }
`;
export const BotSide = styled.div`
  @media(max-width: 501px){
    margin-bottom: 110px;
  }
`;
export const DisplayCurrency = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  border: 1px solid #DADFE2;
  border-radius: 6px;

  padding: 20px;


  @media(max-width: 800px){
    table tr th:nth-child(3){display: none}
    table tr th:nth-child(4){display: none}
    table tr th:nth-child(5){display: none}

    table tr td:nth-child(3){display: none}
    table tr td:nth-child(4){display: none}
    table tr td:nth-child(5){display: none}
  }
  @media(max-width: 601px){

    table tr th:nth-child(6){display: none}
    table tr td:nth-child(6){display: none}
  }
  @media(max-width: 501px){
    table tr th:nth-child(2){display: none}
    table tr td:nth-child(2){display: none}
  }
  table{
    margin-top: 15px;
    text-align: start;
    thead{

      font-size: 14px;
      tr{
        th:nth-child(1){text-align: start}
        th{

          text-align: center;
        }
      }
    }
    tbody{
      tr{
        td{
          text-align: center;
        }
      }
      .currency{
        display: flex;
        align-items: center;
        p{
          margin-left: 8px;
        }
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
