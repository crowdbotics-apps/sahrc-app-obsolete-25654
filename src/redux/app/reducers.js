import * as actions from './constants';

const initialState = {
  metrics: {}, 
  isLoading: false,
  profile: {},
  errors: {},
  messages: [],
  userslist: []
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_GET_PROFILE_SUCCESS:
      return { ...state,
        profile: action.payload,
        errors: { Profile: null } };
    case actions.APP_GET_PROFILE_ERROR:
      return { ...state,
        errors: { Profile: action.error } };
    case actions.APP_UPDATE_PROFILE_SUCCESS:
      return { ...state,
        errors: { Profile: null } };
    default:
      return state;
  }
};