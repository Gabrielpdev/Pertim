import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  max-height: 700px;
  margin: 50px auto;
  background: #fff;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;

  > div {
    width: 700px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > strong {
      margin: 0 auto;

      color: #0b639e;
      font-size: 25px;
    }
  }

  span {
    color: #e81c1c;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 12px;
  }

  div.verificacao {
    max-width: 270px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px 0 0 auto;
  }

  form {
    > button {
      margin: 10px 0 0 auto;
    }
    div.colunas {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 20px;
    }

    div.botao {
      max-width: 190px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin: 45% 0 0 auto;
    }

    div {
      display: flex;
      flex-direction: column;

      > strong {
        margin: 10px 0 0 0;
        color: #37759e;
        font-size: 15px;
      }
    }
  }
`;

export const INput = styled(Input)`
  max-width: 250px;
  min-width: 200px;

  padding: 5px;
  border: 0;
  background: #dbefff;
  border-radius: 10px;
  color: #37759e;

  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled === true ? 'not-allowed' : 'pointer')};

  ::-webkit-input-placeholder {
    color: #37759e;
  }
`;
export const AddButton = styled.button`
  display: ${(props) => (props.visivel ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 15px;

  background: #9ed8ff;

  width: 30px;
  height: 30px;
  margin-right: 30px;
  padding: 0;

  color: #0b639e;

  &:hover {
    background: ${darken(0.05, '#9ed8ff')};
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

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${(props) =>
      props.disabled ? '#9ed8ff' : darken(0.05, '#9ed8ff')};
  }
`;

export const Aviso = styled.div`
  display: ${(props) => (props.visivel ? 'flex' : 'none')} !important;

  margin: 10px 10px 0 auto;
  max-width: 210px;

  text-align: center;
  font-size: 12px;

  border: 1px solid #0b639e;
  border-radius: 5px;

  padding: 5px;
  background: #fff;
`;
