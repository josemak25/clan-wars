export interface ITournament {
  id: string;
  title: string;
  tags: string[];
  team_size: number;
  room_size: number;
  price_pool: number;
  cover_image?: string;
  winner_clan_id?: string;
  tournament_icon?: string;
  host_clan: ITournamentClan;
  updated_at: string | number;
  created_at: string | number;
  start_date: string | number;
  participates: ITournamentClan[];
}

export interface ITournamentTeam {
  id: string;
  avatar: string;
  player_id: string;
  player_ign: string;
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
  contact_email_address: string;
}

export interface ITournamentState {
  isLoading: boolean;
  error: Error | null;
  data: ITournament[];
  selectedTournament: ITournament | null;
}
