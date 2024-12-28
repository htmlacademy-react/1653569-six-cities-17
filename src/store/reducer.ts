import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, City, SortOption } from '../utils/consts';
import { loadPlaceCards, changeCity, changeSorting, changeAuthStatus, loadPlaceFavorites, setUserData, loadPlaceOffer, loadPlaceCardsNearby, loadPlaceOfferReviews, setPlaceCardsLoading, setPlaceOfferLoading, setPlaceCardsNearbyLoading, setPlaceOfferReviewsLoading, setReviewData, setFormDisabled } from './action';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';
import { TUserData } from '../types/user';
import { TOfferCard } from '../types/offer-card';
import { TUserReview } from '../types/user';

type TInititialState = {
  activeCity: TTypeAs<typeof City>;
  activeSort: TTypeAs<typeof SortOption>;
  authStatus: TTypeAs<typeof AuthStatus>;
  userData: TUserData | null;
  placeCards: TPlaceCard[];
  placeCardsNearby: TPlaceCard[];
  placeOffer: TOfferCard | null;
  placeOfferReviews: TUserReview[];
  placeFavorites: TPlaceCard[];
  isPlaceCardsLoading: boolean;
  isPlaceCardsNearbyLoading: boolean;
  isPlaceOfferLoading: boolean;
  isPlaceOfferReviewsLoading: boolean;
  isFormDisabled: boolean;
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  activeSort: SortOption.Popular,
  authStatus: AuthStatus.Unknown,
  userData: null,
  placeCards: [],
  placeCardsNearby: [],
  placeOffer: null,
  placeOfferReviews: [],
  placeFavorites: [],
  isPlaceCardsLoading: false,
  isPlaceCardsNearbyLoading: false,
  isPlaceOfferLoading: false,
  isPlaceOfferReviewsLoading: false,
  isFormDisabled: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPlaceCards, (state, action) => {
      state.placeCards = action.payload;
    })
    .addCase(loadPlaceFavorites, (state, action) => {
      state.placeFavorites = action.payload;
    })
    .addCase(loadPlaceOffer, (state, action) => {
      state.placeOffer = action.payload;
    })
    .addCase(loadPlaceCardsNearby, (state, action) => {
      state.placeCardsNearby = action.payload;
    })
    .addCase(loadPlaceOfferReviews, (state, action) => {
      state.placeOfferReviews = action.payload;
    })
    .addCase(setPlaceCardsLoading, (state, action) => {
      state.isPlaceCardsLoading = action.payload;
    })
    .addCase(setPlaceOfferLoading, (state, action) => {
      state.isPlaceOfferLoading = action.payload;
    })
    .addCase(setPlaceCardsNearbyLoading, (state, action) => {
      state.isPlaceCardsNearbyLoading = action.payload;
    })
    .addCase(setPlaceOfferReviewsLoading, (state, action) => {
      state.isPlaceOfferReviewsLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setReviewData, (state, action) => {
      state.placeOfferReviews = [action.payload, ...state.placeOfferReviews];
    })
    .addCase(setFormDisabled, (state, action) => {
      state.isFormDisabled = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSort = action.payload;
    });
});
