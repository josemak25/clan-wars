import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ITournamentState, ITournament } from "./interfaces";
import { fetchTournaments } from "../../../../config/network";

export const TOURNAMENT_SLICE_NAME = "tournament";

const initialState: ITournamentState = {
  data: [],
  error: null,
  isLoading: false,
  selectedTournament: null,
};

// Fetch tournaments, create the thunk
export const fetchAllTournament = createAsyncThunk(
  `${TOURNAMENT_SLICE_NAME}/fetchAllTournament`,
  async () => {
    const response = await fetchTournaments();
    return response;
  }
);

export const { reducer: tournamentReducer, actions: tournamentActions } =
  createSlice({
    initialState,
    name: TOURNAMENT_SLICE_NAME,
    reducers: {
      setSelectedTournament: (state, action: PayloadAction<ITournament>) => {
        state.selectedTournament = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(fetchAllTournament.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchAllTournament.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
        })
        .addCase(fetchAllTournament.fulfilled, (state, action) => {
          // Add tournament to the state tournament array
          state.isLoading = false;
          const tournaments = action.payload.data?.map(({}) => ({}));
          state.data = state.data.concat(action.payload.data || []);
        });
    },
  });
