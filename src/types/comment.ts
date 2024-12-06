import { TUser } from './user';

export type TCommentSend = {
  comment: string;
  rating: number;
};

export type TComment = TCommentSend & {
  id: string;
  date: string;
  user: TUser;
};
