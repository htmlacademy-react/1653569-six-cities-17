import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchOfferAction } from '../api-actions';
import { NameSpace } from '../../utils/consts';
import { TOfferState } from '../../types/state';

const initialState: TOfferState = {
  offerCard: null,
  isLoading: false,
  hasError: false
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    resetOfferCard: (state) => {
      state.offerCard = null;
    },
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

export const { resetOfferCard, updateOfferCard } = offerSlice.actions;
