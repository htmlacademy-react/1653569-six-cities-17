import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types/state';
import { NameSpace, SortOption } from '../../utils/consts';

export const selectPlaces = (state: RootState) => state[NameSpace.Places].placeCards;
export const selectPlacesLoadingStatus = (state: RootState) => state[NameSpace.Places].isLoading;
export const selectPlacesErrorStatus = (state: RootState) => state[NameSpace.Places].hasError;
export const selectActiveCity = (state: RootState) => state[NameSpace.Places].activeCity;
export const selectActiveSort = (state: RootState) => state[NameSpace.Places].activeSort;
export const selectActiveCardId = (state: RootState) => state[NameSpace.Places].activeCardId;

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
