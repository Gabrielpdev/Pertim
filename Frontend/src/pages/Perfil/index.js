import React, { useState } from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Formulario, Footer } from './styles';

function Perfil() {
  const usuario = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [celular, setCelular] = useState(usuario.celular);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(data) {
    dispatch(updateProfileRequest({ data, usuarioId: usuario.id }));
  }

  const schema = Yup.object().shape({
    nome: Yup.string(),
    celular: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string().notRequired(),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
    ),
  });

  return (
    <Container>
      <strong>Perfil do usuário</strong>

      <Formulario onSubmit={handleSubmit} schema={schema}>
        <div className="inputfield">
          <strong>Nome:</strong>
          <Input
            name="nome"
            placeholder="Ex.: Nome do usuário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="inputfield">
          <strong>Email:</strong>
          <Input
            name="email"
            placeholder="Ex.: exemplo@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputfield">
          <strong>Celular:</strong>
          <Input
            name="celular"
            placeholder="Ex.: 33991389232"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>

        <hr />

        <div className="inputfield">
          <strong>Nova senha:</strong>
          <Input
            name="password"
            placeholder="Ex.: *******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputfield">
          <strong>Confirmação da nova senha:</strong>
          <Input
            name="confirmPassword"
            placeholder="Ex.: *******"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Footer>
          <button type="button" onClick={() => history.push('/dashboard')}>
            <MdArrowBack size={20} color="#37759e" />
            VOLTAR
          </button>
          <button className="salvar" type="submit">
            <MdCheck size={20} color="#37759e" />
            SALVAR
          </button>
        </Footer>
      </Formulario>
    </Container>
  );
}

export default Perfil;
