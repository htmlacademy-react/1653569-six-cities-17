import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { TOfferState } from '../../types/state';
import { fetchOfferAction } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: TOfferState = {
  offerCard: null,
  isLoading: false,
  hasError: false
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    updateOfferCard (state, action: PayloadAction<string | null>) {
      if (state?.offerCard?.id === action.payload) {
        state.offerCard.isFavorite = !state.offerCard.isFavorite;
      }
    }
  },
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
        toast.error('The selected offer is temporarily unavailable');
      });
  }
});

export const { updateOfferCard } = offerSlice.actions;
