export interface ITournament {
  id: string;
  title: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
  start_date: Date;
  room_size: number;
  team_size: number;
  price_pool: number;
  cover_image?: string;
  winner_clan_id?: string;
  tournament_icon?: string;
  host_clan: ITournamentClan;
  participates: ITournamentClan[];
}

export interface ITournamentTeam {
  id: string;
  name: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
  player_id: string;
  gender: "male" | "female";
}

export interface ITournamentClan {
  id: string;
  created_at: Date;
  updated_at: Date;
  clan_name: string;
  clan_logo: string;
  team_name: string;
  clan_leader_id: string;
  team: ITournamentTeam[];
  contact_email_address: string;
}

export interface ISessionState {
  isLoading: boolean;
  error: Error | null;
  data: ITournamentClan | null;
}
