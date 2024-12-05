import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { comments } from '../../mocks/comments';
import { TTypeAs } from '../../types/helpers';
import { AuthStatus } from '../../utils/consts';

type TOfferReviewsProps = {
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function OfferReviews({ authStatus }: TOfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

      <OfferReviewsList comments={comments}/>
      {
        authStatus === AuthStatus.Auth &&
          <OfferReviewsForm />
      }
    </section>
  );
}
