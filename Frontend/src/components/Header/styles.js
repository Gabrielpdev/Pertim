import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 200px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    button {
      max-width: 140px;
      max-height: 50px;

      background: none;
      border: 0;
    }

    img {
      max-width: 200px;
      max-height: 50px;
      padding-right: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 20px;
  border-left: 1px solid #e5f9fc;
  align-items: center;

  div.profile {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #6590c9;
    }
  }
  div.avatar {
    img {
      width: 40px;
      height: 40px;

      border-radius: 20px;
    }
  }

  div.logout {
    border-left: 1px solid #e5f9fc;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

export const Badge = styled.button`
  border: none;
  background: none;
  height: 20px;
  color: #6590c9;

  svg {
    margin-left: 10px;

    &:hover {
      color: #37759e;
    }
  }
`;
