import * as actions from './constants';

export const getProfile = (id) => ({
  type: actions.APP_GET_PROFILE_REQUEST,
  id,
});

export const updateProfile = (profile) => ({
  type: actions.APP_UPDATE_PROFILE_REQUEST,
  profile,
});