
import { convertRating } from '../../utils/helpers';
import { RatingType } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';
import { memo, useMemo } from 'react';

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
    </div>
  );
}

const MemoizedRating = memo(Rating);
export default MemoizedRating;
