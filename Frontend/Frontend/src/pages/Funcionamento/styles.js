import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  max-height: 700px;

  margin: 50px auto;
  background: #fff;
  border-radius: 25px;

  padding: 10px 0;

  text-align: center;

  > strong {
    color: #0b639e;
    font-size: 25px;
  }

  > form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0 20px;

    padding: 20px;

    div.direita {
    }
  }
  div.footer {
    width: 190px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px 20px 0 auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3px 10px;
  border: 0;
  background: #9ed8ff;
  border-radius: 10px;

  color: #0b639e;

  &:hover {
    background: ${darken(0.05, '#9ed8ff')};
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: #9ed8ff;

  width: 30px;
  height: 30px;
  border-radius: 15px;

  color: #0b639e;

  margin: 0 auto 10px 0;

  &:hover {
    background: ${darken(0.05, '#9ed8ff')};
  }
`;

export const Funionamentos = styled(PerfectScrollBar)`
  display: flex;
  flex-direction: column;

  text-align: left;

  background: #dbefff;
  border-radius: 5px;

  height: 240px;
  width: 90%;

  margin: auto;

  > strong {
    text-align: center;

    color: #0b639e;
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-direction: row;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      background: #9ed8ff;

      width: 25px;
      height: 25px;

      border-radius: 12.5px;

      color: #0b639e;

      margin: 0 5px 0 auto;

      &:hover {
        background: ${darken(0.05, '#9ed8ff')};
      }
    }

    > text {
      margin: 2px 0;
      color: #0b639e;
      font-size: 20px;
    }
  }
`;
