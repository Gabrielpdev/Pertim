import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'secao', {
      email,
      password,
    });

    const { token, usuario } = response.data;

    if (!usuario.propietario) {
      toast.error('Usuário não é um proprietário');
      yield put(signFailure());

      return;
    }

    yield (api.defaults.headers.Authorization = `Bearer ${token} `);

    try {
      const empresa = yield call(api.get, `empresa-proprietario/${usuario.id}`);

      yield put(signInSuccess(token, usuario, empresa));
    } catch (e) {
      try {
        yield put(signInSuccess(token, usuario));
      } catch (err) {
        toast.error('Falha na autentificação');
        yield put(signFailure());
      }
    }

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autentificação');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { nome, email, password, celular } = payload;

    yield call(api.post, 'usuarios', {
      nome,
      email,
      password,
      celular,
      propietario: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token} `;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
