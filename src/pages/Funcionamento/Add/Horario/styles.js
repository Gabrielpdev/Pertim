import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  max-height: 700px;

  margin: 50px auto;
  background: #fff;
  border-radius: 25px;

  padding: 10px 40px;

  text-align: center;

  span {
    color: #e81c1c;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 12px;
  }

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

    padding: 20px 40px;

    div {
      width: 150px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      margin: auto;

      > strong {
        display: block;

        margin-right: auto;

        color: #0b639e;
        font-size: 15px;
      }

      > input {
        min-width: 100px;

        padding: 5px;
        border: 0;
        background: #dbefff;
        border-radius: 10px;
        color: #37759e;
      }
    }
  }

  div.footer {
    width: 190px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 20px 45px 0 auto;
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
