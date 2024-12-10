import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { MapType, UrlMarker } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';
import { TPlaceCard } from '../../types/place-card';
import { TOfferCard } from '../../types/offer-card';
import { getIconStyles } from '../../utils/helpers';
import 'leaflet/dist/leaflet.css';

const defaultPin = getIconStyles(UrlMarker.Default);
const currentPin = getIconStyles(UrlMarker.Current);

type TMapProps = {
  cityPlaceCards: TPlaceCard[] | TOfferCard[];
  activePlaceCardId?: string | null;
  currentOfferCard?: TOfferCard;
  mapType: TTypeAs<typeof MapType>;

}

export default function Map({ cityPlaceCards, activePlaceCardId, currentOfferCard, mapType }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityPlaceCards[0] as TPlaceCard);

  const defaultIcon = leaflet.icon(defaultPin);
  const currentIcon = leaflet.icon(currentPin);

  useEffect(() => {
    if (map) {
      cityPlaceCards.forEach((placeCard) => {
        leaflet
          .marker({
            lat: placeCard.location.latitude,
            lng: placeCard.location.longitude
          }, {
            icon: (placeCard.id === activePlaceCardId)
              ? currentIcon
              : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, cityPlaceCards, activePlaceCardId, currentIcon, defaultIcon]);

  useEffect(() => {
    if (map && currentOfferCard) {
      leaflet
        .marker({
          lat: currentOfferCard.location.latitude,
          lng: currentOfferCard.location.longitude
        }, {
          icon: currentIcon
        })
        .addTo(map);
    }
  });

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>);
}
