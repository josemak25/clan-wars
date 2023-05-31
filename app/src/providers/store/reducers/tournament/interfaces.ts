import { ITournament } from "../../../../../../types";

export * from "../../../../../../types";

export interface ITournamentState {
  isEmpty: boolean;
  isLoading: boolean;
  data: ITournament[];
  error: Error | null;
  selectedTournament: ITournament | null;
}
