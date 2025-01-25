import { Link } from 'react-router-dom';
import { TTypeAs } from '../../types/helper';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectUserData } from '../../store/user/user.selectors';
import { selectFavorites } from '../../store/favorites/favorites.selectors';

type TUserProps = {
  authStatus: TTypeAs<typeof AuthorizationStatus>;
}

export default function User({ authStatus }: TUserProps): JSX.Element {
  const link = authStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login;
  const favoritesCard = useAppSelector(selectFavorites);
  const userData = useAppSelector(selectUserData);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={link}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          authStatus === AuthorizationStatus.Auth && userData
            ?
            <>
              <span className="header__user-name user__name">{userData.email}</span>
              <span className="header__favorite-count">{favoritesCard.length}</span>
            </>
            : <span className="header__login">Sign in</span>
        }
      </Link>
    </li>
  );
}
