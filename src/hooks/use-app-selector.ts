import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { TState } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
