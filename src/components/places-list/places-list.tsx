import PlaceCard from '../place-card/place-card';
import { MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard} from '../../types/place-card';

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
            markType={MarkType.Small}
            {...getPlaceCardStyles(PageType.Main)}
          />
        ))
      }
    </div>
  );
}
