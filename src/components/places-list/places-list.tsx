import { useMemo } from 'react';
import PlaceCard from '../place-card/place-card';
import { CARD_STYLES, MarkType, PageType } from '../../utils/consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectSortedPlaces } from '../../store/places/places.selectors';
import { getStyles } from '../../utils/helpers';
import { TTypeAs } from '../../types/helper';

type TPlacesListProp = {
  pageType: TTypeAs<typeof PageType>;
}

export default function PlacesList({ pageType }: TPlacesListProp): JSX.Element {
  const sortedPlaceCards = useAppSelector(selectSortedPlaces);
  const placeCardStyle = useMemo(() => getStyles(pageType, CARD_STYLES), [pageType]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedPlaceCards.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          markType={MarkType.Small}
          pageType={pageType}
          {...placeCardStyle}
        />
      ))}
    </div>
  );
}
