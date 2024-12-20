import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { City } from '../../utils/consts';

type TPlacesContainerProps = {
  cityPlaceCards: TPlaceCard[];
  activeCity: TTypeAs<typeof City>;
  onActivePlaceCardId: (id: string | null) => void;
}

export default function PlacesContainer({ cityPlaceCards, activeCity, onActivePlaceCardId }: TPlacesContainerProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cityPlaceCards.length} places to stay in {activeCity}</b>

      <PlacesSorting />
      <PlacesList
        cityPlaceCards={cityPlaceCards}
        onActivePlaceCardId={onActivePlaceCardId}
      />
    </section>
  );
}
