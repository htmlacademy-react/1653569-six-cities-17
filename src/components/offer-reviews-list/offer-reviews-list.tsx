import Rating from '../rating/rating';
import { RatingType } from '../../utils/consts';
import { convertDate } from '../../utils/helpers';
import { TComment } from '../../types/comment';

type TOfferReviewsListProps = {
  comments: TComment[];
}

export default function OfferReviewsList({ comments }: TOfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map(({ id, user, rating, comment, date }) => (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>

            <div className="reviews__info">
              <Rating
                type={RatingType.Reviews}
                rating={rating}
              />

              <p className="reviews__text">
                {comment}
              </p>
              <time className="reviews__time" dateTime={date}>{convertDate(date)}</time>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
