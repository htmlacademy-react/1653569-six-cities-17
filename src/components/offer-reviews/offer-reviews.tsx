import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../../components/offer-reviews-form/offer-reviews-form';
import { comments } from '../../mocks/comments';
import { AuthStatus } from '../../utils/consts';
import { TCommentSend } from '../../types/comment';
import { useAppSelector } from '../../hooks/use-app-selector';

type TOfferReviewsProps = {
  onComment: (comment: TCommentSend) => void;
}

export default function OfferReviews({ onComment }: TOfferReviewsProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

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
