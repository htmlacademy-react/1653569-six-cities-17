import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../routes/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { AppRoute } from '../utils/consts';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
              <LoginPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}${AppRoute.ID}`}
            element={
              <OfferPage
                onComment={() => {
                  throw new Error('Function \'onComment\' isn\'t implemented.');
                }}
              />
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={
              <NotFoundPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
