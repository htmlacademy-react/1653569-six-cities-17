import { createAction } from '@reduxjs/toolkit';
import { TPlaceCard } from '../types/place-card';
import { TTypeAs } from '../types/helper';
import { City } from '../utils/consts';

export const loadPlaceCards = createAction<TPlaceCard[]>('data/loadPlaceCards');
export const changeActiveCity = createAction<TTypeAs<typeof City>>('app/changeActiveCity');
