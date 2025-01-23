import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';

type TPrivateRouteProps = {
  authStatus: TTypeAs<typeof AuthorizationStatus>;
  children: JSX.Element;
}

export default function PrivateRoute({ authStatus, children }: TPrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
