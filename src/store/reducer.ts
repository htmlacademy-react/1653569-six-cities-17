import { createReducer } from '@reduxjs/toolkit';
import { City } from '../utils/consts';
import { loadPlaceCards, changeActiveCity } from './action';
import offerApiService from '../service/offer-api-service';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';

type TInititialState = {
  activeCity: TTypeAs<typeof City>;
  placeCards: TPlaceCard[];
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  placeCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadPlaceCards, (state) => {
      state.placeCards = offerApiService.getPlaceCards();
    });
});
