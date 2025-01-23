import PlaceCard from '../place-card/place-card';
import {CARD_STYLES, MarkType, PageType} from '../../utils/consts';
import { getStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TTypeAs } from '../../types/helper';

type TOfferNearbyPlacesList = {
  offerNearbyPlaces: TPlaceCard[] | [];
  pageType: TTypeAs<typeof PageType>;
}

export default function OfferNearbyPlacesList({ offerNearbyPlaces, pageType }: TOfferNearbyPlacesList): JSX.Element {
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
              {...getStyles(pageType, CARD_STYLES)}
            />
          ))
        }
      </div>
    </section>
  );
}
