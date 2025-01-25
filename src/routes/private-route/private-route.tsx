import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';

type TPrivateRouteProps = {
  authorizationStatus: TTypeAs<typeof AuthorizationStatus>;
  children: JSX.Element;
}

export default function PrivateRoute({ authorizationStatus, children }: TPrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
