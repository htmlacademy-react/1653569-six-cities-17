import { Helmet } from 'react-helmet-async';
import cx from 'classix';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { LogoType } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';

export default function FavoritesPage(): JSX.Element {
  const favoritesCards = useAppSelector((state) => state.favoritesCards);
  const isFavorites = !!favoritesCards.length;

  return (
    <div className={cx('page', !isFavorites && 'page--favorites-empty')}>
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>

      <Header logoType={LogoType.Header} />

      <main className={cx('page__main', 'page__main--favorites', !isFavorites && 'page__main--favorites-empty')}>
        <div className="page__favorites-container container">
          {
            isFavorites
              ?
              <FavoritesList
                places={Object.groupBy(favoritesCards, ({city: {name}}) => name)}
              />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer
        isContainer={isFavorites}
        logoType={LogoType.Footer}
      />
    </div>
  );
}
