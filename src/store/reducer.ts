import { createReducer } from '@reduxjs/toolkit';
import { City } from '../utils/consts';
import { getPlaceCards, setActiveCity } from './action';
import offerApiService from '../service/offer-api-service';
import { TPlaceCard } from '../types/place-card';

type TInititialState = {
  activeCity: string;
  placeCards: TPlaceCard[];
}

const initialState: TInititialState = {
  activeCity: City.Paris,
  placeCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getPlaceCards, (state) => {
      state.placeCards = offerApiService.getPlaceCards();
    });
});
