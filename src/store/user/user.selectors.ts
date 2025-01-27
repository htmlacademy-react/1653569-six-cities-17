import { AuthorizationStatus, NameSpace } from '../../utils/consts';
import { TState } from '../../types/state';

export const selectAuthorizationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
export const selectAuthCheckedStatus = (state: TState) => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const selectUserData = (state: TState) => state[NameSpace.User].userData;
