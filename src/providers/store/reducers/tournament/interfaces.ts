import { AvatarType } from "../../../../components/icon/interface";

export interface ITournament {
  id: string;
  title: string;
  tags: string[];
  host_id: string;
  team_size: number;
  room_size: number;
  price_pool: number;
  participates: number;
  cover_image?: string;
  winner_clan_id?: string;
  tournament_icon?: string;
  registration_fee: string;
  end_date: string | number;
  updated_at: string | number;
  created_at: string | number;
  start_date: string | number;
  tournament_host: ITournamentHost;
}

export interface ITournamentHost {
  id: string;
  name: string;
  avatar: string;
  created_at: string | number;
  updated_at: string | number;
}

export interface ITournamentTeam {
  id: string;
  player_id: string;
  avatar: AvatarType;
  total_kills: number;
  player_ign: string | null;
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
  contact_email_address: string;
}

export interface ITournamentState {
  isEmpty: boolean;
  isLoading: boolean;
  data: ITournament[];
  error: Error | null;
  selectedTournament: ITournament | null;
}
