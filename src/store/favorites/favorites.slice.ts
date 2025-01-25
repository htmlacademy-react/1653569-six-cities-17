import { createSlice } from '@reduxjs/toolkit';
import { FavoriteStatus, NameSpace } from '../../utils/consts';
import { changeFavoritesAction, fetchFavoritesAction } from '../api-actions';
import { TFavoritesState } from '../../types/state';
import { toast } from 'react-toastify';

const initialState: TFavoritesState = {
  favoritesCards: [],
  isLoading : false,
  hasError: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    resetFavorites (state) {
      state.favoritesCards = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoritesCards = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Favorite offers are temporarily unavailable');
      })
      .addCase(changeFavoritesAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        switch (action.payload.status) {
          case FavoriteStatus.Add:
            state.favoritesCards.push(action.payload.offer);
            break;
          case FavoriteStatus.Remove:
            state.favoritesCards = state.favoritesCards.filter((item) => item.id !== action.payload.offer.id);
            break;
        }
      })
      .addCase(changeFavoritesAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Failed to add to favorites');
      });
  }
});

export const { resetFavorites } = favoritesSlice.actions;
