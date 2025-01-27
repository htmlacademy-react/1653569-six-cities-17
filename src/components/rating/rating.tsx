
import { memo, useMemo } from 'react';
import { convertRating } from '../../utils/helpers';
import { RatingType } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';

type TRatingProps = {
  type: TTypeAs<typeof RatingType>;
  rating: number;
}

function Rating({ type, rating }: TRatingProps): JSX.Element {
  const ratingStyle = useMemo(() => convertRating(rating), [rating]);

  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: ratingStyle }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {type === RatingType.Offer && <span className={`${type}__rating-value rating__value`}>{rating}</span> }
    </div>
  );
}

const MemoizedRating = memo(Rating);
export default MemoizedRating;
