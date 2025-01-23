import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, NameSpace, SortOption } from '../../utils/consts';
import { TPlacesState } from '../../types/state';
import { TTypeAs } from '../../types/helper';
import { fetchPlacesAction } from '../api-actions';

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
      });
  }
});

export const { changeCity, changeSorting, changeCardId } = placesSlice.actions;
