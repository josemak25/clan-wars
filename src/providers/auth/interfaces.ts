export interface ISessionGuest {
  id: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  public_key: string;
  email_address: string;
}

export type ISigninGuest = Pick<ISessionGuest, "email_address" | "password">;

export type ISignupGuest = ISigninGuest & {
  meta: {
    [key: string]: any;
    user_unique_id: string;
  };
};
