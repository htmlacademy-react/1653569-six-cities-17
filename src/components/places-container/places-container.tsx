import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import { TPlaceCard } from '../../types/place-card';

type TPlacesContainerProps = {
  placeCards: TPlaceCard[];
}

export default function PlacesContainer({ placeCards }: TPlacesContainerProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placeCards.length} places to stay in Amsterdam</b>

      <PlacesSorting />
      <PlacesList placeCards={placeCards} />
    </section>
  );
}
