import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';
import { AppRoute, AuthStatus, City, SortOption } from '../utils/consts';
import { TUserData } from '../types/user';
import { TTypeAs } from '../types/helper';

export const loadPlaceCards = createAction<TPlaceCard[]>('data/loadPlaceCards');
export const loadFavoritesCards = createAction<TPlaceCard[]>('data/loadFavoritesCards');
export const setUserData = createAction<TUserData | null>('user/setUserData');
export const changeAuthStatus = createAction<TTypeAs<typeof AuthStatus>>('user/changeAuthStatus');
export const changeCity = createAction<TTypeAs<typeof City>>('app/changeActiveCity');
export const changeSorting = createAction<TTypeAs<typeof SortOption>>('app/changeSorting');
export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');
export const redirectToRoute = createAction<TTypeAs<typeof AppRoute>>('app/redirectToRoute');
