import { all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Alert } from 'react-native';
import * as actions from './constants';
import { BASE_URL, request } from '../../utils/http';
import { sagasRunner } from '../../utils/redux';

function getProfile () {
  return request.get('/api/v1/users/me/');
}

function updateProfile ({ profile, token }) {
  const profileKeys = Object.keys(profile)
  const data = new FormData();
  profileKeys.forEach((k) => {
    data.append(k, profile[k]);
  })

  return axios({
    method: 'patch',
    url: `${BASE_URL}/api/v1/users/${profile.id}/`,
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'multipart/form-data'
    },
    data,
  });
}
function handleGetProfile ({ id }) {
  return sagasRunner({
    successType: actions.APP_GET_PROFILE_SUCCESS,
    errorType: actions.APP_GET_PROFILE_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get profile data.',
    callFunc: getProfile,
    alertError: true,
    callData: { id },
    isProfile: true,
  });
}

function handleUpdateProfile ({ profile }) {
  return sagasRunner({
    successType: actions.APP_UPDATE_PROFILE_SUCCESS,
    errorType: actions.APP_UPDATE_PROFILE_ERROR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Something went wrong. Please try again.',
    updateType: actions.APP_GET_PROFILE_REQUEST,
    alertError: true,
    sendToken: true,
    callFunc: updateProfile,
    callData: { profile },
    onSuccess: () => Alert.alert('Successfully updated')
  });
}


export default all([
  takeLatest(actions.APP_GET_PROFILE_REQUEST, handleGetProfile),
  takeLatest(actions.APP_UPDATE_PROFILE_REQUEST, handleUpdateProfile),

 
]);