import { Link } from 'react-router-dom';
import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import { capitalizedFirstChar, getStyles } from '../../utils/helpers';
import {AppRoute, MARK_STYLES, MarkType, PageType, RatingType} from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeCardId } from '../../store/places/places.slice';
import { memo, useMemo } from 'react';

type TPlaceCardProps = {
  place: TPlaceCard;
  markType: TTypeAs<typeof MarkType>;
  pageType: TTypeAs<typeof PageType>;
  className?: string;
  width?: number;
  height?: number;
}

function PlaceCard({ place, markType, pageType, className, width, height }: TPlaceCardProps): JSX.Element {
  const { id, title, type, price, isPremium, isFavorite, rating, previewImage } = place;
  const isMainPage = pageType === PageType.Main;
  const markStyle = useMemo(() => getStyles(markType, MARK_STYLES), [markType]);
  const cardName = useMemo(() => capitalizedFirstChar(title), [title]);
  const cardType = useMemo(() => capitalizedFirstChar(type), [type]);
  const dispatch = useAppDispatch();

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => isMainPage ? dispatch(changeCardId(id)) : null}
      onMouseLeave={() => isMainPage ? dispatch(changeCardId(null)) : null}
    >

      {isPremium && <PremiumMark {...markStyle} />}

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
            offer={place}
            isFavorite={isFavorite}
            {...markStyle}
          />
        </div>

        <Rating
          type={RatingType.PlaceCard}
          rating={rating}
        />

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{cardName}</Link>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>
  );
}

const MemoizedPlaceCard = memo(PlaceCard);
export default MemoizedPlaceCard;
