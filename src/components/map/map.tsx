import leaflet, { layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { memo, useEffect, useMemo, useRef } from 'react';
import { MapType, UrlMarker } from '../../utils/consts';
import { TOfferCard } from '../../types/offer-card';
import { getIconOptions } from '../../utils/helpers';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectActiveCardId } from '../../store/places/places.selectors';
import { TTypeAs } from '../../types/helper';
import { TPlaceCard } from '../../types/place-card';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  cityPlaceCards: TPlaceCard[];
  currentOfferCard?: TOfferCard;
  mapType: TTypeAs<typeof MapType>;
}

function Map({ cityPlaceCards, currentOfferCard, mapType }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityPlaceCards[0].city.location, mapType);
  const defaultIcon = useMemo(() => leaflet.icon(getIconOptions(UrlMarker.Default)), []);
  const currentIcon = useMemo(() => leaflet.icon(getIconOptions(UrlMarker.Current)), []);
  const activePlaceCardId = useAppSelector(selectActiveCardId);

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
          .bindPopup(placeCard.title, {closeButton: false, offset: [0, -15]})
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, activePlaceCardId, currentOfferCard, cityPlaceCards, currentIcon, defaultIcon]);

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>);
}

const MemoizedMap = memo(Map);
export default MemoizedMap;
