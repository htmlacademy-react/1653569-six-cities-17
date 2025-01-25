import { RootState } from '../../types/state';
import { NameSpace } from '../../utils/consts';

export const selectFavorites = (state: RootState) => state[NameSpace.Favorites].favoritesCards;
export const selectFavoritesLoadingStatus = (state: RootState) => state[NameSpace.Favorites].isLoading;
export const selectFavoritesErrorStatus = (state: RootState) => state[NameSpace.Favorites].hasError;
