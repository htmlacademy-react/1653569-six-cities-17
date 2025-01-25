import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
