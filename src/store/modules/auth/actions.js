export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user, empresa) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, empresa },
  };
}

export function signUpRequest(nome, email, password, celular) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { nome, email, password, celular },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
