import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo1.png';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('E-mail é obrigatorio'),
  password: Yup.string().required('Senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <div>
      <img src={logo} alt="Pertim" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="examplo@email.com" />

        <strong>SUA SENHA</strong>
        <Input name="password" type="password" placeholder="******" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/registrar">Criar conta</Link>
      </Form>
    </div>
  );
}
