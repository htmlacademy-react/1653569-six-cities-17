import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, City, SortOption } from '../utils/consts';
import { loadPlaceCards, changeCity, changeSorting, changeAuthStatus, loadFavoritesCards, setLoadingStatus, setUserData } from './action';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';
import { TUserData } from '../types/user';

type TInititialState = {
  activeCity: TTypeAs<typeof City>;
  activeSort: TTypeAs<typeof SortOption>;
  authStatus: TTypeAs<typeof AuthStatus>;
  userData: TUserData | null;
  placeCards: TPlaceCard[];
  favoritesCards: TPlaceCard[];
  isLoading: boolean;
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  activeSort: SortOption.Popular,
  authStatus: AuthStatus.Unknown,
  userData: null,
  placeCards: [],
  favoritesCards: [],
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
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});
