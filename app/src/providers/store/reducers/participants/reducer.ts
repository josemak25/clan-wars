import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchParticipants } from "../../../../config/network";
import { ITournamentClan, ITournamentTeamState } from "./interfaces";

export const PARTICIPANTS_SLICE_NAME = "tournament_participants";

const initialState: ITournamentTeamState = {
  data: [],
  error: null,
  isEmpty: false,
  isLoading: false,
};

// Fetch tournaments, create the thunk
export const fetchTournamentParticipants = createAsyncThunk(
  `${PARTICIPANTS_SLICE_NAME}/fetchTournamentParticipants`,
  async (tournament_id: string) => {
    const response = await fetchParticipants(tournament_id);

    if (response.error) {
      throw Error(response.error.message);
    }

    return response;
  }
);

export const { reducer: participantsReducer, actions: participantsActions } =
  createSlice({
    initialState,
    name: PARTICIPANTS_SLICE_NAME,
    reducers: {},
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(fetchTournamentParticipants.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchTournamentParticipants.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error as Error;
        })
        .addCase(fetchTournamentParticipants.fulfilled, (state, action) => {
          // Add tournament participates to the state participates array
          state.isLoading = false;
          state.isEmpty = !action.payload.data.length;
          state.data = action.payload.data.map((data) => ({
            ...data,
            team: data.tournament_players,
          })) as ITournamentClan[];
        });
    },
  });
