import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';

type TPrivateRouteProps = {
  authStatus: TTypeAs<typeof AuthStatus>;
  children: JSX.Element;
}

export default function PrivateRoute({ authStatus, children }: TPrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
