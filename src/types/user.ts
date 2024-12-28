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

export type TUserComment = {
  comment: string;
  rating: number;
};

export type TUserReview = TUserComment & {
  id: string;
  date: string;
  user: TUser;
};

export type TUser = Omit<TUserData, 'email' | 'token'>
