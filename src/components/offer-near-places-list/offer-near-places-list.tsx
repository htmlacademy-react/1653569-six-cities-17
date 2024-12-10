import PlaceCard from '../place-card/place-card';
import { MarkType, PageType } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';

type TOfferNearPlacesList = {
  offerNearPlaces: TPlaceCard[];
}

export default function OfferNearPlacesList({ offerNearPlaces }: TOfferNearPlacesList): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offerNearPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              markType={MarkType.Small}
              {...getPlaceCardStyles(PageType.Offer)}
            />
          ))
        }
      </div>
    </section>
  );
}
