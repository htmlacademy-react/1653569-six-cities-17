import User from '../user/user';
import Logo from '../logo/logo';
import {AuthorizationStatus, LOGO_STYLES, LogoType, PageType} from '../../utils/consts';
import { getStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logoutAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';

type THeaderProps = {
  placeFavorites?: TPlaceCard[];
  pageType?: TTypeAs<typeof PageType>;
  logoType: TTypeAs<typeof LogoType>;
  isAuth?: boolean;
}

export default function Header({ pageType, logoType, isAuth = true }: THeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo
              pageType={pageType}
              {...getStyles(logoType, LOGO_STYLES)}
            />
          </div>

          {
            isAuth &&
            <nav className="header__nav">
              <ul className="header__nav-list">

                <User authStatus={authStatus} />

                {
                  authStatus === AuthorizationStatus.Auth &&
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to="#"
                        onClick={() => {
                          dispatch(logoutAction());
                        }}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
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
