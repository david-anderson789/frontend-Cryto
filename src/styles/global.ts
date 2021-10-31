import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

   #root{
    --primary-color: #3867EA;
    --secondary-color: #0A0E29;
    --tertiary-color: #9BA1AE;
    --system-background: #FFF;
  }

  body{
    background: #FFF;
    color: #0A0E29;
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  button{
    cursor: pointer;
  }
`;
