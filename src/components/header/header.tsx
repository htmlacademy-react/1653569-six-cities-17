import User from '../user/user';
import Logo from '../logo/logo';
import { AuthStatus, LogoType, PageType } from '../../utils/consts';
import { getLogoStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';

type THeaderProps = {
  placeFavorites?: TPlaceCard[];
  authStatus?: TTypeAs<typeof AuthStatus>;
  pageType?: TTypeAs<typeof PageType>;
  logoType: TTypeAs<typeof LogoType>;
  isAuth?: boolean;
}

export default function Header({ placeFavorites, authStatus = AuthStatus.Unknown, pageType, logoType, isAuth = true }: THeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo
              pageType={pageType}
              {...getLogoStyles(logoType)}
            />
          </div>

          {
            isAuth &&
            <nav className="header__nav">
              <ul className="header__nav-list">

                <User
                  authStatus={authStatus}
                  placeFavorites={placeFavorites}
                />

                {
                  authStatus === AuthStatus.Auth &&
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                }
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
}
