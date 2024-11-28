import { TPlaceCard } from '../../types/place-card';
import { capitalizedFirstChar, convertRating } from '../../utils/helpers';

type TPlaceCardProps = {
  place: TPlaceCard;
  cardClassName?: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function PlaceCard({ place, cardClassName, imageClassName, imageWidth, imageHeight }: TPlaceCardProps): JSX.Element {
  const { title, type, price, isPremium, isFavorite, rating, previewImage } = place;

  return (
    <article className={`${cardClassName} place-card`}>
      {
        isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }

      <div className={`${imageClassName} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt={`Place: ${title}`}
          />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
          </button>
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
