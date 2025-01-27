import { NameSpace } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectOfferCard = (state: TState) => state[NameSpace.Offer].offerCard;
export const selectOfferCardLoadingStatus = (state: TState) => state[NameSpace.Offer].isLoading;
export const selectOfferCardErrorStatus = (state: TState) => state[NameSpace.Offer].hasError;
