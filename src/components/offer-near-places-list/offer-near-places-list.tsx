import PlaceCard from '../place-card/place-card';
import {CARD_STYLES, MarkType, PageType} from '../../utils/consts';
import { getStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';
import { memo, useMemo } from 'react';

type TOfferNearbyPlacesList = {
  offerNearbyPlaces: TPlaceCard[] | [];
  pageType: TTypeAs<typeof PageType>;
}

function OfferNearbyPlacesList({ offerNearbyPlaces, pageType }: TOfferNearbyPlacesList): JSX.Element {
  const placeCardStyle = useMemo(() => getStyles(pageType, CARD_STYLES), [pageType]);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offerNearbyPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              markType={MarkType.Small}
              pageType={pageType}
              {...placeCardStyle}
            />
          ))
        }
      </div>
    </section>
  );
}

const MemoizedOfferNearbyPlacesList = memo(OfferNearbyPlacesList);
export default MemoizedOfferNearbyPlacesList;
