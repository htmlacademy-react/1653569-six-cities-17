import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchPlacesAction } from '../api-actions';
import { City, NameSpace, SortOption } from '../../utils/consts';
import { TPlacesState } from '../../types/state';
import { TTypeAs } from '../../types/helper';

const initialState: TPlacesState = {
  activeCity: City.Paris,
  activeSort: SortOption.Popular,
  activeCardId: null,
  placeCards: [],
  isLoading: false,
  hasError: false,
};

export const placesSlice = createSlice({
  name: NameSpace.Places,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<TTypeAs<typeof City>>) => {
      state.activeCity = action.payload;
    },
    changeSorting: (state, action: PayloadAction<TTypeAs<typeof SortOption>>) => {
      state.activeSort = action.payload;
    },
    changeCardId: (state, action: PayloadAction<string | null>) => {
      state.activeCardId = action.payload;
    },
    updatePlaceCard (state, action: PayloadAction<string>) {
      const index = state.placeCards.findIndex((card) => card.id === action.payload);
      if (index !== -1) {
        state.placeCards[index].isFavorite = !state.placeCards[index].isFavorite;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlacesAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPlacesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.placeCards = action.payload;
      })
      .addCase(fetchPlacesAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error('Server error. Receiving offers is temporarily unavailable');
      });
  }
});

export const { changeCity, changeSorting, changeCardId, updatePlaceCard } = placesSlice.actions;
