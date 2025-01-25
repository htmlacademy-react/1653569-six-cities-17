import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../utils/consts';
import { TTypeAs } from '../types/helper';

export const redirectToRoute = createAction<TTypeAs<typeof AppRoute>>('app/redirectToRoute');
