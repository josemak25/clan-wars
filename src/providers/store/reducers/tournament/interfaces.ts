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
  tournament_icon?: string;
  registration_fee: string;
  end_date: string | number;
  updated_at: string | number;
  created_at: string | number;
  start_date: string | number;
  winner_participant_id?: string;
  tournament_host: ITournamentHost;
}

export interface ITournamentHost {
  id: string;
  name: string;
  avatar: string;
  created_at: string | number;
  updated_at: string | number;
}

export interface ITournamentState {
  isEmpty: boolean;
  isLoading: boolean;
  data: ITournament[];
  error: Error | null;
  selectedTournament: ITournament | null;
}
