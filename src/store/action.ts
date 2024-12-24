import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';
import { AuthStatus, City, SortOption } from '../utils/consts';
import { TAuthData } from '../types/user';
import { TTypeAs } from '../types/helper';

export const loadPlaceCards = createAction<TPlaceCard[]>('data/loadPlaceCards');
export const loadFavoritesCards = createAction<TPlaceCard[]>('data/loadFavoritesCards');
export const loadAuthUser = createAction<TAuthData | null>('user/loadAuthUser');
export const changeAuthStatus = createAction<TTypeAs<typeof AuthStatus>>('user/changeAuthStatus');
export const changeCity = createAction<TTypeAs<typeof City>>('app/changeActiveCity');
export const changeSorting = createAction<TTypeAs<typeof SortOption>>('app/changeSorting');
export const setError = createAction<string | null>('app/setError');
export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');
