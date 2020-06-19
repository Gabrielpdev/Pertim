import styled from 'styled-components';
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
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > strong {
    display: block;
    margin: 10px auto;
    color: #0b639e;
    font-size: 25px;
  }

  > button {
    background: #37759e;

    border: 0;
    border-radius: 15px;
    height: 30px;
    width: 30px;

    padding: 5px;
    margin-left: 20px;

    color: #fff;

    &:hover {
      background: ${darken(0.1, '#37759e')};
      color: ${darken(0.1, '#fff')};
    }
  }
`;

export const ProdutoLista = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-spacing: 0px 15px;
  max-width: 100%;

  thead th {
    color: #37759e;

    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 25px;
    padding-bottom: 0px;

    &:last-child {
      text-align: center;
    }
  }
  tbody {
    tr {
      text-align: center;

      td {
        background: #dbefff;

        padding: 5px 15px;
        color: #37759e;
        font-size: 16px;
        max-height: 40px;

        white-space: nowrap;
        max-width: 19em;
        overflow: hidden;
        text-overflow: ellipsis;

        &:first-of-type {
          border-radius: 4px 0 0 4px;
        }

        &:last-of-type {
          border-radius: 0 4px 4px 0;
        }

        button {
          background: #37759e;

          border: 0;
          border-radius: 12px;
          height: 25px;
          width: 25px;

          padding: 5px;
          margin: 0 5px;

          color: #fff;

          &:hover {
            background: ${darken(0.1, '#37759e')};
            color: ${darken(0.1, '#fff')};
          }
        }
      }
    }
  }
`;

export const Adicionar = styled.div`
  margin: 10px 20px 0 auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #37759e;

    border: 0;
    border-radius: 15px;

    padding: 5px 10px;
    margin: 0 5px;

    color: #fff;

    &:hover {
      background: ${darken(0.1, '#37759e')};
      color: ${darken(0.1, '#fff')};
    }
  }
`;
