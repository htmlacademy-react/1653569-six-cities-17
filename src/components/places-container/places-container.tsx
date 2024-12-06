import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import { TPlaceCard } from '../../types/place-card';

type TPlacesContainerProps = {
  placeCards: TPlaceCard[];
  activeTab: string;
  onActivePlaceCardId: (id: string | null) => void;
}

export default function PlacesContainer({ placeCards, activeTab, onActivePlaceCardId }: TPlacesContainerProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placeCards.length} places to stay in {activeTab}</b>

      <PlacesSorting />
      <PlacesList
        placeCards={placeCards}
        onActivePlaceCardId={onActivePlaceCardId}
      />
    </section>
  );
}
