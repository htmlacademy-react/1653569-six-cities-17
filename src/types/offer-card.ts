import { TPlaceCard } from './place-card';
import { TUser } from './user';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: string;
  location: TLocation;
};

export type TOfferCard = Omit<TPlaceCard, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
