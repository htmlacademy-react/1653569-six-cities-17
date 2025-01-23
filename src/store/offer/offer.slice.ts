import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { TOfferState } from '../../types/state';
import { fetchOfferAction } from '../api-actions';

const initialState: TOfferState = {
  offerCard: null,
  isLoading: false,
  hasError: false
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offerCard = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});
