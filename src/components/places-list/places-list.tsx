import PlaceCard from '../place-card/place-card';
import { MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles, sortingCityPlaceCards } from '../../utils/helpers';
import { TPlaceCard} from '../../types/place-card';
import { useAppSelector } from '../../hooks/use-app-selector';

type TPlacesListProp = {
  cityPlaceCards: TPlaceCard[];
  onActivePlaceCardId: (id: string | null) => void;
}

export default function PlacesList({ cityPlaceCards, onActivePlaceCardId }: TPlacesListProp): JSX.Element {
  const activeSort = useAppSelector((state) => state.activeSort);
  const sortedPlaceCards = sortingCityPlaceCards(cityPlaceCards, activeSort);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedPlaceCards.map((place) => (
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
