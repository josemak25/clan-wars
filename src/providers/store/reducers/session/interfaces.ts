export interface ISessionUser {
  id: string;
  avatar: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  player_id: string;
  email_address: string;
}

export interface ISession {
  issued_at: number;
  expires_in: number;
  expires_at: number;
  access_token: string;
  refresh_token: string;
  user: ISessionUser | null;
}

export type ISignupUser = Pick<
  ISessionUser,
  "email_address" | "password" | "player_id"
>;

export type ISignOutUser = Pick<ISession, "refresh_token">;

export type ISigninUser = Omit<ISignupUser, "player_id">;

export type IForgotPassword = Pick<ISessionUser, "email_address">;

export interface ISessionState {
  isLoading: boolean;
  error: Error | null;
  data: ISession | null;
}
