import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../routes/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { AppRoute, AuthStatus, City } from '../utils/consts';
import { TPlaceCard } from '../types/place-card';

type TAppProps = {
  placeCards: TPlaceCard[];
}

const authStatus = AuthStatus.Auth;
const activeTab = City.Amsterdam;

export default function App({ placeCards }: TAppProps): JSX.Element {
  const placeFavorites = placeCards.filter((item) => item.isFavorite);
  const cityPlaceCards = placeCards.filter((item) => item.city.name === activeTab);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                cityPlaceCards={cityPlaceCards}
                placeFavorites={placeFavorites}
                authStatus={authStatus}
                activeTab={activeTab}
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
                cityPlaceCards={cityPlaceCards}
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
