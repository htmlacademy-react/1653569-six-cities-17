import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { FavoriteStatus, NameSpace } from '../../utils/consts';
import { changeFavoritesAction, fetchFavoritesAction } from '../api-actions';
import { TFavoritesState } from '../../types/state';

const initialState: TFavoritesState = {
  favoritesCards: [],
  isLoading : false,
  hasError: false,
  isLoadingChange : false,
  hasErrorChange: false,
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
        state.isLoadingChange = true;
        state.hasErrorChange = false;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action) => {
        state.isLoadingChange = false;
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
        state.isLoadingChange = false;
        state.hasErrorChange = true;
        toast.error('Failed to add to favorites');
      });
  }
});

export const { resetFavorites } = favoritesSlice.actions;
