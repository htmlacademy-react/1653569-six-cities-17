import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { fetchFavoritesAction } from '../api-actions';
import { TFavoritesState } from '../../types/state';

const initialState: TFavoritesState = {
  favoritesCards: [],
  isLoading : false,
  hasError: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
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
      });
  }
});
