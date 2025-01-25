import { AxiosInstance } from 'axios';
import { store } from '../store/index';
import { AuthorizationStatus, City, SortOption } from '../utils/consts';
import { TOfferCard } from './offer-card';
import { TPlaceCard } from './place-card';
import { TUserData, TUserReview } from './user';
import { TTypeAs } from './helper';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export type TUserState = {
  userData: TUserData | null;
  authorizationStatus: TTypeAs<typeof AuthorizationStatus>;
};

export type TPlacesState = {
  activeCity: TTypeAs<typeof City>;
  activeSort: TTypeAs<typeof SortOption>;
  activeCardId: string | null;
  placeCards: TPlaceCard[];
  isLoading: boolean;
  hasError: boolean;
};

export type TOfferState = {
  offerCard: TOfferCard | null;
  isLoading: boolean;
  hasError: boolean;
};

export type TNearbyState = {
  nearbyCards: TPlaceCard[];
  isLoading: boolean;
  hasError: boolean;
};

export type TReviewsState = {
  reviews: TUserReview[];
  isLoading: boolean;
  hasError: boolean;
  isSubmitComment: boolean;
  hasSubmitCommentError: boolean;
}

export type TFavoritesState = {
  favoritesCards: TPlaceCard[];
  isLoading: boolean;
  hasError: boolean;
}
