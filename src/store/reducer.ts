import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, AuthUser, City, SortOption } from '../utils/consts';
import { loadPlaceCards, changeCity, changeSorting, loadAuthStatus, loadFavoritesCards, loadAuthUser } from './action';
import authApiService from '../service/auth-api-service';
import offerApiService from '../service/offer-api-service';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';
import { TAuthUser } from '../types/user';

type TInititialState = {
  activeCity: TTypeAs<typeof City>;
  activeSort: TTypeAs<typeof SortOption>;
  authStatus: TTypeAs<typeof AuthStatus>;
  authUser: TAuthUser;
  placeCards: TPlaceCard[];
  favoritesCards: TPlaceCard[];
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  activeSort: SortOption.Popular,
  authStatus: AuthStatus.Unknown,
  authUser: AuthUser,
  placeCards: [],
  favoritesCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPlaceCards, (state) => {
      state.placeCards = offerApiService.placeCards;
    })
    .addCase(loadFavoritesCards, (state) => {
      state.favoritesCards = offerApiService.favoritesCards;
    })
    .addCase(loadAuthStatus, (state) => {
      state.authStatus = authApiService.authStatus;
    })
    .addCase(loadAuthUser, (state) => {
      state.authUser = authApiService.authUser;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSort = action.payload;
    });
});
