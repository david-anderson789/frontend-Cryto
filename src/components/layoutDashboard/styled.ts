/* eslint-disable no-tabs */
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .optionLabel{
    display: flex;
  }
  .optionImgLabel{
    margin-right: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: min(1200px, 100%);

  .whiteWrapper{
    bottom: 40px;
    position: fixed;
    height: 50px;
    background-color: #fff;
    left: 0;
    width: 100%;
    display: inline;
    margin-top: 50px;

    @media(min-width: 501px){
      display: none;
    }
  }
`;
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  display: flex;
  justify-content: flex-end;
  margin: 15px 45px 0;

  div{
    background-color: #3867EA;
    width: 42px;
    height: 42px;
    border-radius:50%;

    display: flex;
    justify-content: center;
    align-items: center;

  }
`;
export const BottonMenu = styled.div`
  bottom: 0;
  position: fixed;
  background-color: #3867EA;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 12px min(46px, max(10vw, 10px));


   box-shadow: 88px 14px 28px rgba(0,0,0,0.25), 10px 10px 0px rgba(0,0,0,0.22);

  @media(min-width: 501px){
    display: none;
  }

  .menu-tolt{
    background: transparent;
    border: 0;
   display: relative;
   fill: #fff;

    &.activediv{
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 0 15px; */
    position: relative;
    background-color: #fff;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin-top: -50px;

    svg{
      fill:#3867EA;
      fill-opacity: 1;
    }
    }

  }


  svg{
    fill: white;
    fill-opacity: 0.65;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor:pointer;

    &.active{
      fill:#3867EA;
      fill-opacity: 1;
    }

    &:hover
    {
      fill-opacity: 1;
      -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
  }
`;
export const SideBar = styled.div`
  display: none;

  @media(min-width: 501px){
    display: flex;
    flex-direction: column;
    background-color: #3867EA;

    position: sticky;

    top:0;
    left:0;

   // padding: 9px 35px 20px;

    height: 100vh;
    overflow-y: min-height(500px, 100%);
    overflow-x: hidden;
  }

`;
export const TopSide = styled.div`
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  @media(min-width: 860px){
    align-items: flex-start;
  }

  p{
    font-size: 12px;
    color: #fff;
    opacity: 0.8;
    padding: 10px 35px;
  }
  .menuButton{
    display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  outline: 0;
  border: 0;
  background: transparent;

   /* margin-top: 8px;
  margin-bottom: 15px; */

  width: 100% ;

  svg{
    fill: #fff;
    fill-opacity: 0.65;
  }
  >span{
    display: none;
  }
  @media(min-width: 860px){
    >span{
      display: inline;
      color: #fff;
      font-size: 13px;
      margin-left: 19px;
      opacity: 0.65;
    }
  }
  @media(min-width: 501px){
    padding: 10px 35px;
    //padding: 0px 35px;
  }

  &:hover{
    background-color: ${shade(0.02, '#3867EA')};
  }
  &.active {
    background-color: ${shade(0.02, '#3867EA')};
    svg{
      fill-opacity:1;
    }
    span{
      opacity: 1;
    }
  }
  }
`;
export const Logo = styled.div`
  padding: 20px 35px;
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  outline: 0;
  border: 0;
  background: transparent;

   /* margin-top: 8px;
  margin-bottom: 15px; */

  width: 100% ;

  svg{
    fill: #fff;
    fill-opacity: 0.65;
  }
  >span{
    display: none;
  }
  @media(min-width: 860px){
    >span{
      display: inline;
      color: #fff;
      font-size: 13px;
      margin-left: 19px;
      opacity: 0.65;
    }
  }
  @media(min-width: 501px){
    padding: 10px 35px;
    //padding: 0px 35px;
  }

  &:hover{
    background-color: ${shade(0.02, '#3867EA')};
  }
  &.active {
    background-color: ${shade(0.02, '#3867EA')};
    svg{
      fill-opacity:1;
    }
    span{
      opacity: 1;
    }
  }
`;
export const BotSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  >span{
    display: none;
  }
  >strong{
    display: none;
  }
  @media(min-width: 860px){
    >span{
      display: inline;
      color: #fff;
      font-size: 12px;
      opacity: 0.8;
      text-align: center;

      padding: 10px 55px;
    }
    >strong{
      display: inline;
      color: #fff;
      margin-top: 10px;
    }
    button{
      outline: 0;
      border: 0;
      border-radius: 23px;
      height: 35px;
      padding: 1px 30px;
    }

  }

  button{
      margin-top: 10px;
      outline: 0;
      border: 0;
      font-size: 10px;
      border-radius: 23px;
      height: 35px;
      padding: 1px 15px;
    }

`;
