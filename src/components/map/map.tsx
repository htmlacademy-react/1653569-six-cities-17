import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { MapType, UrlMarker } from '../../utils/consts';
import { TTypeAs } from '../../types/helpers';
import { TPlaceCard } from '../../types/place-card';
import { getIconStyles } from '../../utils/helpers';
import 'leaflet/dist/leaflet.css';

const defaultPin = getIconStyles(UrlMarker.Default);
const currentPin = getIconStyles(UrlMarker.Current);

type TMapProps = {
  cityPlaceCards: TPlaceCard[];
  mapType: TTypeAs<typeof MapType>;
  activePlaceCardId?: string | null;
}

export default function Map({ cityPlaceCards, mapType, activePlaceCardId }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityPlaceCards[0]);

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

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>);
}
