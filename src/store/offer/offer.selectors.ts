import { RootState } from '../../types/state';
import { NameSpace } from '../../utils/consts';

export const selectOffer = (state: RootState) => state[NameSpace.Offer].offerCard;
export const selectOfferLoadingStatus = (state: RootState) => state[NameSpace.Offer].isLoading;
export const selectOfferErrorStatus = (state: RootState) => state[NameSpace.Offer].hasError;
