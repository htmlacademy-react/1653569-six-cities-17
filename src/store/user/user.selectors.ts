import { RootState } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../utils/consts';

export const selectAuthorizationStatus = (state: RootState) => state[NameSpace.User].authorizationStatus;
export const selectAuthorizationCheckedStatus = (state: RootState) => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const selectUserData = (state: RootState) => state[NameSpace.User].userData;
