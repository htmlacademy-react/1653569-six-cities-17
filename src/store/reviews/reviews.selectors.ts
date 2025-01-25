import { RootState } from '../../types/state';
import { NameSpace } from '../../utils/consts';

export const selectReviews = (state: RootState) => state[NameSpace.Reviews].reviews;
export const selectReviewsLoadingStatus = (state: RootState) => state[NameSpace.Reviews].isLoading;
export const selectReviewsErrorStatus = (state: RootState) => state[NameSpace.Reviews].hasError;
export const selectSubmitCommentStatus = (state: RootState) => state[NameSpace.Reviews].isSubmitComment;
export const selectSubmitErrorStatus = (state: RootState) => state[NameSpace.Reviews].hasSubmitCommentError;
