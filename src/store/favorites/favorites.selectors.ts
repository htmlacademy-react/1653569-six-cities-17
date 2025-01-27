import { NameSpace } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectFavorites = (state: TState) => state[NameSpace.Favorites].favoritesCards;
export const selectFavoritesLoadingStatus = (state: TState) => state[NameSpace.Favorites].isLoading;
export const selectFavoritesErrorStatus = (state: TState) => state[NameSpace.Favorites].hasError;
