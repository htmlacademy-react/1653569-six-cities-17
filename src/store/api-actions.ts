import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { changeAuthStatus, loadPlaceCards, setError, setLoadingStatus, setUserData } from './action';
import { APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../utils/consts';
import { removeToken, setToken } from '../services/token';
import { store } from './';
import { TPlaceCard } from '../types/place-card';
import { TAuthData, TUserData } from '../types/user';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchPlaceCardsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlaceCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<TPlaceCard[]>(APIRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(loadPlaceCards(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuthStatus(AuthStatus.Auth));
    } catch {
      dispatch(changeAuthStatus(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    setToken(data.token);
    dispatch(setUserData(data));
    dispatch(changeAuthStatus(AuthStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(setUserData(null));
    dispatch(changeAuthStatus(AuthStatus.NoAuth));
  },
);
