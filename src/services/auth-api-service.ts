import { AuthStatus } from '../utils/consts';
import { TAuthData } from '../types/user';
import { TTypeAs } from '../types/helper';

class AuthApiService {
  #authStatus: TTypeAs<typeof AuthStatus> = AuthStatus.NoAuth;
  #authData: TAuthData | null = null;

  get authStatus() {
    return this.#authStatus;
  }

  setAuthStatus(status: TTypeAs<typeof AuthStatus>) {
    this.#authStatus = status;
  }

  get authUser() {
    return this.#authData;
  }

  setAuthUser(data: TAuthData | null) {
    this.#authData = data;
  }
}

export default new AuthApiService();
