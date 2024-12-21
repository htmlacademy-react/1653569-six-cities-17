import { AuthStatus, AuthUser } from '../utils/consts';
import { TAuthUser } from '../types/user';
import { TTypeAs } from '../types/helper';

class AuthApiService {
  #authStatus: TTypeAs<typeof AuthStatus> = AuthStatus.NoAuth;
  #authData: TAuthUser = AuthUser;

  get authStatus() {
    return this.#authStatus;
  }

  setAuthStatus(status: TTypeAs<typeof AuthStatus>) {
    this.#authStatus = status;
  }

  get authUser() {
    return this.#authData;
  }

  setAuthUser(data: TAuthUser) {
    this.#authData = data;
  }
}

export default new AuthApiService();
