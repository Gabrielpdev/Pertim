import styled from 'styled-components';

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

  > strong {
    margin: 10px 0;
    color: #0b639e;
    font-size: 25px;
  }

  span {
    color: #e81c1c;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 12px;
  }

  form {
    div.colunas {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 20px;
    }

    div.botao {
      max-width: 200px;

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
        border-radius: 10px;

        color: #0b639e;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      > strong {
        margin: 10px 0 0 0;
        color: #37759e;
        font-size: 15px;
      }

      input {
        max-width: 250px;
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
        height: 70px;

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
  }
`;
