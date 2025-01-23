import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/consts';
import { userSlice } from './user/user.slice';
import { offerSlice } from './offer/offer.slice';
import { placesSlice } from './places/places.slice';
import { reviewsSlice } from './reviews/reviews.slice';
import { nearbySlice } from './nearby/nearby.slice';
import { favoritesSlice } from './favorites/favorites.slice';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Places]: placesSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Nearby]: nearbySlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
