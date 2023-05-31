export interface ITournamentTeam {
  id: string;
  kills: number;
  avatar: string;
  player_id: string;
  player_ign: string;
  participant_id: string;
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
  tournament_id: string;
  email_address: string;
  clan_leader_id: string;
  team: ITournamentTeam[];
  updated_at: string | number;
  created_at: string | number;
  tournament_players: ITournamentTeam[];
}

export interface ITournamentHost {
  id: string;
  name: string;
  avatar: string;
  created_at: string | number;
  updated_at: string | number;
}

export interface ITournamentPaymentReceipt {
  id: string;
  tournament_id: string;
  payment_reference: string;
  created_at: string | number;
  updated_at: string | number;
  tournament_participant: string;
}

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
