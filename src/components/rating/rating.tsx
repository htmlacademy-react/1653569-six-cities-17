
import { convertRating } from '../../utils/helpers';
import { RatingType } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';

type TRatingProps = {
  type: TTypeAs<typeof RatingType>;
  rating: number;
}

export default function Rating({ type, rating }: TRatingProps): JSX.Element {
  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: convertRating(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
