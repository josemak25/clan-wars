import { AvatarType } from "../../../../components/icon/interface";

export interface ITournamentTeam {
  id: string;
  kills: number;
  player_id: string;
  player_ign: string;
  avatar: AvatarType;
  is_team_leader: boolean;
  created_at: string | number;
  updated_at: string | number;
}

export interface ITournamentClan {
  id: string;
  clan_name: string;
  clan_logo: string;
  team_name: string;
  phone_number: string;
  email_address: string;
  clan_leader_id: string;
  team: ITournamentTeam[];
  updated_at: string | number;
  created_at: string | number;
  tournament_players: ITournamentTeam[];
}

export interface ITournamentTeamState {
  isEmpty: boolean;
  isLoading: boolean;
  error: Error | null;
  data: ITournamentClan[];
}
