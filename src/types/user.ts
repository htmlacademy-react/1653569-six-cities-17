export type TUser ={
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TUserData = TUser & {
  email: string;
  token: string;
};

export type TUserAuth = {
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
