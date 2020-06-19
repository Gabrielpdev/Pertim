import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  max-height: 700px;

  margin: 50px auto;
  background: #fff;
  border-radius: 25px;

  padding: 10px 40px;

  text-align: center;

  > strong {
    display: block;
    margin-top: 20px;

    color: #0b639e;
    font-size: 25px;
  }

  > form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px;

    padding: 20px;
  }
  div.adicionar {
    width: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: auto;

    > strong {
      color: #0b639e;
      font-size: 15px;
    }
  }

  div.footer {
    width: 190px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left: auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3px 10px;
  border: 0;
  background: #9ed8ff;
  border-radius: 15px;

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

  width: 160px;
  height: 25px;
  border-radius: 15px;

  padding: 10px;

  color: #0b639e;

  margin: 0 0 0 auto;

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
  width: 390px;

  margin: auto;

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

    > button.funcionamentos {
      display: flex;
      flex-direction: column;

      text-align: left;

      background: #dbefff;
      border-radius: 5px;

      margin: 5px 20px;
      padding: 10px;

      width: 390px;

      font-size: 20px;

      &:hover {
        background: #fff;
      }
    }
    > button.selecionado {
      display: flex;
      flex-direction: column;

      text-align: left;

      background: #fff;
      border-radius: 5px;
      border: 1px solid #0b639e;

      margin: 5px 20px;
      padding: 10px;

      width: 390px;

      font-size: 20px;

      &:hover {
        background: #fff;
      }
    }

    > text {
      margin: 2px 0;
      color: #0b639e;
      font-size: 20px;
    }
  }
`;
