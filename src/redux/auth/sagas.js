import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_ERROR,
  AUTH_SIGNUP_REQUEST,
  AUTH_PASSWORD_RECOVER_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_PASSWORD_RECOVER_SUCCESS,
  AUTH_PASSWORD_RECOVER_ERROR,
  AUTH_LOGOUT,

} from './constants';
import { request, addTokenToHttp } from '../../utils/http';
import StorageUtils from '../../utils/storage';
import { navigate } from '../../Navigation';
import { Alert } from 'react-native';
import { getProfile } from '../app/actions';
import { APP_CLEAR_STATE } from '../app/constants';


function sendLogin ({ email, password }) {
  return request.post('/api/v1/login/', {
    email,
    password

  });
}
function logout () {
  return request.get('/api/v1/logout/') 
}
function sendSignUp ({ data }) {
  return request.post(
    '/api/v1/signup/', 
    data
  );
}

function sendPasswordRecovery ({ email }) {
  // there is no reset password endpoint in backend, it's just a fake url
  return request.post('/rest-auth/password/reset/', {
    email,
  });
}

function *handleLogin (action) {
  const {
    email, password,
  } = action;
  
  try {
    const { status, data } = yield call(sendLogin, { 
      email,
      password,
    });
    console.log('status :>> ', status);
    console.log('data :>> ', data);

    if (status === 200) {
      yield put({
        type: AUTH_LOGIN_SUCCESS,
        accessToken: data.token,
        user: data.user,
      });

      StorageUtils.setAccessToken(data.token);
      StorageUtils.setUser(data.user);
      addTokenToHttp(data.token);
      yield put(getProfile())
    } else {
      yield put({
        type: AUTH_LOGIN_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    console.log('error :>> ', error);
    console.log('error.response :>> ', error.response);
    yield put({
      type: AUTH_LOGIN_ERROR,
      error: 'Can\'t sign in with provided credentials',
    });
    Alert.alert('Can\'t sign in with provided credentials')
  }
}

function *handleSignUp (action) {
  const data = action;

  try {
    const { status, data } = yield call(sendSignUp, data);
    console.log('status :>> ', status);
    console.log('data :>> ', data);

    if (status === 201) {
      yield put({
        type: AUTH_SIGNUP_SUCCESS,
      });

      const loginInfo = yield call(sendLogin, data.email);

      if (loginInfo.status === 200) {
        yield put({
          type: AUTH_LOGIN_SUCCESS,
          accessToken: loginInfo.data.token,
          user: loginInfo.data.user,
        });

        StorageUtils.setAccessToken(loginInfo.data.token);
        StorageUtils.setUser(loginInfo.data.user);
        addTokenToHttp(loginInfo.data.token);
        yield put(getProfile())
        
      }
    } else {
      yield put({
        type: AUTH_SIGNUP_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    console.log('error.response :>> ', error.response);
    console.log('error :>> ', error);
    yield put({
      type: AUTH_SIGNUP_ERROR,
      error: error.response?.data?.detail || 'Can\'t sign up with provided credentials',
    });
    Alert.alert('Can\'t sign up with provided credentials')
  }
}


function *handlePasswordRecovery (action) {
  const { email } = action;

  try {
    const { status, data } = yield call(sendPasswordRecovery, { email });

    if (status === 200) {
      yield put({
        type: AUTH_PASSWORD_RECOVER_SUCCESS,
        email,
      });

      Alert.alert(data.detail, '', [
        {
          text: 'OK',
          onPress: () => {
          // you can change the navigate for navigateAndResetStack to go to a protected route
            navigate('Login');
          }
        }
      ])

    } else {
      yield put({
        type: AUTH_PASSWORD_RECOVER_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) { 
    yield put({
      type: AUTH_PASSWORD_RECOVER_ERROR,
      error: 'Can\'t recover password with provided email',
    });
  }
}


function *handleLogout () {
  try {
    StorageUtils.removeAccessToken();
    StorageUtils.removeUser();
    addTokenToHttp('');
    yield put({
      type: APP_CLEAR_STATE
    })
    yield call(logout);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default all([
  takeLatest(AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
  takeLatest(AUTH_LOGOUT, handleLogout),
 
]);