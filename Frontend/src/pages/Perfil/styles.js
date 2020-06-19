import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 850px;
  margin: 50px auto;

  background: #fff;
  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 25px;

  > strong {
    margin: 0 auto;
    color: #37759e;
    font-size: 30px;
  }

  span {
    color: #e81c1c;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Formulario = styled(Form)`
  div.inputfield {
    display: flex;
    flex-direction: column;

    padding: 5px;

    > strong {
      margin-left: 5px;
      color: #37759e;
      font-size: 18px;
    }

    input {
      min-width: 200px;

      padding: 5px;
      border: 0;
      background: #dbefff;
      border-radius: 10px;
      color: #37759e;

      ::-webkit-input-placeholder {
        color: #37759e;
      }
    }
  }

  hr {
    width: 95%;
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 20px 20px 10px 20px;
  }
`;

export const Footer = styled.div`
  width: 190px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0 0 auto;

  button {
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
  }
`;
