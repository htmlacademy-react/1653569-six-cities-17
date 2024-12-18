import { Link } from 'react-router-dom';
import { TTypeAs } from '../../types/helper';
import { AppRoute, AuthStatus } from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';

type TUserProps = {
  placeFavorites?: TPlaceCard[];
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function User({ authStatus, placeFavorites }: TUserProps): JSX.Element {
  const link = authStatus === AuthStatus.Auth ? AppRoute.Favorites : AppRoute.Login;

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={link}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          authStatus === AuthStatus.Auth && placeFavorites
            ?
            <>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">{placeFavorites.length}</span>
            </>
            : <span className="header__login">Sign in</span>
        }
      </Link>
    </li>
  );
}
