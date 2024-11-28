import PlaceCard from '../place-card/place-card';
import { TPlaceCard} from '../../types/place-card';
import { getPlaceCardStyles } from '../../utils/helpers';
import { PageType } from '../../utils/consts';

type TPlacesListProp = {
  placeCards: TPlaceCard[];
}

export default function PlacesList({ placeCards }: TPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        placeCards.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            {...getPlaceCardStyles(PageType.Main)}
          />
        ))
      }
    </div>
  );
}
