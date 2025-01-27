import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, SortOption } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectPlaces = (state: TState) => state[NameSpace.Places].placeCards;
export const selectPlacesLoadingStatus = (state: TState) => state[NameSpace.Places].isLoading;
export const selectPlacesErrorStatus = (state: TState) => state[NameSpace.Places].hasError;
export const selectActiveCity = (state: TState) => state[NameSpace.Places].activeCity;
export const selectActiveSort = (state: TState) => state[NameSpace.Places].activeSort;
export const selectActiveCardId = (state: TState) => state[NameSpace.Places].activeCardId;

export const selectPlacesByCity = createSelector(
  [selectPlaces, selectActiveCity],
  (places, city) => places.filter((place) => place.city.name === city)
);

export const selectSortedPlaces = createSelector(
  [selectPlacesByCity, selectActiveSort],
  (places, option) => {
    switch (option) {
      case SortOption.PriceLowToHigh:
        return places.toSorted((placeA, placeB) => placeA.price - placeB.price);
      case SortOption.PriceHighToLow:
        return places.toSorted((placeA, placeB) => placeB.price - placeA.price);
      case SortOption.TopRatedFirst:
        return places.toSorted((placeA, placeB) => placeB.rating - placeA.rating);
      default:
        return places;
    }
  }
);
