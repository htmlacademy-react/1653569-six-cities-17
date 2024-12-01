import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { AuthStatus, LogoType } from '../../utils/consts';
import { placeCards } from '../../mocks/place-cards';
import { TTypeAs } from '../../types/helpers';
import { TPlaceCard } from '../../types/place-card';

type TFavoritesPageProps = {
  placeFavorites: TPlaceCard[];
  authStatus: TTypeAs<typeof AuthStatus>;
}

export default function FavoritesPage({ placeFavorites, authStatus }: TFavoritesPageProps): JSX.Element {
  const filteredPlaces = placeCards.filter((item) => item.isFavorite);
  const isPlaces = !!filteredPlaces.length;

  return (
    <div className={`page ${!isPlaces ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>

      <Header
        placeFavorites={placeFavorites}
        authStatus={authStatus}
        logoType={LogoType.Header}
      />

      <main className={`page__main page__main--favorites ${!isPlaces ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            isPlaces
              ?
              <FavoritesList
                places={Object.groupBy(filteredPlaces, ({city: {name}}) => name)}
              />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer
        isContainer={isPlaces}
        logoType={LogoType.Footer}
      />
    </div>
  );
}
