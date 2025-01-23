import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/consts';
import { TReviewsState } from '../../types/state';
import { fetchReviewsAction, postCommentAction } from '../api-actions';
import { TUserReview } from '../../types/user';

const initialState: TReviewsState = {
  reviews: [],
  isLoading: false,
  hasError: false,
  isSubmitComment: false,
  hasSubmitCommentError: false,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isSubmitComment = true;
        state.hasSubmitCommentError = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.isSubmitComment = false;
        state.reviews.push(action.payload as TUserReview);
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isSubmitComment = false;
        state.hasSubmitCommentError = true;
      });
  }
});
