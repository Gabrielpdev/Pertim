import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProfileFailure,
  updateProfileSuccess,
  UpdateEmpresaSuccess,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso!');
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
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

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_EMPRESA_REQUEST', updateEmpresa),
]);
