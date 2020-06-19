/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo2.png';
import foto from '~/assets/semfoto.svg';

import history from '~/services/history';

import { Container, Content, Badge, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.user.profile);
  const empresa = useSelector((state) => state.user.empresa);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <button type="button" onClick={() => history.push('/dashboard')}>
            <img src={logo} alt="Pertim" />
          </button>
        </nav>

        <aside>
          <Profile>
            <div className="profile">
              <strong>
                {empresa ? empresa.nome : 'Nenhuma empresa cadastrada'}
              </strong>
              <strong>Proprietário: {usuario.nome}</strong>
            </div>
            <div className="avatar">
              <img
                src={
                  empresa
                    ? empresa.arquivo
                      ? empresa.arquivo.url
                      : foto
                    : foto
                }
                alt=""
              />
            </div>

            <div className="logout">
              <Badge onClick={handleSignOut}>
                <MdExitToApp size={20} />
              </Badge>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
