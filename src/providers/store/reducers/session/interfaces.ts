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
  clan_logo: string;
  created_at: Date;
  updated_at: Date;
  clan_name: string;
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
