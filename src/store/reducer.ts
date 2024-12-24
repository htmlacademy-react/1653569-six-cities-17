import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, City, SortOption } from '../utils/consts';
import { loadPlaceCards, changeCity, changeSorting, changeAuthStatus, loadFavoritesCards, loadAuthUser, setError, setLoadingStatus } from './action';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';
import { TAuthData } from '../types/user';

type TInititialState = {
  activeCity: TTypeAs<typeof City>;
  activeSort: TTypeAs<typeof SortOption>;
  authStatus: TTypeAs<typeof AuthStatus>;
  authUser: TAuthData | null;
  placeCards: TPlaceCard[];
  favoritesCards: TPlaceCard[];
  error: string | null;
  isLoading: boolean;
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  activeSort: SortOption.Popular,
  authStatus: AuthStatus.Unknown,
  authUser: null,
  placeCards: [],
  favoritesCards: [],
  error: null,
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPlaceCards, (state, action) => {
      state.placeCards = action.payload;
    })
    .addCase(loadFavoritesCards, (state, action) => {
      state.favoritesCards = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(loadAuthUser, (state, action) => {
      state.authUser = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});
