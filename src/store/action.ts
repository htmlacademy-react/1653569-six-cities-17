import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';

export const setActiveCity = createAction<string>('app/setActiveCity');
export const getPlaceCards = createAction<TPlaceCard[] | undefined>('app/getPlaceCards');
