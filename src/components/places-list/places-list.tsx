import PlaceCard from '../place-card/place-card';
import { MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard} from '../../types/place-card';

type TPlacesListProp = {
  placeCards: TPlaceCard[];
  onActivePlaceCardId: (id: string | null) => void;
}

export default function PlacesList({ placeCards, onActivePlaceCardId }: TPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        placeCards.map((place) => (
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
