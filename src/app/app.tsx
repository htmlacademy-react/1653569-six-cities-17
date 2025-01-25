import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../routes/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { AppRoute, AuthorizationStatus } from '../utils/consts';
import { useAppSelector } from '../hooks/use-app-selector';
import Loading from '../components/spinner/spinner';
import HistoryRouter from '../routes/history-route/history-route';
import browserHistory from '../browser-history';
import { selectAuthorizationCheckedStatus, selectAuthorizationStatus } from '../store/user/user.selectors';
import { selectPlacesLoadingStatus } from '../store/places/places.selectors';
import { useEffect } from 'react';
import { checkAuthorizationAction, fetchFavoritesAction, fetchPlacesAction } from '../store/api-actions';
import { useAppDispatch } from '../hooks/use-app-dispatch';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorizationChecked = useAppSelector(selectAuthorizationCheckedStatus);
  const isPlacesLoading = useAppSelector(selectPlacesLoadingStatus);

  useEffect(() => {
    dispatch(checkAuthorizationAction());
    dispatch(fetchPlacesAction());
  }, [dispatch]
  );

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [authorizationStatus, dispatch]);

  if (!isAuthorizationChecked || isPlacesLoading) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPage
                authorizationStatus={authorizationStatus}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}${AppRoute.Id}`}
            element={
              <OfferPage />
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={
              <NotFoundPage />
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
