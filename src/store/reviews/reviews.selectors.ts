import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, Comment } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectReviews = (state: TState) => state[NameSpace.Reviews].reviews;
export const selectReviewsLoadingStatus = (state: TState) => state[NameSpace.Reviews].isLoading;
export const selectReviewsErrorStatus = (state: TState) => state[NameSpace.Reviews].hasError;
export const selectSubmitCommentStatus = (state: TState) => state[NameSpace.Reviews].isSubmitComment;
export const selectSubmitErrorStatus = (state: TState) => state[NameSpace.Reviews].hasSubmitCommentError;

export const selectReviewsSorted = createSelector(
  [selectReviews],
  (reviews) => reviews
    .toSorted((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(Comment.MinCount, Comment.MaxCount));
