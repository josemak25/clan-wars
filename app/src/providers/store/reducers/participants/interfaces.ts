import { AvatarType } from "../../../../components/icon/interface";

import {
  ITournamentClan as Clan,
  ITournamentTeam as Team,
} from "../../../../../../types";

export * from "../../../../../../types";

export interface ITournamentTeam extends Team {
  avatar: AvatarType;
}

export interface ITournamentClan extends Clan {
  team: ITournamentTeam[];
  tournament_players: ITournamentTeam[];
}

export interface ITournamentTeamState {
  isEmpty: boolean;
  isLoading: boolean;
  error: Error | null;
  data: ITournamentClan[];
}
