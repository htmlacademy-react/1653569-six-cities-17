import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';
import { AppRoute, AuthStatus, City, SortOption } from '../utils/consts';
import { TUserData } from '../types/user';
import { TTypeAs } from '../types/helper';
import { TOfferCard } from '../types/offer-card';
import { TUserReview } from '../types/user';

export const loadPlaceCards = createAction<TPlaceCard[]>('data/loadPlaceCards');
export const loadPlaceCardsNearby = createAction<TPlaceCard[]>('data/loadPlaceCardsNearby');
export const loadPlaceOffer = createAction<TOfferCard | null>('data/loadPlaceOffer');
export const loadPlaceOfferReviews = createAction<TUserReview[]>('data/loadPlaceOfferReviews');
export const loadPlaceFavorites = createAction<TPlaceCard[]>('data/loadPlaceFavorites');

export const setUserData = createAction<TUserData | null>('user/setUserData');
export const setReviewData = createAction<TUserReview>('user/setReviewData');
export const setFormDisabled = createAction<boolean>('user/setFormDisabled');
export const setPlaceCardsLoading = createAction<boolean>('data/setPlaceCardsLoading');
export const setPlaceOfferLoading = createAction<boolean>('data/setPlaceOfferLoading');
export const setPlaceCardsNearbyLoading = createAction<boolean>('data/setPlaceCardsNearbyLoading');
export const setPlaceOfferReviewsLoading = createAction<boolean>('data/setPlaceOfferReviewsLoading');

export const changeAuthStatus = createAction<TTypeAs<typeof AuthStatus>>('user/changeAuthStatus');
export const changeCity = createAction<TTypeAs<typeof City>>('app/changeActiveCity');
export const changeSorting = createAction<TTypeAs<typeof SortOption>>('app/changeSorting');

export const redirectToRoute = createAction<TTypeAs<typeof AppRoute>>('app/redirectToRoute');
