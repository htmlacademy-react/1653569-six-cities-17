export type TUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type TAuthData = {
  email: string;
  password: string;
}

export type TUser = Omit<TUserData, 'email' | 'token'>
