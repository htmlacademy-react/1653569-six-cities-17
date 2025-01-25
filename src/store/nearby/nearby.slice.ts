import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { TNearbyState } from '../../types/state';
import { fetchNearbyAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: TNearbyState = {
  nearbyCards: [],
  isLoading : false,
  hasError: false,
};

export const nearbySlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    updateNearbyCards (state, action: PayloadAction<string>) {
      const index = state.nearbyCards.findIndex((card) => card.id === action.payload);
      if (index !== -1) {
        state.nearbyCards[index].isFavorite = !state.nearbyCards[index].isFavorite;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nearbyCards = action.payload;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Could not get offers nearby');
      });
  }
});

export const { updateNearbyCards } = nearbySlice.actions;
