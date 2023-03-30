import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISessionState, ISession } from "./interfaces";

export const SESSION_SLICE_NAME = "session";

const initialState: ISessionState = {
  data: null,
  error: null,
  isLoading: false,
};

export const { reducer: sessionReducer, actions: sessionActions } = createSlice(
  {
    initialState,
    name: SESSION_SLICE_NAME,
    reducers: {
      signUser: (state, action: PayloadAction<ISession>) => {
        state.data = action.payload;
      },

      signOutUser: (state) => {
        state = initialState;
      },
    },
  }
);
