
// Use `TypedUseSelectorHook` to create a typed version of `useSelector`
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer.ts';
import { AppDispatch } from '../main.tsx';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// Use `useDispatch` directly to get the correctly typed dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>();
