import { IconOptions, PointExpression } from 'leaflet';
import { PageType, LogoType, Rating, MarkType, UrlMarker, ICON_OPTIONS } from './consts';
import { TTypeAs } from '../types/helper';

export const capitalizedFirstChar = (element: string) => element.replace(element[0], element[0].toUpperCase());

export const convertRating = (rating: number) => `${Math.round(rating) * Rating.Multiplier}%`;

export const convertDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric'});

export const getIconOptions = (iconUrl: TTypeAs<typeof UrlMarker>): IconOptions => ({
  iconUrl, ...ICON_OPTIONS as unknown as PointExpression,
});

export function getStyles<T extends { className: string[]; width: number[]; height: number[] }>(
  type: TTypeAs<typeof PageType> | TTypeAs<typeof LogoType> | TTypeAs<typeof MarkType>,
  styles: T
) {
  return {
    className: styles.className.find((name) => name === type),
    width: styles.width.find((_, index) => styles.className[index] === type),
    height: styles.height.find((_, index) => styles.className[index] === type),
  };
}
