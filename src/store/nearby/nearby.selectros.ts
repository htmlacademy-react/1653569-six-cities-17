import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types/state';
import { CardCount, NameSpace } from '../../utils/consts';

export const selectAllNearby = (state: RootState) => state[NameSpace.Nearby].nearbyCards;
export const selectNearbyLoadingStatus = (state: RootState) => state[NameSpace.Nearby].isLoading;
export const selectNearbyErrorStatus = (state: RootState) => state[NameSpace.Nearby].hasError;

export const selectNearby = createSelector([selectAllNearby], (cards) => cards?.slice(CardCount.Min, CardCount.Max)) ?? [];
