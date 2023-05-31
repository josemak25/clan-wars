import {
  TypedUseSelectorHook,
  useDispatch as __useDispatch,
  useSelector as __useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "../providers/store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = __useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = __useSelector;
