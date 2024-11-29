import PlaceCard from '../place-card/place-card';
import { PageType } from '../../utils/consts';
import { CardCount } from '../../utils/consts';
import { getPlaceCardStyles } from '../../utils/helpers';
import { TPlaceCard } from '../../types/place-card';

type TOfferNearPlacesList = {
  placeCards: TPlaceCard[];
}

export default function OfferNearPlacesList({ placeCards }: TOfferNearPlacesList): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          placeCards.slice(CardCount.Min, CardCount.Max).map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              {...getPlaceCardStyles(PageType.Offer)}
            />
          ))
        }
      </div>
    </section>
  );
}
