import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import { City, PageType } from '../../utils/consts';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';

type TPlacesContainerProps = {
  cityPlaceCards: TPlaceCard[];
  activeCity: TTypeAs<typeof City>;
  pageType: TTypeAs<typeof PageType>;
}

export default function PlacesContainer({ cityPlaceCards, activeCity, pageType }: TPlacesContainerProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cityPlaceCards.length} place{cityPlaceCards.length > 1 && 's'} to stay in {activeCity}</b>

      <PlacesSorting />
      <PlacesList pageType={pageType} />
    </section>
  );
}
