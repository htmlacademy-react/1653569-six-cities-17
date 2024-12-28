import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeAuthStatus, loadPlaceOffer, loadPlaceOfferReviews, loadPlaceCards, loadPlaceCardsNearby, redirectToRoute, setPlaceOfferReviewsLoading, setPlaceCardsLoading, setPlaceCardsNearbyLoading, setPlaceOfferLoading, setUserData, setReviewData, setFormDisabled } from './action';
import { APIRoute, AppRoute, AuthStatus } from '../utils/consts';
import { removeToken, setToken } from '../services/token';
import { TPlaceCard } from '../types/place-card';
import { TAuthData, TUserData } from '../types/user';
import { TOfferCard } from '../types/offer-card';
import { TUserComment, TUserReview } from '../types/user';
import { TAsyncThunk } from '../types/helper';

export const checkAuthAction = createAsyncThunk<void, undefined, TAsyncThunk>(
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

export const loginAction = createAsyncThunk<void, TAuthData, TAsyncThunk>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
      setToken(data.token);
      dispatch(setUserData(data));
      dispatch(changeAuthStatus(AuthStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(changeAuthStatus(AuthStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(setUserData(null));
    dispatch(changeAuthStatus(AuthStatus.NoAuth));
  },
);

export const fetchPlaceCardsAction = createAsyncThunk<void, undefined, TAsyncThunk>(
  'data/fetchPlaceCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setPlaceCardsLoading(true));
    try {
      const {data} = await api.get<TPlaceCard[]>(APIRoute.Offers);
      dispatch(loadPlaceCards(data));
    } finally {
      dispatch(setPlaceCardsLoading(false));
    }
  },
);

export const fetchPlaceOfferAction = createAsyncThunk<void, string, TAsyncThunk>(
  'data/fetchOfferCard',
  async (id, {dispatch, extra: api}) => {
    dispatch(setPlaceOfferLoading(true));
    try {
      const {data} = await api.get<TOfferCard>(`${APIRoute.Offers}${APIRoute.Main}${id}`);
      dispatch(loadPlaceOffer(data));
    } finally {
      dispatch(setPlaceOfferLoading(false));
    }
  },
);

export const fetchPlaceCardsNearbyAction = createAsyncThunk<void, string, TAsyncThunk>(
  'data/fetchPlaceCardsNearby',
  async (id, {dispatch, extra: api}) => {
    dispatch(setPlaceCardsNearbyLoading(true));
    try {
      const {data} = await api.get<TPlaceCard[]>(`${APIRoute.Offers}${APIRoute.Main}${id}${APIRoute.Nearby}`);
      dispatch(loadPlaceCardsNearby(data));
    } finally {
      dispatch(setPlaceCardsNearbyLoading(false));
    }
  },
);

export const fetchPlaceOfferReviewsAction = createAsyncThunk<void, string, TAsyncThunk>(
  'data/fetchOfferCardReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(setPlaceOfferReviewsLoading(true));
    try {
      const {data} = await api.get<TUserReview[]>(`${APIRoute.Comments}${APIRoute.Main}${id}`);
      dispatch(loadPlaceOfferReviews(data));
    } finally {
      dispatch(setPlaceOfferReviewsLoading(false));
    }
  },
);

export const fetchPlaceOfferCommentAction = createAsyncThunk<void, {id: string; data: TUserComment}, TAsyncThunk>(
  'data/fetchOfferCardComment',
  async ({id, data: {comment, rating}}, {dispatch, extra: api}) => {
    dispatch(setFormDisabled(true));
    try {
      const {data} = await api.post<TUserComment>(`${APIRoute.Comments}${APIRoute.Main}${id}`, {comment, rating});
      dispatch(setReviewData(data as TUserReview));
    } finally {
      dispatch(setFormDisabled(false));
    }
  },
);
