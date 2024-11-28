import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { placeCards } from '../../mocks/place-cards';

export default function FavoritesPage(): JSX.Element {
  const filteredPlaces = placeCards.filter((item) => item.isFavorite);
  const isPlaces = !!filteredPlaces.length;

  return (
    <div className={`page ${!isPlaces ? 'page--favorites-empty' : ''}`}>
      <Header />

      <main className={`page__main page__main--favorites ${!isPlaces ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            isPlaces
              ? <FavoritesList places={Object.groupBy(filteredPlaces, ({city: {name}}) => name)} />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer isContainer={isPlaces}/>
    </div>
  );
}
