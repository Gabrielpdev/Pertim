import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo1.png';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatorio'),
  celular: Yup.string()
    .required('celular é obrigatorio')
    .min(11, 'No mínimo 1 caracteres'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('E-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Senha é obrigatoria'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password, celular }) {
    dispatch(signUpRequest(nome, email, password, celular));
  }
  return (
    <>
      <img src={logo} alt="Pertim" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Seu nome" />
        <Input name="celular" type="text" placeholder="Seu celular" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
