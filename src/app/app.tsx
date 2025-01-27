import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import HistoryRouter from '../routes/history-router/history-router';
import browserHistory from '../browser-history';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../routes/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import Loading from '../components/spinner/spinner';
import { AppRoute, AuthorizationStatus } from '../utils/consts';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { useAppSelector } from '../hooks/use-app-selector';
import { selectAuthCheckedStatus, selectAuthorizationStatus } from '../store/user/user.selectors';
import { selectPlacesLoadingStatus } from '../store/places/places.selectors';
import { checkAuthAction, fetchFavoritesAction, fetchPlacesAction } from '../store/api-actions';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorizationChecked = useAppSelector(selectAuthCheckedStatus);
  const isPlacesLoading = useAppSelector(selectPlacesLoadingStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchPlacesAction());
  }, [dispatch]
  );

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
      dispatch(fetchPlacesAction());
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
