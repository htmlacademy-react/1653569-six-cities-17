import { createSelector } from '@reduxjs/toolkit';
import { CardCount, NameSpace } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectAllNearbyCards = (state: TState) => state[NameSpace.Nearby].nearbyCards;
export const selectNearbyLoadingStatus = (state: TState) => state[NameSpace.Nearby].isLoading;
export const selectNearbyErrorStatus = (state: TState) => state[NameSpace.Nearby].hasError;

export const selectNearbyCards = createSelector([selectAllNearbyCards], (cards) => cards.slice(CardCount.Min, CardCount.Max));
