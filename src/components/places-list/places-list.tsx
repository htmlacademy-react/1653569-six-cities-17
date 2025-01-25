import { CARD_STYLES, MarkType, PageType } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { TTypeAs } from '../../types/helper';
import { selectSortedPlaces } from '../../store/places/places.selectors';
import PlaceCard from '../place-card/place-card';
import { getStyles } from '../../utils/helpers';

type TPlacesListProp = {
  pageType: TTypeAs<typeof PageType>;
}

export default function PlacesList({ pageType }: TPlacesListProp): JSX.Element {
  const sortedPlaceCards = useAppSelector(selectSortedPlaces);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedPlaceCards.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          markType={MarkType.Small}
          pageType={pageType}
          {...getStyles(pageType, CARD_STYLES)}
        />
      ))}
    </div>
  );
}
