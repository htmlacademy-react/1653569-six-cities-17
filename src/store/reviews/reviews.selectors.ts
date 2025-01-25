import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types/state';
import { NameSpace, Comment } from '../../utils/consts';

export const selectReviews = (state: RootState) => state[NameSpace.Reviews].reviews;
export const selectReviewsLoadingStatus = (state: RootState) => state[NameSpace.Reviews].isLoading;
export const selectReviewsErrorStatus = (state: RootState) => state[NameSpace.Reviews].hasError;
export const selectSubmitCommentStatus = (state: RootState) => state[NameSpace.Reviews].isSubmitComment;
export const selectSubmitErrorStatus = (state: RootState) => state[NameSpace.Reviews].hasSubmitCommentError;

export const selectReviewsSorted = createSelector(
  [selectReviews],
  (reviews) => reviews
    .toSorted((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(Comment.MinCount, Comment.MaxCount));
