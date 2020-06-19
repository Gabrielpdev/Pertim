import produce from 'immer';

const INITIAL_SATE = {
  profile: null,
  empresa: null,
};

export default function user(state = INITIAL_SATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        if (action.payload.empresa) {
          draft.empresa = action.payload.empresa.data;
        }
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.empresa;
        break;
      }
      case '@user/VINCULAR_EMPRESA_REQUEST': {
        draft.empresa = action.payload.empresa;
        break;
      }
      case '@user/UPDATE_EMPRESA_SUCCESS': {
        draft.empresa = action.payload.empresa;
        break;
      }
      case '@user/VINCULAR_ENDERECO_REQUEST': {
        draft.empresa.endereco.push(action.payload.endereco);
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.empresa = null;
        break;
      }

      default:
    }
  });
}
