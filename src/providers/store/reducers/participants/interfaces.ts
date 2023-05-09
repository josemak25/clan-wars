import { AvatarType } from "../../../../components/icon/interface";

export interface ITournamentTeam {
  id: string;
  player_id: string;
  player_ign: string;
  avatar: AvatarType;
  total_kills: number;
  created_at: string | number;
  updated_at: string | number;
}

export interface ITournamentClan {
  id: string;
  clan_name: string;
  clan_logo: string;
  team_name: string;
  clan_leader_id: string;
  team: ITournamentTeam[];
  updated_at: string | number;
  created_at: string | number;
  contact_phone_number: string;
  contact_email_address: string;
}

export interface ITournamentTeamState {
  isEmpty: boolean;
  isLoading: boolean;
  error: Error | null;
  data: ITournamentClan[];
}
