import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type TTypeAs<T> = T[keyof T];

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
