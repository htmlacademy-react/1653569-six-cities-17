import { Link } from 'react-router-dom';
import { TTypeAs } from '../../types/helper';
import { AppRoute, AuthStatus } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';

type TUserProps = {
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function User({ authStatus }: TUserProps): JSX.Element {
  const link = authStatus === AuthStatus.Auth ? AppRoute.Favorites : AppRoute.Login;
  const favoritesCard = useAppSelector((state) => state.favoritesCards);
  const authUser = useAppSelector((state) => state.authUser);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={link}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          authStatus === AuthStatus.Auth
            ?
            <>
              <span className="header__user-name user__name">{authUser.email}</span>
              <span className="header__favorite-count">{favoritesCard.length}</span>
            </>
            : <span className="header__login">Sign in</span>
        }
      </Link>
    </li>
  );
}
