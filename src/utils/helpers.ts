import { PageType, Setting, CARD_STYLES } from './consts';

export const capitalizedFirstChar = (element: string) => element.replace(element[0], element[0].toUpperCase());

export const convertRating = (rating: number) => `${Math.round(rating) * Setting.RatingCoef}%`;

export const convertDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric'});

export const getPlaceCardStyles = (pageType: string)=> {
  const list: (string | number)[][] = [];
  Object.entries(CARD_STYLES).forEach(([key, value]) => {
    const [main, favorites, offer] = value;
    switch (pageType) {
      case PageType.Main:
        list.push([key, main]);
        break;
      case PageType.Favorites:
        list.push([key, favorites]);
        break;
      case PageType.Offer:
        list.push([key, offer]);
        break;
    }
  });
  return Object.fromEntries(list);
};
