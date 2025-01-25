import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { AuthorizationStatus, Comment } from '../../utils/consts';
import { TUserReview } from '../../types/user';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { useMemo } from 'react';

type TOfferReviewsProps = {
  reviews: TUserReview[];
}

export default function OfferReviews({ reviews }: TOfferReviewsProps): JSX.Element {
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const reviewsSorted = useMemo(() => reviews
    .toSorted((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(Comment.MinCount, Comment.MaxCount), [reviews]
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      {reviews && <OfferReviewsList reviewsSorted={reviewsSorted}/>}
      {authStatus === AuthorizationStatus.Auth && <OfferReviewsForm />}
    </section>
  );
}
