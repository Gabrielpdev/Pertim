import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  updateProfileFailure,
  updateProfileSuccess,
  UpdateEmpresaSuccess,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { usuarioId, data } = payload.data;

    const { nome, email, celular, password, confirmPassword } = data;

    if (password !== '' && password === confirmPassword) {
      const profile = {
        nome,
        email,
        celular,
        password,
      };

      const response = yield call(api.put, `usuarios/${usuarioId}`, profile);

      yield put(updateProfileSuccess(response.data));

      toast.success('Perfil atualizado com sucesso!');
      return history.push('/dashboard');
    }

    const profile = {
      nome,
      email,
      celular,
    };

    const response = yield call(api.put, `usuarios/${usuarioId}`, profile);
    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso!');
    return history.push('/dashboard');
  } catch (err) {
    yield put(updateProfileFailure());
    return toast.error('Erro ao atualizar perfil, confira seus dados!');
  }
}

export function* updateEmpresa({ payload }) {
  try {
    const {
      id,
      nome,
      telefone,
      whatsapp,
      bio,
      situacao,
      tempo_max,
      tempo_min,
      valor_entrega,
      instagram,
      facebook,
      arquivo_id,
      endereco_id,
      funcionamento_id,
      entrega_id,
      pagamento_id,
    } = payload.data;

    const empresa = {
      nome,
      telefone,
      whatsapp,
      bio,
      situacao,
      tempo_max,
      tempo_min,
      valor_entrega,
      instagram,
      facebook,
      arquivo_id,
      endereco_id,
      funcionamento_id,
      entrega_id,
      pagamento_id,
    };

    const response = yield call(api.put, `empresas/${id}`, empresa);

    yield put(UpdateEmpresaSuccess(response.data));

    toast.success('Empresa atualizada com sucesso!');
  } catch (err) {
    toast.error('Erro ao atualizar empresa, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export function* updateProduto({ payload }) {
  const { usuarioId } = payload;

  try {
    const empresa = yield call(api.get, `empresa-proprietario/${usuarioId}`);

    yield put(UpdateEmpresaSuccess(empresa.data));
  } catch (err) {
    toast.error('Falha ao atualizar produtos');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_EMPRESA_REQUEST', updateEmpresa),
  takeLatest('@user/UPDATE_PRODUTO_REQUEST', updateProduto),
]);
