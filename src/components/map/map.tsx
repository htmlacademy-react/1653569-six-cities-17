import { useEffect, useRef } from 'react';
import leaflet, { layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { MapType, UrlMarker } from '../../utils/consts';
import { TTypeAs } from '../../types/helper';
import { TPlaceCard } from '../../types/place-card';
import { TOfferCard } from '../../types/offer-card';
import { getIconStyles } from '../../utils/helpers';
import 'leaflet/dist/leaflet.css';

const defaultIcon = leaflet.icon(getIconStyles(UrlMarker.Default));
const currentIcon = leaflet.icon(getIconStyles(UrlMarker.Current));

type TMapProps = {
  cityPlaceCards: TPlaceCard[];
  activePlaceCardId?: string | null;
  currentOfferCard?: TOfferCard;
  mapType: TTypeAs<typeof MapType>;
}

export default function Map({ cityPlaceCards, activePlaceCardId, currentOfferCard, mapType }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityPlaceCards[0]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const placeCards = currentOfferCard ? [currentOfferCard, ...cityPlaceCards] : cityPlaceCards;
      placeCards.forEach((placeCard) => {
        leaflet
          .marker({
            lat: placeCard.location.latitude,
            lng: placeCard.location.longitude
          }, {
            icon: (placeCard.id === activePlaceCardId || placeCard.id === currentOfferCard?.id)
              ? currentIcon
              : defaultIcon,
          })
          .bindPopup(placeCard.title, {closeButton: false})
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, activePlaceCardId, currentOfferCard, cityPlaceCards]);

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>);
}
