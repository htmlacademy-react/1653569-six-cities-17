import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { AuthStatus } from '../../utils/consts';
import { TUserReview } from '../../types/user';
import { useAppSelector } from '../../hooks/use-app-selector';

type TOfferReviewsProps = {
  reviews: TUserReview[];
}

export default function OfferReviews({ reviews }: TOfferReviewsProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <OfferReviewsList reviews={reviews}/>
      {
        authStatus === AuthStatus.Auth &&
          <OfferReviewsForm />
      }
    </section>
  );
}
