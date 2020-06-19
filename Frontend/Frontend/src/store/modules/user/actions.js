export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(empresa) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { empresa },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function UpdateEmpresaRequest(data) {
  return {
    type: '@user/UPDATE_EMPRESA_REQUEST',
    payload: { data },
  };
}

export function VincularEmpresaRequest(empresa) {
  return {
    type: '@user/VINCULAR_EMPRESA_REQUEST',
    payload: { empresa },
  };
}

export function VincularEnderecoRequest(endereco) {
  return {
    type: '@user/VINCULAR_ENDERECO_REQUEST',
    payload: { endereco },
  };
}

export function UpdateEmpresaSuccess(empresa) {
  return {
    type: '@user/UPDATE_EMPRESA_SUCCESS',
    payload: { empresa },
  };
}
