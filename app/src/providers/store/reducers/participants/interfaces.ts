import { AvatarType } from "../../../../components/icon/interface";

import {
  ITournamentClan,
  ITournamentTeam as Team,
} from "../../../../../../types";

export * from "../../../../../../types";

export interface ITournamentTeam extends Team {
  avatar: AvatarType;
}

export interface ITournamentTeamState {
  isEmpty: boolean;
  isLoading: boolean;
  error: Error | null;
  data: ITournamentClan[];
}
