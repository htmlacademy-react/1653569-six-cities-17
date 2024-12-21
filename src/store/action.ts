import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';
import { AuthStatus, City, SortOption } from '../utils/consts';
import { TAuthUser } from '../types/user';
import { TTypeAs } from '../types/helper';

export const loadPlaceCards = createAction<TPlaceCard[]>('data/loadPlaceCards');
export const loadFavoritesCards = createAction<TPlaceCard[]>('data/loadFavoritesCards');
export const loadAuthStatus = createAction<TTypeAs<typeof AuthStatus>>('data/loadAuthStatus');
export const loadAuthUser = createAction<TAuthUser>('data/loadAuthUser');
export const changeCity = createAction<TTypeAs<typeof City>>('app/changeActiveCity');
export const changeSorting = createAction<TTypeAs<typeof SortOption>>('app/changeSorting');
