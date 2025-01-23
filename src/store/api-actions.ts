import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../utils/consts';
import { removeToken, setToken } from '../services/token';
import { TPlaceCard } from '../types/place-card';
import { TUserAuth, TUserData } from '../types/user';
import { TOfferCard } from '../types/offer-card';
import { TUserComment, TUserReview } from '../types/user';
import { TAsyncThunk } from '../types/state';

const createAppAsyncThunk = createAsyncThunk.withTypes<TAsyncThunk>();

export const checkAuthAction = createAppAsyncThunk<TUserData, undefined>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<TUserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAppAsyncThunk<TUserData, TUserAuth>(
  `${NameSpace.User}/login`,
  async ({email, password}, {extra: api}) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, {email, password});
    setToken(data.token);
    return data;
  },
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
  },
);

export const fetchPlacesAction = createAppAsyncThunk<TPlaceCard[], undefined>(
  `${NameSpace.Places}/fetchPlaces`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<TPlaceCard[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAppAsyncThunk<TOfferCard, string>(
  `${NameSpace.Offer}/fetchOffer`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TOfferCard>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyAction = createAppAsyncThunk<TPlaceCard[], string>(
  `${NameSpace.Nearby}/fetchNearby`,
  async (id, {extra: api}) => {
    const { data } = await api.get<TPlaceCard[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchReviewsAction = createAppAsyncThunk<TUserReview[], string>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (id, {extra: api}) => {
    const { data } = await api.get<TUserReview[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const postCommentAction = createAppAsyncThunk<TUserComment, {id: string; data: TUserComment}>(
  `${NameSpace.Reviews}/postComment`,
  async ({id, data: {comment, rating}}, {extra: api}) => {
    const { data } = await api.post<TUserComment>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  },
);

export const fetchFavoritesAction = createAppAsyncThunk<TPlaceCard[], undefined>(
  `${NameSpace.Favorites}/fetchFavorite`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<TPlaceCard[]>(APIRoute.Favorites);
    return data;
  },
);
