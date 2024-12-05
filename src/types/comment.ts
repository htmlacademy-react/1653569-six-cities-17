import { TUser } from './user';

export type TComment = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};
