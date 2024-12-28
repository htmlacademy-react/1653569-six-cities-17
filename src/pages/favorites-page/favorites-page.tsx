import { Helmet } from 'react-helmet-async';
import cx from 'classix';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { LogoType } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';

export default function FavoritesPage(): JSX.Element {
  const placeFavorites = useAppSelector((state) => state.placeFavorites);
  const hasFavorites = !!placeFavorites.length;

  return (
    <div className={cx('page', !hasFavorites && 'page--favorites-empty')}>
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>

      <Header logoType={LogoType.Header} />

      <main className={cx('page__main', 'page__main--favorites', !hasFavorites && 'page__main--favorites-empty')}>
        <div className="page__favorites-container container">
          {
            hasFavorites
              ?
              <FavoritesList
                places={Object.groupBy(placeFavorites, ({city: {name}}) => name)}
              />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer
        isContainer={hasFavorites}
        logoType={LogoType.Footer}
      />
    </div>
  );
}
