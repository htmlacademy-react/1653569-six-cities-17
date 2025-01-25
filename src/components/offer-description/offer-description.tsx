import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import { MARK_STYLES, MarkType, RatingType } from '../../utils/consts';
import { capitalizedFirstChar, getStyles } from '../../utils/helpers';
import { TOfferCard } from '../../types/offer-card';
import { memo, useMemo } from 'react';

type TOfferDescription = {
  offer: TOfferCard;
}

function OfferDescription({ offer }: TOfferDescription): JSX.Element {
  const { isPremium, title, isFavorite, rating, goods, type, bedrooms, maxAdults, price, host, description} = offer;
  const { isPro, name, avatarUrl } = host;
  const markStyle = useMemo(() => getStyles(MarkType.Medium, MARK_STYLES), []);
  const typeName = useMemo(() => capitalizedFirstChar(type), [type]);

  return (
    <>
      {isPremium && <PremiumMark {...markStyle} />}

      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>

        <Bookmark
          offer={offer}
          isFavorite={isFavorite}
          {...markStyle}
        />
      </div>

      <Rating
        type={RatingType.Offer}
        rating={rating}
      />

      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {typeName}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedroom{bedrooms > 1 && 's'}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} adult{maxAdults > 1 && 's'}
        </li>
      </ul>

      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>

      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {
            goods.map((item) => (
              <li className="offer__inside-item" key={item}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>

        <div className="offer__host-user user">
          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
            <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="offer__user-name">
            {name}
          </span>
          {
            isPro &&
              <span className="offer__user-status">
                Pro
              </span>
          }
        </div>

        <div className="offer__description">
          <p className="offer__text">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

const MemoizedOfferDescription = memo(OfferDescription);
export default MemoizedOfferDescription;
