import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Comment, Rating, RATINGS } from '../../utils/consts';
import { TCommentSend } from '../../types/comment';

const initFormData: TCommentSend = {
  rating: Rating.InitState,
  comment: Comment.InitState,
};

type TOfferReviewForm = {
  onComment: (comment: TCommentSend) => void;
}

export default function OfferReviewsForm({ onComment }: TOfferReviewForm): JSX.Element {
  const [formData, setFormData] = useState(initFormData);
  const isDisabledSubmit = formData.rating > Rating.InitState
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
    onComment(formData);
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
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isDisabledSubmit}
        >Submit
        </button>
      </div>
    </form>
  );
}
