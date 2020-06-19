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

  padding: 10px 0;

  > strong {
    display: block;
    margin: 10px auto;
    color: #0b639e;
    font-size: 25px;
  }

  span {
    color: #e81c1c;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Formulario = styled(Form)`
  margin: 5px 15px;

  div.inputField {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    > strong {
      margin: 10px 0 0 0;
      color: #37759e;
      font-size: 15px;
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

    textarea {
      height: 50px;

      padding: 5px;
      border: 0;
      background: #dbefff;
      border-radius: 10px;
      color: #37759e;
      resize: none;

      ::-webkit-input-placeholder {
        color: #37759e;
      }
    }
  }
`;

export const InputSuperior = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0 20px;
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
