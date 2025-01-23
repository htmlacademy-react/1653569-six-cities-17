import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { TNearbyState } from '../../types/state';
import { fetchNearbyAction } from '../api-actions';

const initialState: TNearbyState = {
  nearbyCards: [],
  isLoading : false,
  hasError: false,
};

export const nearbySlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
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
      });
  }
});
