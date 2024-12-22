import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';

type TPrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: TPrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
