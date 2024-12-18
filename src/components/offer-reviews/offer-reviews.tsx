import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { comments } from '../../mocks/comments';
import { TTypeAs } from '../../types/helper';
import { AuthStatus } from '../../utils/consts';
import { TCommentSend } from '../../types/comment';

type TOfferReviewsProps = {
  authStatus: TTypeAs<typeof AuthStatus>;
  onComment: (comment: TCommentSend) => void;
}

export default function OfferReviews({ authStatus, onComment }: TOfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

      <OfferReviewsList comments={comments}/>
      {
        authStatus === AuthStatus.Auth &&
          <OfferReviewsForm onComment={onComment}/>
      }
    </section>
  );
}
