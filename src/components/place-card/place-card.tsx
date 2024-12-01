import { Link } from 'react-router-dom';
import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';
import { capitalizedFirstChar, convertRating, getMarkStyles } from '../../utils/helpers';
import { AppRoute, MarkType } from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helpers';

type TPlaceCardProps = {
  place: TPlaceCard;
  markType: TTypeAs<typeof MarkType>;
  className?: string;
  width?: number;
  height?: number;
}

export default function PlaceCard({ place, markType, className, width, height }: TPlaceCardProps): JSX.Element {
  const { id, title, type, price, isPremium, isFavorite, rating, previewImage } = place;

  return (
    <article className={`${className}__card place-card`}>
      {isPremium && <PremiumMark {...getMarkStyles(markType)} />}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt={`Place: ${title}`}
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark
            isFavorite={isFavorite}
            {...getMarkStyles(markType)}
          />
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a href="#">{capitalizedFirstChar(title)}</a>
        </h2>
        <p className="place-card__type">{capitalizedFirstChar(type)}</p>
      </div>
    </article>
  );
}
