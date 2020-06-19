import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#d6e9fa, #37759e);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  max-height: 700px;
  text-align: center;
  padding: 15px;

  border-radius: 30px;
  background: #e4ebff;

  img {
    max-width: 300px;
    max-height: 150px;
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      text-align: left;
      color: #4899cf;
    }

    input {
      background: rgba(255, 255, 255, 0.8);
      border: 0;
      padding: 0 15px;
      height: 44px;
      margin: 5px 0 10px;
      color: #333;
      border-radius: 20px;

      &::placeholder {
        color: #6c89ba;
      }
    }

    span {
      color: #e81c1c;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      background: #4899cf;
      padding: 0 15px;
      margin: 10px 0 0;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 30px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#4899CF')};
      }
    }

    a {
      margin-top: 15px;
      font-size: 16px;
      color: #4899cf;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
