import User from '../user/user';
import Logo from '../logo/logo';
import {AuthorizationStatus, LOGO_STYLES, LogoType, PageType} from '../../utils/consts';
import { getStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchPlacesAction, logoutAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { resetFavorites } from '../../store/favorites/favorites.slice';
import { memo, useMemo } from 'react';

type THeaderProps = {
  placeFavorites?: TPlaceCard[];
  pageType?: TTypeAs<typeof PageType>;
  logoType: TTypeAs<typeof LogoType>;
  isAuth?: boolean;
}

function Header({ pageType, logoType, isAuth = true }: THeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const logoStyle = useMemo(() => getStyles(logoType, LOGO_STYLES), [logoType]);

  const handleLogoutClick = () => {
    dispatch(logoutAction())
      .then(() => {
        dispatch(resetFavorites());
        dispatch(fetchPlacesAction());
      });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo
              pageType={pageType}
              {...logoStyle}
            />
          </div>

          {
            isAuth &&
            <nav className="header__nav">
              <ul className="header__nav-list">

                <User authorizationStatus={authorizationStatus} />

                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to="#"
                        onClick={handleLogoutClick}
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

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
