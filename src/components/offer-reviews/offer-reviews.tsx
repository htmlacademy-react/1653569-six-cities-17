import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { memo } from 'react';
import { AuthorizationStatus } from '../../utils/consts';
import { TUserReview } from '../../types/user';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { selectReviewsSorted } from '../../store/reviews/reviews.selectors';

type TOfferReviewsProps = {
  reviews: TUserReview[];
}

function OfferReviews({ reviews }: TOfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const reviewsSorted = useAppSelector(selectReviewsSorted);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      {reviews && <OfferReviewsList reviewsSorted={reviewsSorted}/>}
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewsForm />}
    </section>
  );
}

const MemoizedOfferReviews = memo(OfferReviews);
export default MemoizedOfferReviews;
