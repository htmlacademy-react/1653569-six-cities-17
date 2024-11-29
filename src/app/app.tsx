import MainPage from '../pages/main-page/main-page';
import { TPlaceCard } from '../types/place-card';
// import FavoritesPage from '../pages/favorites-page/favorites-page';
// import OfferPage from '../pages/offer-page/offer-page';

type TAppProps = {
  placeCards: TPlaceCard[];
}

export default function App({ placeCards }: TAppProps): JSX.Element {
  return (
    <MainPage placeCards={placeCards} />
    // <FavoritesPage/>
    // <OfferPage/>
  );
}
