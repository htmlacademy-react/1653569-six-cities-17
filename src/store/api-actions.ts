import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { changeAuthStatus, loadPlaceCards, redirectToRoute, setLoadingStatus, setUserData } from './action';
import { APIRoute, AppRoute, AuthStatus } from '../utils/consts';
import { removeToken, setToken } from '../services/token';
import { TPlaceCard } from '../types/place-card';
import { TAuthData, TUserData } from '../types/user';

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
    dispatch(redirectToRoute(AppRoute.Main));
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
