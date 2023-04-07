import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITournamentState, ITournament } from "./interfaces";

export const TOURNAMENT_SLICE_NAME = "tournament";

const initialState: ITournamentState = {
  data: [],
  error: null,
  isLoading: false,
  selectedTournament: null,
};

export const { reducer: tournamentReducer, actions: tournamentActions } =
  createSlice({
    initialState,
    name: TOURNAMENT_SLICE_NAME,
    reducers: {
      fetchTournaments: (state, action: PayloadAction<ITournament[]>) => {
        state.data = action.payload;
      },

      setSelectedTournament: (state, action: PayloadAction<ITournament>) => {
        state.selectedTournament = action.payload;
      },
    },
  });
