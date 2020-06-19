import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
  max-width: 700px;
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

    > strong {
      display: block;
      margin: 10px 0 0 0;
      color: #37759e;
      font-size: 15px;
    }

    div.footer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;


      div.botao {
        max-height: 25px;
        min-width: 190px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: auto;
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

      div.pagamento {
        display: flex;
        flex-direction: column;

        text-align: left;

        border-radius: 5px;

        width: 100%;
        max-width: 250px;

        background: #dbefff;

        > button.pagamentos {
          display: flex;
          flex-direction: column;

          background: #dbefff;
          border-radius: 5px;
          border: 0;

          margin: 5px 20px;
          padding: 5px;

          color: #0b639e;

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
          color: #0b639e;

          margin: 5px 20px;
          padding: 5px;

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
    }
  }
`;
