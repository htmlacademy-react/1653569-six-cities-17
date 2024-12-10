import PlaceCard from '../place-card/place-card';
import { MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard} from '../../types/place-card';

type TPlacesListProp = {
  cityPlaceCards: TPlaceCard[];
  onActivePlaceCardId: (id: string | null) => void;
}

export default function PlacesList({ cityPlaceCards, onActivePlaceCardId }: TPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cityPlaceCards.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            markType={MarkType.Small}
            onActivePlaceCardId={onActivePlaceCardId}
            {...getPlaceCardStyles(PageType.Main)}
          />
        ))
      }
    </div>
  );
}
