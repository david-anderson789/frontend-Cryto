import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .modalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
  cursor: pointer;
}

.modalBox {
  position: relative;
  width: 25%;
  margin: 0 10%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  cursor: auto;

    @media(max-width: 1200px) {
        width: min(350px, 100%);
    }
}

.modalTitle {
  color: #9E25FC;
  font-size: 30px;
}

.modalContent {


}

.modalClose {
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
}

.modalClose:hover {
  transform: rotate(180deg);
}


`;
