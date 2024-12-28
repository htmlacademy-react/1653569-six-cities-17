import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Comment, Rating, RATINGS } from '../../utils/consts';
import { TUserComment } from '../../types/user';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchPlaceOfferCommentAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

const initFormData: TUserComment = {
  rating: Rating.InitState,
  comment: Comment.InitState,
};

export default function OfferReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState(initFormData);
  const offer = useAppSelector((state) => state.placeOffer);
  const isFormDisabled = useAppSelector((state) => state.isFormDisabled);
  const dispatch = useAppDispatch();

  const hasFormValidate = formData.rating > Rating.InitState
    && formData.comment.length >= Comment.MinLength
    && formData.comment.length < Comment.MaxLength;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: evt.target.value
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offer) {
      dispatch(fetchPlaceOfferCommentAction({
        id: offer.id,
        data: formData,
      })).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setFormData(initFormData);
        }
      });
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map(({ value, title }) => (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleRatingChange}
                disabled={isFormDisabled}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleTextareaChange}
        disabled={isFormDisabled}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!hasFormValidate || isFormDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}
