import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  background: #fff;
  border-radius: 25px;


  display: flex;
  justify-content: space-between;

  div.botoes {
    display: flex;
    flex-direction: column;
    button {
      margin: 30px;
      min-width: 200px;
      height: 50px;
      padding: 5px;
      border: 0;
      border-radius: 25px;
      color: #fff;
      font-weight: bold;
      font-size: 19px;
      background: #37759e;

      & + button {
        margin-top: 0px;
      }

      &:hover {
        background: ${darken(0.05, '#37759e')};
      }
    }
  }

  div.cadastre {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      margin: 30px auto 0 auto;
      text-align: center;
      color: #37759e;
      font-size: 24px;
    }
    button {
      margin: 30px;
      min-width: 200px;
      height: 50px;
      padding: 5px;
      border: 0;
      border-radius: 25px;
      color: #fff;
      font-weight: bold;
      font-size: 19px;
      background: #37759e;

      &:hover {
        background: ${darken(0.05, '#37759e')};
      }
    }
  }

  div.edicao {
    > button {
      margin: 20px 20px auto auto;

      border: 0;
      border-radius: 15px;

      background: #37759e;
      display: flex;
      align-items: center;
      justify-content: center;

      height: 30px;
      width: 30px;
    }
  }

  div.empresa {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div.header {
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 30px 0 20px 0;

      strong {
        margin: 0 10px 0 auto;
        text-align: center;
        color: #37759e;
        font-size: 24px;
      }

      img {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        margin-right: auto;
      }
    }

    >strong {
      margin-bottom: 15px;
      text-align: center;
      color: #37759e;
      font-size: 16px;
    }
    >span + span {
      margin-bottom: 0px;
    }

    div.empresaInfo{
      display:flex;
      justify-content: space-between;
      flex-direction: row;

      margin-bottom: 15px ;

      span {
        color: #37759e;
        font-size: 12px;
        margin-bottom: 7px;
      }

      div.esquerda {
        display:flex;
        flex-direction: column;
        margin-right:30px;

        strong {
          display:flex;
          text-align: center;
          color: #37759e;
        }
      }

      div.meio {
        display:flex;
        flex-direction: column;
        margin-right:30px;

        strong {
          display:flex;
          text-align: center;
          color: #37759e;
        }
      }

      div.direita {
        display:flex;
        flex-direction: column;


        strong {
          text-align: center;
          color: #37759e;
        }

        li {
          font-weight: 400;
          font-size: 14px;
          text-align: left;
        }
      }
    }


    div.informacoes {
      margin: 10px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 20px;

      > strong {
        color: #37759e;
      }
      div.endereco {
        display: flex;
        flex-direction: column;

        strong {
          color: #37759e;
        }
        span {
          color: #37759e;
          font-size: 14px;
        }
      }

      div.funcionamento {
        display: flex;
        flex-direction: column;
        strong {
          color: #37759e;
        }
        span {
          color: #37759e;
          font-size: 12px;
        }
      }

      div.entrega {
        display: flex;
        flex-direction: column;
        strong {
          color: #37759e;
        }
        span {
          color: #37759e;
          font-size: 12px;
        }
      }
    }
  }
`;
