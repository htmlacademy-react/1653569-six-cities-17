import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../routes/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { AppRoute, AuthStatus } from '../utils/consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getPlaceCards } from '../store/action';

const authStatus = AuthStatus.Auth;

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getPlaceCards());
  const placeCards = useAppSelector((state) => state.placeCards);
  const placeFavorites = placeCards.filter((item) => item.isFavorite);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                placeFavorites={placeFavorites}
                authStatus={authStatus}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPage
                authStatus={authStatus}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authStatus={authStatus}
              >
                <FavoritesPage
                  placeFavorites={placeFavorites}
                  authStatus={authStatus}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}${AppRoute.ID}`}
            element={
              <OfferPage
                placeFavorites={placeFavorites}
                authStatus={authStatus}
                onComment={() => {
                  throw new Error('Function \'onComment\' isn\'t implemented.');
                }}
              />
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={
              <NotFoundPage
                placeFavorites={placeFavorites}
                authStatus={authStatus}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
